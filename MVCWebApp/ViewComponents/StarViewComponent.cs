using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MVCWebApp.ViewComponents
{
    public class StarViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(float stars)
        {
            return View(stars);
        }
    }
}