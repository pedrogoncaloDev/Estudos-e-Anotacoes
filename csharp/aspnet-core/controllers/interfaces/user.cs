namespace controllers.Interfaces;

public interface IUserService
{
    string GetAll();
	
	string GetById(int id);
}