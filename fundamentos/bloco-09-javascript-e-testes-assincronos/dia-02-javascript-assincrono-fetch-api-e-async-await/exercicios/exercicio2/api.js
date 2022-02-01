const API_URL = 'https://api.coincap.io/v2/assets';

const showError = (error) => {
  const pricesList = document.getElementById('prices-list');
  pricesList.textContent = `Error: ${error}`;
}

const showPrices = (prices) => {
  const pricesList = document.getElementById('prices-list');
  const rowHead = document.createElement('tr');
  rowHead.innerHTML = `<th>Cryptocurrency</th><th>Price</th>`;
  pricesList.appendChild(rowHead);
  prices
    .filter((price, index) => (index < 10))
    .forEach(({ id, symbol, priceUsd }) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${id} (${symbol})</td><td>${Number(priceUsd).toFixed(2)}</td>`;
      pricesList.appendChild(row);
    });
}

const fetchPrices = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ data }) => showPrices(data))
    .catch((error) => showError(error.message));
};

window.onload = fetchPrices;
