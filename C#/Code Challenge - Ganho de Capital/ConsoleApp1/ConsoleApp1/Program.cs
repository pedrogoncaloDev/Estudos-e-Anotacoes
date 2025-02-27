using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

class Operation
{
    [JsonPropertyName("operation")] //buy | sell
    public string OperationType { get; set; }

    [JsonPropertyName("unit-cost")] //preço por unidade
    public decimal UnitCost { get; set; }

    [JsonPropertyName("quantity")] //quantidade de ação
    public int Quantity { get; set; }
}

class CapitalGainsCalculator
{
    private decimal averagePrice = 0m;    // Preço médio das ações compradas
    private int totalQuantity = 0;        // Quantidade total de ações
    private decimal accumulatedLoss = 0m; // Prejuízo acumulado

    public List<decimal> ProcessOperations(List<Operation> operations)
    {
        List<decimal> taxes = new List<decimal>();

        foreach (var op in operations)
        {
            if (op.OperationType == "buy")
            {
                Buy(op.Quantity, op.UnitCost);
                taxes.Add(0m);
            }
            else if (op.OperationType == "sell")
            {
                decimal tax = Sell(op.Quantity, op.UnitCost);
                taxes.Add(tax);
            }
        }

        return taxes;
    }

    private void Buy(int quantity, decimal price)
    {
        if (totalQuantity <= 0)
        {
            averagePrice = price;
        }
        else
        {
            averagePrice = ((totalQuantity * averagePrice) + (quantity * price)) / (totalQuantity + quantity);

        }
        totalQuantity += quantity;
    }

    private decimal Sell(int quantity, decimal price)
    {
        decimal totalSaleValue = quantity * price;
        decimal totalCost = quantity * averagePrice;
        decimal profit = totalSaleValue - totalCost;

        totalQuantity -= quantity; // Atualiza a quantidade de ações após a venda

        // Se vendeu menos de R$ 20.000, não paga imposto, mas deve acumular prejuízo corretamente
        if (totalSaleValue <= 20000)
        {
            if (profit < 0)
            {
                accumulatedLoss += Math.Abs(profit);
            }
            else if (accumulatedLoss > 0)
            {
                accumulatedLoss -= Math.Min(accumulatedLoss, profit);
            }

            return 0m;
        }

        // Se há prejuízo acumulado, abatemos do lucro primeiro
        if (accumulatedLoss > 0)
        {
            if (profit > 0)
            {
                if (profit <= accumulatedLoss)
                {
                    accumulatedLoss -= profit; // Usa todo o lucro para reduzir o prejuízo
                    return 0m;
                }
                else
                {
                    profit -= accumulatedLoss; // Usa todo o prejuízo para reduzir o lucro
                    accumulatedLoss = 0m;
                }
            }
            else
            {
                accumulatedLoss += Math.Abs(profit); // Acumula prejuízo
                return 0m;
            }
        }

        // Se ainda restar lucro após abater o prejuízo, aplica-se a taxa de 20%
        return Math.Round(profit * 0.20m, 2);
    }
}
class Program
{
    static void Main()
    {
        string line;
        while (!string.IsNullOrWhiteSpace(line = Console.ReadLine()))
        {
            List<Operation> operations = JsonSerializer.Deserialize<List<Operation>>(line);
            CapitalGainsCalculator calculator = new CapitalGainsCalculator();
            List<decimal> taxes = calculator.ProcessOperations(operations);

            List<string> result = new List<string>();
            foreach (var tax in taxes)
            {
                result.Add($"{{\"tax\": {tax:F2}}}");
            }

            Console.WriteLine($"[{string.Join(",", result)}]");
        }
    }
}