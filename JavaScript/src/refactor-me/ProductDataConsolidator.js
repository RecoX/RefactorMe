function ProductDataConsolidator() {}

const CURRENCIES_AVAILABLE = {
  NZD: {
    value: 1,
  },
  EURO: {
    value: 0.67,
  },
  USD: {
    value: 0.76,
  },
};

const LAWN_MOWER_REPOSITORY = new LawnmowerRepository();
const PHONE_CASE_REPOSITORY = new PhoneCaseRepository();
const TSHIRT_REPOSITORY = new TShirtRepository();

function extractProductData(repository, currencyFactor) {
  const products = [];

  const items = repository.getAll();
  for (let i = 0; i < items.length; i++) {
    products.push({
      id: items[i].id,
      name: items[i].name,
      price: (items[i].price * currencyFactor).toFixed(2),
      type: repository.type,
    });
  }

  return products;
}

function getProductDataForCurrency(currency) {
  const products = [];

  products.push(...extractProductData(LAWN_MOWER_REPOSITORY, currency.value));
  products.push(...extractProductData(PHONE_CASE_REPOSITORY, currency.value));
  products.push(...extractProductData(TSHIRT_REPOSITORY, currency.value));

  return products;
}

ProductDataConsolidator.get = function () {
  return getProductDataForCurrency(CURRENCIES_AVAILABLE.NZD);
};

ProductDataConsolidator.getInUSDollars = function () {
  return getProductDataForCurrency(CURRENCIES_AVAILABLE.USD);
};

ProductDataConsolidator.getInEuros = function () {
  return getProductDataForCurrency(CURRENCIES_AVAILABLE.EURO);
};
