using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace MVCWebApp.Services.Views
{
    public class Breadcrumb
    {
        public IEnumerable<string> GetBreadcrumbs(ViewContext context)
        {
            var list = new List<string>();
                string controller = $"{context.RouteData.Values["controller"]}";
                list.Add(controller);
            return list;
        }
    }
}