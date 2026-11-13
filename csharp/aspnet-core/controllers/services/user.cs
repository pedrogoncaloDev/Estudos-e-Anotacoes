using controllers.Interfaces;

namespace controllers.UserService;

public class UserService : IService
{
    public string GetById(int id) => $"Usuário {id}";

	public string GetAll() => "Todos os usuários";
}