using System.ComponentModel.DataAnnotations;

namespace MVCWebApp.Dtos
{
    public class ConfirmationDto
    {
        public bool Newsletter { get; set; }
        [Required]
        [Range(typeof(bool), "true", "true")]
        public bool Policy { get; set; }
    }
    public class BillInfoDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
    }
    public class CheckoutFormDto
    {
        [Required]
        public BillInfoDto BillInfo { get; set; }
        public string CouponCode { get; set; }
        public string AdditionalInfo { get; set; }
        [Required]
        public ConfirmationDto Confirmation { get; set; }
    }
}