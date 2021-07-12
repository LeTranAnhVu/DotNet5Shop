using Microsoft.EntityFrameworkCore.Migrations;

namespace Service.Product.Migrations
{
    public partial class SetSkuPropertyIsUniqueInProductTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Products_Sku",
                table: "Products",
                column: "Sku",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Products_Sku",
                table: "Products");
        }
    }
}
