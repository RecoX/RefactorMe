using RefactorMe;
using System;

class Program
{
    static void Main(string[] args)
    {
        var products = ProductDataConsolidator.Get();
        var productsEuro = ProductDataConsolidator.GetInEuros();
        var productsUsd = ProductDataConsolidator.GetInUSDollars();

        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine("Products in NZD:");
        foreach (var product in products)
        {
            Console.WriteLine($"Name: {product.Name}, Price: {product.Price}, Type: {product.Type}");
        }

        Console.ForegroundColor = ConsoleColor.Blue;
        Console.WriteLine("\nProducts in Euros:");
        foreach (var product in productsEuro)
        {
            Console.WriteLine($"Name: {product.Name}, Price: {product.Price}, Type: {product.Type}");
        }

        Console.ForegroundColor = ConsoleColor.DarkYellow;
        Console.WriteLine("\nProducts in USD:");
        foreach (var product in productsUsd)
        {
            Console.WriteLine($"Name: {product.Name}, Price: {product.Price}, Type: {product.Type}");
        }

        Console.ResetColor();
    }
}
