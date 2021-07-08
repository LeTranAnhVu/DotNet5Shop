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
    }
}