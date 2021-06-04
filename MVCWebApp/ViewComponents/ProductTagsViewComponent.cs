using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MVCWebApp.ViewComponents
{
    public class ProductTagsViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var tags = await _getTags();

            return View(tags);
        }

        private Task<List<string>> _getTags()
        {
            var tags = new List<string>
            {
                "Beans", "Carrots", "Apple", "Garlic", "Fresh Food", "Lemons", "Cherries", "Meat", "Oranges", "Bananas"
            };

            return Task.FromResult(tags);
        }
    }
}