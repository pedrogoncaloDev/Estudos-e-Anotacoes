using controllers.Controllers;
using controllers.Interfaces;
using controllers.UserService;
using controllers.CompanyService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();                      // .NET 9+
builder.Services.AddScoped<IService, UserService>();
builder.Services.AddScoped<IService, CompanyService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();   // descobre e mapeia todos os controllers

app.Run();