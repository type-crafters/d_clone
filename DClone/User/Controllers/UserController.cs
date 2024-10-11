using Microsoft.AspNetCore.Mvc;
using DClone.User.DataTransfer;

namespace DClone.User.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    enum SignUpErrorCodes 
    {
        NULL_USERNAME,
        BAD_USERNAME_FORMAT,
        USERNAME_ALREADY_EXISTS,
        NULL_EMAIL,
        BAD_EMAIL_FORMAT,
        Email_ALREADY_EXISTS,
        NULL_PASSWORD,
        BAD_PASSWORD_FORMAT,

    }

    [HttpPost("new")]
    public ActionResult SignUp([FromForm] SignupUser user)
    {
        return Ok("RubielGOD pero en /api/user/new");
    }
}