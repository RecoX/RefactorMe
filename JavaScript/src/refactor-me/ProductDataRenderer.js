function ProductDataRenderer() {}

ProductDataRenderer.prototype.render = function () {
  renderTable("nzdProducts", "NZD", ProductDataConsolidator.get());
  renderTable("usdProducts", "USD", ProductDataConsolidator.getInUSDollars());
  renderTable("euProducts", "Euro", ProductDataConsolidator.getInEuros());
};

function renderTable(containerId, currency, products) {
	const containerElement = document.createElement("div");
	containerElement.id = containerId;
  
	let tableHtml = `<table class="table table-striped">
		<thead>
		  <tr><td colspan="3">Products (${currency})</td></tr>
		  <tr>
			<td>Name</td>
			<td>Price</td>
			<td>Type</td>
		  </tr>
		</thead>
		<tbody>`;
  
	for (let i = 0; i < products.length; i++) {
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
