using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using DataAccess;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MVCWebApp.Models;
using MVCWebApp.Services;

namespace MVCWebApp.Controllers
{
    [Route("/product")]
    public class ProductController : Controller
    {
        private readonly ILogger<ProductController> _logger;

        private readonly ProductService _productService;

        public ProductController(ILogger<ProductController> logger, ProductService productService)
        {
            _logger = logger;
            _productService = productService;
        }

        public async Task<IActionResult> Index(string productViewType)
        {
            ViewData["productViewType"] = productViewType;
            var products = await _productService.GetProducts();
            return View(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ProductDetail(int id)
        {
            var products = await _productService.GetProducts();

            var product = await _productService.GetProduct(id);
            // if (product == null)
            // {
            //     return RedirectToPage("Index");
            // }

            return View(product);
        }
    }
}