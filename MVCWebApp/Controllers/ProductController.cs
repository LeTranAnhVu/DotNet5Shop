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

namespace MVCWebApp.Controllers
{
    [Route("/product")]
    public class ProductController : Controller
    {
        private readonly ILogger<ProductController> _logger;

        private readonly List<Product> _products;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
            var productList = new List<Product>();
            var text = "<h2><span style='white-space:pre-wrap;'><span style='color: rgb(83, 129, 53); text-decoration: inherit;'>Origins</span></span><br></h2><p><span style='white-space:pre-wrap;'>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</span><br></p><h2><span style='white-space:pre-wrap;'><span style='color: rgb(83, 129, 53); text-decoration: inherit;'>How to cook</span></span><br></h2><p style='margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-indent: 0px; white-space: normal; background-color: rgb(255, 255, 255);'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.</p><p style='margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-indent: 0px; white-space: normal; background-color: rgb(255, 255, 255);'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><table class='e-rte-table' style='width: 100%; min-width: 0px;'><tbody><tr><td style='width: 33.3333%;' class=''><strong><span style='color: rgb(83, 129, 53); text-decoration: inherit;'>Vitamins</span></strong></td><td style='width: 33.3333%;' class=''><strong><span style='color: rgb(83, 129, 53); text-decoration: inherit;'>Quantity</span></strong></td><td style='width: 33.3333%;' class=''><strong><span style='color: rgb(83, 129, 53); text-decoration: inherit;'>%DV</span></strong></td></tr><tr><td style='width: 33.3333%;' class=''>bababa</td><td style='width: 33.3333%;' class=''>12</td><td style='width: 33.3333%;' class=''>4</td></tr><tr><td style='width: 33.3333%;' class=''>bobobo</td><td style='width: 33.3333%;' class=''>21</td><td style='width: 33.3333%;' class=''>6</td></tr></tbody></table><p><span style='white-space:pre-wrap;'><br></span></p>";

            for (var i = 0; i < 10; i++)
            {
                var rd = new Random();
                productList.Add(new Product()
                {
                    Id = i + 1,
                    Name = "Product Name",
                    Sku = "Product-2020-" + i + 1,
                    Stars = 4.5f,
                    ReviewCount = 1,
                    BriefDescription = "This is a brief description",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    ImageUrl = "~/images/fallback-img.png",
                    Price = 1.23,
                    OldPrice = 9.99,
                    DiscountText = "-36%",
                    DeliveryCost = 0,
                    DeliveryPeriod = DateTime.Today.AddDays(12),
                    ExtraInfo = new Dictionary<string, string>()
                    {
                        {"Freshness", "New (Extra fresh)"},
                        {"Farm", "Grocery Farm Fields "},
                        {"Delivery", "Europe"},
                        {"Stock", "320pcs"}
                    },
                    VerboseDescription = text
                });

                _products = productList;
            }
        }

        public IActionResult Index(string productViewType)
        {
            ViewData["productViewType"] = productViewType;
            return View(_products);
        }

        [HttpGet("{id}")]
        public IActionResult ProductDetail(int id)
        {
            var product = _products.FirstOrDefault(pro => pro.Id == id);
            // if (product == null)
            // {
            //     return RedirectToPage("Index");
            // }

            return View(product);
        }
    }
}