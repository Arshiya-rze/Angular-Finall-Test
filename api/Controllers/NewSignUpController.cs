using System.Linq;
using api.Models;
using api.settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewSignUpController : Controller
{
    private readonly IMongoCollection<NewSignUp> _collection;

    public NewSignUpController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<NewSignUp>("signups");
    }

    [HttpPost("register")]
    public ActionResult<NewSignUp> Create(NewSignUp userInput)
    {
/*         NewSignUp newSignUp = _collection.Find<NewSignUp>(u => u.NationalCode == userInput.NationalCode).FirstOrDefault();

        if(newSignUp is not null)
            BadRequest($"A persone with {userInput.NationalCode} is already registered."); */

        bool hasDocs = _collection.AsQueryable().Where<NewSignUp>(n => n.NationalCode == userInput.NationalCode).Any();

        if(hasDocs)
            return BadRequest($"A persone with National Code {userInput.NationalCode} is already registered.");

        NewSignUp newSignUp = new NewSignUp(
            Id: null,
            NationalCode: userInput.NationalCode.Trim(),
            Name: userInput.Name.Trim(),
            Email: userInput.Email?.ToLower().Trim()
        );

        _collection.InsertOne(newSignUp);

        return newSignUp;
    }
    
    [HttpGet("get-all")]
    public ActionResult<IEnumerable<NewSignUp>> GetAll()
    {
        List<NewSignUp> newSignUp = _collection.Find<NewSignUp>(new BsonDocument()).ToList();

        if(!newSignUp.Any())    
            return NoContent();

        return newSignUp;
    }
}