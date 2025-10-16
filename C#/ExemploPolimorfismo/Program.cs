using System;

namespace ExemploPolimorfismo
{
    // Classe base
    public class Animal
    {
        public virtual void Falar()
        {
            Console.WriteLine("O animal faz um som...");
        }
    }

    // Classe filha: Gato
    public class Gato : Animal
    {
        public override void Falar()
        {
            Console.WriteLine("O gato mia: Miau!");
        }
    }

    // Classe filha: Vaca
    public class Vaca : Animal
    {
        public override void Falar()
        {
            Console.WriteLine("A vaca muge: Muuu!");
        }
    }

    class Program
    {
        static void Main()
        {
            Animal[] animais = new Animal[]
            {
                new Cachorro(),
                new Gato(),
                new Vaca()
            };

            foreach (var animal in animais)
            {
                animal.Falar();
            }

            Console.ReadKey();
        }
    }
}
