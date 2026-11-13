using controllers.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace controllers.Controllers;


public class CompanyController(IService service) : ControllerBase
{
	[HttpGet("company")]
	public IActionResult GetAll() => Ok(service.GetAll());
	
	[HttpGet("company/{id}")]
	public IActionResult GetById(int id) => Ok(service.GetById(id));
}