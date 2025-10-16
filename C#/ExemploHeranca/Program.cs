using System;

namespace ExemploHeranca
{
    // Classe base (Pai)
    public class Animal
    {
        public string Nome { get; set; }

        public void Comer()
        {
            Console.WriteLine($"{Nome} está comendo.");
        }
    }

    // Classe derivada (Filha)
    public class Cachorro : Animal
    {
        public void Latir()
        {
            Console.WriteLine($"{Nome} está latindo: Au Au!");
        }
    }

    class Program
    {
        static void Main()
        {
            // Criando um objeto da classe filha
            Cachorro dog = new Cachorro();
            dog.Nome = "Rex";

            // Métodos herdados da classe pai
            dog.Comer();

            // Método próprio da classe filha
            dog.Latir();

            Console.ReadKey();
        }
    }
}
