using System.Threading.Tasks;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using MVCWebApp.Models;

namespace MVCWebApp.ViewComponents
{
    public enum ProductViewVariant
    {
        SimpleCard,
        AdvancedCard
    }

    public class ProductViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(Product product, ProductViewVariant variant)
        {
            string view = variant switch
            {
                ProductViewVariant.AdvancedCard => "ProductCardAdvanced",
                _ => "ProductCard"
            };

            return View(view, product);
        }
    }
}