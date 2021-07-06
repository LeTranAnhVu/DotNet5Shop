using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCWebApp.Services;

namespace MVCWebApp.Controllers
{
    public class CheckoutController : Controller
    {
        private readonly ProductService _productService;

        public CheckoutController(ProductService productService)
        {
            _productService = productService;
        }

        public async Task<IActionResult> Index()
        {
            var products = await _productService.GetProducts();
            var orderedItems = products.Take(4).ToList();
            return View(orderedItems);
        }

        [HttpGet("/checkout/productDetail")]
        public async Task<object> Order([FromQuery(Name = "products[]")] List<int> productIds)
        {
            var products = await Task.WhenAll(productIds.Select(id => _productService.GetProduct(id)));
            return Ok(new {products});
        }
    }
}