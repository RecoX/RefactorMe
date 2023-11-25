using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace RefactorMe.Tests
{
    [TestClass]
    public class ProductDataConsolidatorTests
    {
        [TestMethod]
        public void GetInUSD_ShouldReturnProductsInUSD()
        {
            var result = ProductDataConsolidator.GetInUSDollars();

            Assert.IsNotNull(result);
            Assert.AreEqual(8, result.Count);

            Assert.AreEqual(775.2, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
            Assert.AreNotEqual(114.0, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
            Assert.AreNotEqual(11.4, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
        }

        [TestMethod]
        public void GetInNZD_ShouldReturnProductsInNZD()
        {
            var result = ProductDataConsolidator.Get();

            Assert.IsNotNull(result);
            Assert.AreEqual(8, result.Count);

            Assert.AreEqual(1020, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
            Assert.AreNotEqual(114.0, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
            Assert.AreNotEqual(11.4, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
        }

        [TestMethod]
        public void GetInEuro_ShouldReturnProductsInEuro()
        {
            var result = ProductDataConsolidator.GetInEuros();

            Assert.IsNotNull(result);
            Assert.AreEqual(8, result.Count);

            Assert.AreEqual(683.4, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
            Assert.AreNotEqual(114.0, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
            Assert.AreNotEqual(11.4, result.First(p => p.Name == "Volkswagen LawnMaster 39000B Lawnmower").Price);
        }
    }
}
