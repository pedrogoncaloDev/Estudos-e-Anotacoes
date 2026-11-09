# ASP.NET Core

Minimal API **é** ASP.NET Core. Não são tecnologias concorrentes: Minimal API é um estilo de escrever APIs dentro do ASP.NET Core. A comparação que faz sentido é **Minimal API vs. Controllers**, os dois estilos de API do ASP.NET Core.

Nesta pasta ficam as APIs de cada estilo:

| Pasta | Estilo | SDK |
|---|---|---|
| [minimal_api](minimal_api/) | Minimal API | .NET 10 (`net10.0`) |
| [controllers](controllers/) | Controllers | a definir |

Para rodar: `dotnet run` dentro da pasta do projeto. O Swagger abre em modo Development.

## Minimal API

As rotas são declaradas direto no `Program.cs`, com `app.MapGet(...)`, `app.MapPost(...)` e assim por diante, usando lambdas ou métodos. Tem pouca cerimônia e pouco código.

```csharp
app.MapGet("user/{id}", (int id) => $"Usuário {id}");
```

## Controllers

Classes que herdam de `ControllerBase`, com atributos de rota e de verbo HTTP. É mais estruturado e mais verboso.

```csharp
[ApiController]
public class UserController : ControllerBase
{
    [HttpGet("user/{id}")]
    public IActionResult GetById(int id) => Ok($"Usuário {id}");
}
```

## Comparação

| | Minimal API | Controllers |
|---|---|---|
| Código | Enxuto, tudo em poucas linhas | Mais verboso, uma classe por recurso |
| Organização | Você mesmo organiza (grupos, arquivos separados) | Convenção pronta, uma classe por recurso |
| Recursos prontos | Validação, filtros e model binding existem, mas são mais manuais | Mais completos de fábrica (`[ApiController]`, filtros, validação automática) |
| Desempenho | Um pouco mais leve | Um pouco mais de overhead |
| Bom para | Microsserviços, APIs pequenas, aprendizado | APIs grandes, equipes, padrão consolidado |

## O que é comum aos dois

Os dois usam o mesmo pipeline do ASP.NET Core: middleware, injeção de dependência, configuração (`appsettings.json`), Kestrel, autenticação e Swagger.

Em APIs maiores, dá para manter a Minimal API organizada com `MapGroup("/user")` e movendo os endpoints para arquivos ou classes de extensão. Também dá para misturar os dois estilos no mesmo projeto.
