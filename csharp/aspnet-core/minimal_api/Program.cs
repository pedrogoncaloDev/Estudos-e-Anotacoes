var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.MapGet("users/", () => {
	return "Todos os usuários";
});

app.MapGet("user/{id}", (int id) => {
	return $"Usuário específico - {id}";
});

app.MapPost("user/", () => {
	return "Usuário criado";
});

/* 
PUT é usado para substituir o recurso inteiro
EXEMPLO:
PUT /user/1
{ "nome": "Pedro", "email": "pedro@email.com", "idade": 25 }
*/
app.MapPut("user/{id}", (int id) => {
	return $"O usuário {id} foi totalmente atualizado";
});

/*
PATCH: altera só parte do recurso
EXEMPLO: 
PATCH /user/1
{ "email": "novo@email.com" }
*/
app.MapPatch("user/{id}", (int id) => {
	return $"Usuário {id} atualizado";
});

app.MapDelete("user/{id}", (int id) => {
	return $"Usuário {id} deletado";
});

app.Run();