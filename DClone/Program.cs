WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

WebApplication app = builder.Build();

app.MapGet("/", () => "<h1>RubielGOD</h1><hr>" );

app.Run();