using controllers.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace controllers.Controllers;

[ApiController]
public class UserController(IUserService userService) : ControllerBase
{
	[HttpGet("users")]
	public IActionResult GetAll() => Ok(userService.GetAll());
	
	[HttpGet("user/{id}")]
	public IActionResult GetById(int id) => Ok(userService.GetById(id));
}