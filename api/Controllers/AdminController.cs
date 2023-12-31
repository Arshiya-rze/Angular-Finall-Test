
using api.Models;
using api.settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly IMongoCollection<Admin> _collection;
    public AdminController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Admin>("admins");
    }

    [HttpPost("register")]
    public ActionResult<Admin> Create(Admin adminIn)
    {
        if(adminIn.Password != adminIn.ConfirmPassword) 
            return BadRequest(" your passwords dont match!");

        Admin admin = new Admin(
            Id: null,
            Email: adminIn.Email.ToLower().Trim(),
            Password: adminIn.Password,
            ConfirmPassword: adminIn.ConfirmPassword
        );

        _collection.InsertOne(admin);

        return admin;
    }

    [HttpPost("login")]
    public ActionResult<Admin> Login(Admin adminIn)
    {
        Admin admin = _collection.Find<Admin>(doc => doc.Email == adminIn.Email && doc.Password == adminIn.Password).FirstOrDefault();

        if (admin is null)
            return Unauthorized("your username or password is wrong");

        return admin;
    }   
}
