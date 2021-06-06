using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;

namespace MVCWebApp.ViewComponents
{
    public class CustomerReviewModel
    {
        public Dictionary<int, double> StarStatistic { get; set; }
        public List<CustomerReview> Reviews { get; set; }
        public float AvgStar { get; set; }
    }

    public class CustomerReviewViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(int productId)
        {
            var reviews = await _getReviews(productId);

            return View("~/Views/Product/Components/CustomerReview.cshtml", reviews);
        }

        private Task<CustomerReviewModel> _getReviews(int productId)
        {
            var users = new List<User>();

            for (int i = 0; i < 10; i++)
            {
                users.Add(new User()
                {
                    Id = i + 1,
                    Name = "Brian_@" + i,
                    Avatar = "~/images/customer-portrait.jpg",
                });
            }

            var reviews = new List<CustomerReview>();


            for (int i = 0; i < 10; i++)
            {
                reviews.Add(new CustomerReview()
                {
                    Id = i + 1,
                    Title = i % 2 == 0 ? "Good Book" : "Paper is of thin, and of poor quality",
                    Content = i % 2 == 0
                        ? "Superb. I had the 2nd edition and this condenses those chapters as well as adding a whole load more. The olkder versions are available to download from the publisher for free (but I have yet to try this). This is not really a book for beginners, but develoeprs like me who have slightly out-of-date skills who need to quickly get upo to speed."
                        : "Good book for C#.. love to read it.. and go back to my code...",
                    CreatedAt = DateTime.Now.AddDays(-4),
                    UpdatedAt = i % 2 == 0 ? null : DateTime.Now,
                    ProductId = i + 1,
                    UserId = i + 1,
                    Stars = (i + 1) / 2f,
                    User = users.FirstOrDefault(user => user.Id == i + 1)
                });
            }

            var reviewCounts = reviews.Count();
            var avgStar = reviews.Sum(re => re.Stars) / reviewCounts;
            var aggregateStar = new Dictionary<int, double>()
            {
                {5, (double) reviews.Where(re => re.Stars >= 4.5).Count() / reviewCounts},
                {4, (double) reviews.Where(re => re.Stars > 3.5 && re.Stars < 4.5).Count() / reviewCounts},
                {3, (double) reviews.Where(re => re.Stars > 2.5 && re.Stars < 3.5).Count() / reviewCounts},
                {2, (double) reviews.Where(re => re.Stars > 1.5 && re.Stars < 2.5).Count() / reviewCounts},
                {1, (double) reviews.Where(re => re.Stars > 0.5 && re.Stars < 1.5).Count() / reviewCounts},
            };

            var result = new CustomerReviewModel()
            {
                Reviews = reviews.OrderBy(re => 0 - re.Stars).ToList(),
                StarStatistic = aggregateStar,
                AvgStar = avgStar,
            };

            return Task.FromResult(result);
        }
    }
}