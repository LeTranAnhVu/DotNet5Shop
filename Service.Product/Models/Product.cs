using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;

namespace Service.Product.Models
{
    public class Product : BaseModel
    {
        [MaxLength(200)]
        public string Name { get; set; }

        [MaxLength(50)]
        public string Sku { get; set; }

        public string Description { get; set; }

        // public string BriefDescription { get; set; }

        // public string VerboseDescription { get; set; }

        public string ImageUrl { get; set; }

        [DefaultValue(0)]
        public double Price { get; set; }

        public double? OldPrice { get; set; }

        // public string DiscountText { get; set; }
        // public double DeliveryCost { get; set; }
        // public DateTime DeliveryPeriod { get; set; }
        // public Dictionary<string, string> ExtraInfo { get; set; }
        // public float Stars { get; set; }
        // public int ReviewCount { get; set; }
    }

}