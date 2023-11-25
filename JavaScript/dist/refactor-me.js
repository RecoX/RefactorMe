function $774c24875213246f$var$LawnmowerRepository() {}
$774c24875213246f$var$LawnmowerRepository.prototype.getAll = function() {
    return [
        {
            id: 1,
            name: "Hewlett-Packard Rideable Lawnmower",
            fuelEfficiency: "Very Low",
            isVehicle: true,
            price: 3000
        },
        {
            id: 2,
            name: "Fisher Price's My First Lawnmower",
            fuelEfficiency: "Ultimate",
            isVehicle: false,
            price: 45
        },
        {
            id: 3,
            name: "Volkswagen LawnMaster 39000B Lawnmower",
            fuelEfficiency: "Moderate",
            isVehicle: false,
            price: 1020
        }
    ];
};
var $774c24875213246f$export$2e2bcd8739ae039 = $774c24875213246f$var$LawnmowerRepository;


function $826c22ed8c287998$var$PhoneCaseRepository() {}
$826c22ed8c287998$var$PhoneCaseRepository.prototype.getAll = function() {
    return [
        {
            id: 1,
            name: "Amazon Fire Burgundy Phone Case",
            colour: "Burgundy",
            material: "PVC",
            targetPhone: "Amazon Fire",
            price: 14.0
        },
        {
            id: 2,
            name: "Nokia Lumia 920/930/Icon Crimson Phone Case",
            colour: "Red",
            material: "Rubber",
            targetPhone: "Nokia Lumia 920/930/Icon",
            price: 10.0
        }
    ];
};
var $826c22ed8c287998$export$2e2bcd8739ae039 = $826c22ed8c287998$var$PhoneCaseRepository;


function $f271b1c64c92cff1$var$TShirtRepository() {}
$f271b1c64c92cff1$var$TShirtRepository.prototype.getAll = function() {
    return [
        {
            id: 1,
            colour: "Blue",
            name: "Xamarin C# T-Shirt",
            price: 15.0,
            shirtText: "C#, Xamarin"
        },
        {
            id: 2,
            colour: "Black",
            name: "New York Yankees T-Shirt",
            price: 8.0,
            shirtText: "NY"
        },
        {
            id: 3,
            colour: "Green",
            name: "Disney Sleeping Beauty T-Shirt",
            price: 10.0,
            shirtText: "Mirror mirror on the wall..."
        }
    ];
};
var $f271b1c64c92cff1$export$2e2bcd8739ae039 = $f271b1c64c92cff1$var$TShirtRepository;


function $a06aed13d48883c1$var$ProductDataConsolidator() {}
const $a06aed13d48883c1$var$CURRENCIES_AVAILABLE = {
    NZD: {
        value: 1
    },
    EURO: {
        value: 0.67
    },
    USD: {
        value: 0.76
    }
};
const $a06aed13d48883c1$var$LAWN_MOWER = {
    repository: new (0, $774c24875213246f$export$2e2bcd8739ae039)(),
    type: "Lawnmower"
};
const $a06aed13d48883c1$var$PHONE_CASE = {
    repository: new (0, $826c22ed8c287998$export$2e2bcd8739ae039)(),
    type: "Phone Case"
};
const $a06aed13d48883c1$var$TSHIRT = {
    repository: new (0, $f271b1c64c92cff1$export$2e2bcd8739ae039)(),
    type: "T-Shirt"
};
function $a06aed13d48883c1$var$extractProductData(repository, type, currencyFactor) {
    const products = [];
    const items = repository.getAll();
    for(let i = 0; i < items.length; i++)products.push({
        id: items[i].id,
        name: items[i].name,
        price: (items[i].price * currencyFactor).toFixed(2),
        type: type
    });
    return products;
}
function $a06aed13d48883c1$var$getProductDataForCurrency(currency) {
    const products = [];
    products.push(...$a06aed13d48883c1$var$extractProductData($a06aed13d48883c1$var$LAWN_MOWER.repository, $a06aed13d48883c1$var$LAWN_MOWER.type, currency.value));
    products.push(...$a06aed13d48883c1$var$extractProductData($a06aed13d48883c1$var$PHONE_CASE.repository, $a06aed13d48883c1$var$PHONE_CASE.type, currency.value));
    products.push(...$a06aed13d48883c1$var$extractProductData($a06aed13d48883c1$var$TSHIRT.repository, $a06aed13d48883c1$var$TSHIRT.type, currency.value));
    return products;
}
$a06aed13d48883c1$var$ProductDataConsolidator.get = function() {
    return $a06aed13d48883c1$var$getProductDataForCurrency($a06aed13d48883c1$var$CURRENCIES_AVAILABLE.NZD);
};
$a06aed13d48883c1$var$ProductDataConsolidator.getInUSDollars = function() {
    return $a06aed13d48883c1$var$getProductDataForCurrency($a06aed13d48883c1$var$CURRENCIES_AVAILABLE.USD);
};
$a06aed13d48883c1$var$ProductDataConsolidator.getInEuros = function() {
    return $a06aed13d48883c1$var$getProductDataForCurrency($a06aed13d48883c1$var$CURRENCIES_AVAILABLE.EURO);
};
var $a06aed13d48883c1$export$2e2bcd8739ae039 = $a06aed13d48883c1$var$ProductDataConsolidator;


function $da5b9cf55881c630$var$ProductDataRenderer() {}
$da5b9cf55881c630$var$ProductDataRenderer.prototype.render = function() {
    $da5b9cf55881c630$var$renderTable("nzdProducts", "NZD", (0, $a06aed13d48883c1$export$2e2bcd8739ae039).get());
    $da5b9cf55881c630$var$renderTable("usdProducts", "USD", (0, $a06aed13d48883c1$export$2e2bcd8739ae039).getInUSDollars());
    $da5b9cf55881c630$var$renderTable("euProducts", "Euro", (0, $a06aed13d48883c1$export$2e2bcd8739ae039).getInEuros());
};
function $da5b9cf55881c630$var$renderTable(containerId, currency, products) {
    const containerElement = document.createElement("div");
    containerElement.id = containerId;
    let tableHtml = `<table class="table table-striped">
		<thead style="background-color: yellow;">
		  <tr><td colspan="3">Products (${currency})</td></tr>
		  <tr>
			<td>Name</td>
			<td>Price</td>
			<td>Type</td>
		  </tr>
		</thead>
		<tbody>`;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        tableHtml += `<tr>
		  <td>${product.name}</td>
		  <td>${product.price}</td>
		  <td>${product.type}</td>
		</tr>`;
    }
    tableHtml += "</tbody></table>";
    const parentDiv = document.getElementById("currencyProducts");
    parentDiv.appendChild(containerElement);
    containerElement.innerHTML = tableHtml;
}
var $da5b9cf55881c630$export$2e2bcd8739ae039 = $da5b9cf55881c630$var$ProductDataRenderer;


window.ProductDataRenderer = (0, $da5b9cf55881c630$export$2e2bcd8739ae039);


//# sourceMappingURL=refactor-me.js.map
