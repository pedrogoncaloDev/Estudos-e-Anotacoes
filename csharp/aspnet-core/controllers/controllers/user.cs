using controllers.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace controllers.Controllers;

[ApiController]
public class UserController(IService service) : ControllerBase
{
	[HttpGet("users")]
	public IActionResult GetAll() => Ok(service.GetAll());
	
	[HttpGet("user/{id}")]
	public IActionResult GetById(int id) => Ok(service.GetById(id));
}