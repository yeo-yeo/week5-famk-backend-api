

const URL1 = "https://api.coingecko.com/api/v3/simple/price?ids=";
const URL2 = "&vs_currencies=";

const createUrl = (firstCurrency, secondCurrency) => {
  return `${URL1}${firstCurrency}${URL2}${secondCurrency}` ;
};



// createUrl(crypto, usd);

module.exports = { createUrl };
  