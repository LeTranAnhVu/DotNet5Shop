using System;
using System.Collections.Generic;

namespace DataAccess.Models
{
    public class Product : BaseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string BriefDescription { get; set; }
        public string VerboseDescription { get; set; }
        public string Sku { get; set; }
        public string ImageUrl { get; set; }
        public double Price { get; set; }
        public double OldPrice { get; set; }
        public string DiscountText { get; set; }
        public double DeliveryCost { get; set; }
        public DateTime DeliveryPeriod { get; set; }
        public Dictionary<string, string> ExtraInfo { get; set; }
        public float Stars { get; set; }
        public int ReviewCount { get; set; }
    }
}