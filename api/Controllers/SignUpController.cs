using api.Models;
using api.settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SignUpController : ControllerBase
{
    private readonly IMongoCollection<SignUp> _collection;
    
    public SignUpController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<SignUp>("sign-ups");
    }

    [HttpPost("register")]
    public ActionResult<SignUp> Create(SignUp userInput)
    {
        SignUp signUp = _collection.Find<SignUp>(u => u.NationalCode == userInput.NationalCode).FirstOrDefault();

        if(signUp is not null)
            BadRequest($"A persone with {userInput.NationalCode} is already registered.");

        bool hasDocs = _collection.AsQueryable().Where<SignUp>(u => u.NationalCode == userInput.NationalCode).Any();

        if(hasDocs)
            return BadRequest($"A persone with National Code {userInput.NationalCode} is already registered.");

        SignUp newUser = new SignUp(
            Id: null,
            NationalCode: userInput.NationalCode.Trim(),
            FirstName: userInput.FirstName.Trim(),
            LastName: userInput.LastName.Trim(),
            Age: userInput.Age,
            Shoes: userInput.Shoes.Trim(),
            Email: userInput.Email?.ToLower().Trim()
        );

        _collection.InsertOne(newUser);

        return newUser;
    }

    // [HttpGet("get-all")]
    // public ActionResult<IEnumerable<SignUp>> GetAll()
    // {
    //     List<SignUp> signUp = _collection.Find<SignUp>(new BsonDocument()).ToList();

    //     if(!signUp.Any())
    //         return NoContent();

    //     return signUp;
    // }
}