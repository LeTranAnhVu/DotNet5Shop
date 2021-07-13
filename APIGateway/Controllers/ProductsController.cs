using System;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;

namespace APIGateway.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ProductsController: ControllerBase
    {
        public IActionResult Get()
        {
             
            return Ok(new {message = "nice"});
        }
    }
}