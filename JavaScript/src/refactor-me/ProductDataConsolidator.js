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

const LAWN_MOWER = {
	repository: new LawnmowerRepository(),
	type: "Lawnmower"
}

const PHONE_CASE = {
	repository: new PhoneCaseRepository(),
	type: "Phone Case"
}

const TSHIRT = {
	repository: new TShirtRepository(),
	type: "T-Shirt"
}

function extractProductData(repository, type, currencyFactor) {
  const products = [];

  const items = repository.getAll();
  for (let i = 0; i < items.length; i++) {
    products.push({
      id: items[i].id,
      name: items[i].name,
      price: (items[i].price * currencyFactor).toFixed(2),
      type,
    });
  }

  return products;
}

function getProductDataForCurrency(currency) {
  const products = [];

  products.push(...extractProductData(LAWN_MOWER.repository, LAWN_MOWER.type, currency.value));
  products.push(...extractProductData(PHONE_CASE.repository, PHONE_CASE.type, currency.value));
  products.push(...extractProductData(TSHIRT.repository, TSHIRT.type, currency.value));

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
