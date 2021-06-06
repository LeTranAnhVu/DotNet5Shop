namespace DataAccess.Models
{
    public class CustomerReview : BaseModel
    {
        public string Title { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public string Content { get; set; }
        public float Stars { get; set; }
    }
}