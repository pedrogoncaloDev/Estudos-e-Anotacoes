import os

def limpar_console():
    os.system('cls' if os.name == 'nt' else 'clear')

def calcular_salario():
    limpar_console()
    
    # Solicita o valor do salário
    try:
        salario = float(input("Digite o valor do salário: "))
    except ValueError:
        print("Por favor, insira um valor numérico válido.")
        input("Pressione Enter para tentar novamente...")
        return
    
    salario_com_desconto = salario * 0.9
    
    valor_20 = salario_com_desconto * 0.2
    valor_30 = salario_com_desconto * 0.3
    valor_50 = salario_com_desconto * 0.5
    
    print("\nResultados:")
    print(f"Dízimo (PIC PAY): R$ {salario * 0.1:.2f}")
    print(f"\nSalário com 10% subtraído: R$ {salario_com_desconto:.2f}")
    print(f"20% do salário com desconto (NEON): R$ {valor_20:.2f}")
    print(f"30% do salário com desconto (MERCADO PAGO): R$ {valor_30:.2f}")
    print(f"50% do salário com desconto (ITAÚ): R$ {valor_50:.2f}")

while True:
    calcular_salario()
    repetir = input("\nDeseja calcular novamente? (s/n): ").strip().lower()

    if repetir != 's':
        print("Programa encerrado!")
        break
