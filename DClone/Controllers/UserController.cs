using Microsoft.AspNetCore.Mvc;
using DClone.Models;
using DClone.Data;

namespace DClone.Controllers;

[Route("api/users")]
[Controller]
public class UserController : ControllerBase
{
    [HttpPost("signup")]
    public ActionResult RegisterUser([FromForm] UserSignupModel user) {
        return Ok(""); 
    }
}