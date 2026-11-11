using controllers.Interfaces;

namespace controllers.Services;

public class UserService : IUserService
{
    public string GetById(int id) => $"Usuário {id}";

	public string GetAll() => "Todos os usuários";
}