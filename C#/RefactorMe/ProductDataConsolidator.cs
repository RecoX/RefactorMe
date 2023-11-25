﻿using RefactorMe.DontRefactor.Data.Implementation;
using RefactorMe.DontRefactor.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RefactorMe
{
    public class ProductDataConsolidator
    {
        private const double NZDExchangeRate = 1.0;
        private const double EUROExchangeRate = 0.67;
        private const double USDExchangeRate = 0.76;

        private static readonly LawnmowerRepository LawnmowerRepository = new LawnmowerRepository();
        private static readonly PhoneCaseRepository PhoneCaseRepository = new PhoneCaseRepository();
        private static readonly TShirtRepository TShirtRepository = new TShirtRepository();

        public static List<Product> Get()
        {
            var lawnmowers = LawnmowerRepository.GetAll();
            var phoneCases = PhoneCaseRepository.GetAll();
            var tShirts = TShirtRepository.GetAll();

            var products = new List<Product>();

            products.AddRange(GenerateLawnowersProducts(lawnmowers, NZDExchangeRate, "Lawnmower"));
            products.AddRange(GeneratePhoneCasesProducts(phoneCases, NZDExchangeRate, "Phone Case"));
            products.AddRange(GenerateTShirtsProducts(tShirts, NZDExchangeRate, "T-Shirt"));

            return products;
        }

        public static List<Product> GetInUSDollars()
        {
            var lawnmowers = LawnmowerRepository.GetAll();
            var phoneCases = PhoneCaseRepository.GetAll();
            var tShirts = TShirtRepository.GetAll();

            var products = new List<Product>();

            products.AddRange(GenerateLawnowersProducts(lawnmowers, USDExchangeRate, "Lawnmower"));
            products.AddRange(GeneratePhoneCasesProducts(phoneCases, USDExchangeRate, "Phone Case"));
            products.AddRange(GenerateTShirtsProducts(tShirts, USDExchangeRate, "T-Shirt"));

            return products;
        }

        public static List<Product> GetInEuros()
        {
            var lawnmowers = LawnmowerRepository.GetAll();
            var phoneCases = PhoneCaseRepository.GetAll();
            var tShirts = TShirtRepository.GetAll();

            var products = new List<Product>();

            products.AddRange(GenerateLawnowersProducts(lawnmowers, EUROExchangeRate, "Lawnmower"));
            products.AddRange(GeneratePhoneCasesProducts(phoneCases, EUROExchangeRate, "Phone Case"));
            products.AddRange(GenerateTShirtsProducts(tShirts, EUROExchangeRate, "T-Shirt"));

            return products;
        }

        private static List<Product> GenerateLawnowersProducts(IEnumerable<Lawnmower> lawnmowers, double priceFactor, string type)
        {
            return lawnmowers
                .Select(item => new Product
                {
                    Id = item.Id,
                    Name = item.Name,
                    Price = Math.Round(item.Price * priceFactor, 2),
                    Type = type
                })
                .ToList();
        }

        private static List<Product> GeneratePhoneCasesProducts(IEnumerable<PhoneCase> phoneCases, double priceFactor, string type)
        {
            return phoneCases
                .Select(item => new Product
                {
                    Id = item.Id,
                    Name = item.Name,
                    Price = Math.Round(item.Price * priceFactor, 2),
                    Type = type
                })
                .ToList();
        }

        private static List<Product> GenerateTShirtsProducts(IEnumerable<TShirt> tShirts, double priceFactor, string type)
        {
            return tShirts
                .Select(item => new Product
                {
                    Id = item.Id,
                    Name = item.Name,
                    Price = Math.Round(item.Price * priceFactor, 2),
                    Type = type
                })
                .ToList();
        }
    }
}
