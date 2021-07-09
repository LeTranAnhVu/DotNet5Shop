using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCWebApp.Dtos;
using MVCWebApp.Services;

namespace MVCWebApp.Controllers
{
    [Route("/api/checkout")]
    [ApiController]
    public class CheckoutApiController : ControllerBase
    {
        private readonly ProductService _productService;

        public CheckoutApiController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("product-detail")]
        public async Task<object> Order([FromQuery(Name = "products[]")] List<int> productIds)
        {
            var products = await Task.WhenAll(productIds.Select(id => _productService.GetProduct(id)));
            return Ok(new {products});
        }

        [HttpPost]
        public async Task<object> CreateOrder(CheckoutFormDto dto)
        {
            if (ModelState.IsValid)
            {
                return Ok(new {message = "Your order is waiting for processing"});
            }

            return BadRequest();
        }

        [HttpPost("check-coupon")]
        public async Task<object> Order(CouponDto dto)
        {
            var discountPercent = 0;
            if (dto.Code == "BLFR21")
            {
                discountPercent = 20;
            }
            else if (dto.Code == "WMD21")
            {
                discountPercent = 15;
            }

            return Ok(new {Code = dto.Code, discountPercent});
        }
    }
}