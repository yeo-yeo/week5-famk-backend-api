// const quantityInput = document.getElementById('quantity');
// let cryptoCurrency = document.getElementById('first-currency');
// // const submitButton = document.getElementById('submit-button');
// let cashCurrency = document.getElementById('second-currency');


// let crypto = cryptoCurrency.value;
// let usd = cashCurrency.value;

// let url = '';

const URL1 = "https://api.coingecko.com/api/v3/simple/price?ids=";
const URL2 = "&vs_currencies=";

const createUrl = (firstCurrency, secondCurrency) => {
  return `${URL1}${firstCurrency}${URL2}${secondCurrency}` ;
};



// createUrl(crypto, usd);

module.exports = {createUrl};
  