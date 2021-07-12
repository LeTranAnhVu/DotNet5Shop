using AutoMapper;
using Service.Product.Dtos;

namespace Service.Product
{
    public class AutoMapConfig : Profile
    {
        public AutoMapConfig()
        {
            CreateMap<ProductDto, Models.Product>().ForMember(p => p.Id, opt => opt.Ignore());
        }
    }
}