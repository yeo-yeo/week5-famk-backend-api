//UI Variables
const quantityInput = document.querySelector(".quantity");
const currencyInput = document.querySelector("#first-currency");
const normalCurrencyInput = document.querySelector("#second-currency");
const submitButton = document.querySelector("#submit-button");
const resultContainer = document.querySelector("#result");
let quantity;
let cryptoCurrency;
let normalCurrency;

submitButton.addEventListener("click", event => {
  quantity = quantityInput.value;
  cryptoCurrency = currencyInput.value;
  normalCurrency = normalCurrencyInput.value;
  event.preventDefault();
  console.log("button event list");
  backEndCall(cryptoCurrency, normalCurrency);
});

// let APIResponse;

const backEndCall = (cryptoC, normalC) => {
  const xml = new XMLHttpRequest();
  const url = `/search?ids=${cryptoC}&vs_currencies=${normalC}`;
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      APIResponse = JSON.parse(xml.responseText);
      console.log("this is api response", APIResponse);
      renderCurrencies();
    }
  };
  xml.open("GET", url, true);
  xml.send();
};

const clearElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const renderCurrencies = () => {
  clearElement(resultContainer);
  let displayValue = document.createElement("p");
  let totalValue = (
    APIResponse[cryptoCurrency.toLowerCase()][normalCurrency.toLowerCase()] *
    quantity
  )
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const currSymbol = chooseCurrencySymbol(normalCurrency);
  displayValue.textContent = `${currSymbol} ${totalValue}`;
  displayValue.classList.add("display_value");
  resultContainer.appendChild(displayValue);
  let ccTimeStamp = createTimeStamp(
    APIResponse[cryptoCurrency.toLowerCase()].last_updated_at
  );
  let stringDate = ccTimeStamp.toString();
  let uiTimeStamp = document.createElement("p");
  uiTimeStamp.textContent = `Last updated: ${stringDate.slice(0, 34)}`;
  uiTimeStamp.classList.add("time_stamp");
  resultContainer.appendChild(uiTimeStamp);
};

const createTimeStamp = secs => {
  var t = new Date(1970, 0, 1);
  t.setSeconds(secs);
  return t;
};

const chooseCurrencySymbol = curr => {
  const lookup = {
    USD: "$",
    GBP: "£",
    EUR: "€",
    JPY: "¥",
    CNY: "¥"
  };
  return lookup[curr];
};
