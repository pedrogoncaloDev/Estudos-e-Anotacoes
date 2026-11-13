using controllers.Interfaces;

namespace controllers.CompanyService;

public class CompanyService : IService
{
    public string GetById(int id) => $"Empresa {id}";

	public string GetAll() => "Todas as empresas";
}