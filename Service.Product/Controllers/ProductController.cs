using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Service.Product.Dtos;
using Service.Product.Models;
using ProductModel =  Service.Product.Models.Product;

namespace Service.Product.Controllers
{
    [ApiController]
    [Route("api/v1/products")]
    public class ProductsController : ControllerBase
    {
        protected readonly IMapper _mapper;
        private readonly ProductContext _context;
        public ProductsController(ProductContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> Create(ProductDto dto)
        {
            try
            {
                var newProduct = new ProductModel();
                _mapper.Map(dto, newProduct);
                _context.Products.Add(newProduct);
                await _context.SaveChangesAsync();
                return Ok(newProduct);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, ProductDto dto)
        {
            try
            {
                var product = await _context.Products.FindAsync(id);
                if (product == null)
                {
                    throw new BadHttpRequestException("Product is not existed");
                }

                _mapper.Map(dto, product);
                await _context.SaveChangesAsync();
                return Ok(product);
            }
            catch (BadHttpRequestException e)
            {
                Console.WriteLine(e);
                return BadRequest(new {Status = e.StatusCode, message = e.Message});
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var product = await _context.Products.FindAsync(id);
                if (product == null)
                {
                    throw new BadHttpRequestException("Product is not existed");
                }

                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (BadHttpRequestException e)
            {
                Console.WriteLine(e);
                return BadRequest(new {Status = e.StatusCode, message = e.Message});
            }
        }
    }
}