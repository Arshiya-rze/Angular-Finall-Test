using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record SignUp(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id,
    [MinLength(10), MaxLength(10)] string NationalCode,
    [MinLength(3), MaxLength(20)] string FirstName,
    [MinLength(3), MaxLength(20)] string LastName,
    [Range(10, 99)] int Age,
    string Shoes,
    [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$", ErrorMessage ="Bad Email Format.")] string? Email
);