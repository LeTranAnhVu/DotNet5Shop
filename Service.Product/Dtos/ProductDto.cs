using System;
using System.Linq.Expressions;
namespace Service.Product.Dtos
{
    public class ProductDto : Models.Product
    {
        // public static Expression<Func<Models.Product, ProductDto>> AsDto = product => new ProductDto
        // {
        //     Id = track.Id,
        //     Name = track.Name,
        // };
    }
}