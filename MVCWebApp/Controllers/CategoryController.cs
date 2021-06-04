using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MVCWebApp.Models;

namespace MVCWebApp.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public CategoryController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index(string productViewType)
        {
            ViewData["productViewType"] = productViewType;
            return View();
        }
    }
}