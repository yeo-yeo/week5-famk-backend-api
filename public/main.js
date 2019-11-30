//DOM Variables
const quantityInput = document.querySelector(".quantity");
const cryptoCurrencyInput = document.querySelector("#first-currency");
const targetCurrencyInput = document.querySelector("#second-currency");
const submitButton = document.querySelector("#submit-button");
const resultContainer = document.querySelector("#result");

//values
let apiResponse;

submitButton.addEventListener("click", event => {
  event.preventDefault();
  let quantity = quantityInput.value;
  //validation to check quantity is a number (nb is read as a string then converted)
  if (Number(quantity)) {
    let cryptoCurrency = cryptoCurrencyInput.value;
    let targetCurrency = targetCurrencyInput.value;
    backEndCall(cryptoCurrency, targetCurrency, quantity);
  } else {
    alert("Please enter a valid quantity number");
  }
});

const backEndCall = (cryptoC, targetC, quantity) => {
  const xml = new XMLHttpRequest();
  const url = `/search?ids=${cryptoC}&vs_currencies=${targetC}`;
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      apiResponse = JSON.parse(xml.responseText);
      renderCurrencies(cryptoC, targetC, quantity);
    }
  };
  xml.open("GET", url, true);
  xml.send();
};

const renderCurrencies = (cryptoC, targetC, quantity) => {
  //clear any existing result
  clearElement(resultContainer);

  //multiply currency value by user inputted quantity and format
  let totalValue = (
    apiResponse[cryptoC.toLowerCase()][targetC.toLowerCase()] * quantity
  )
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const currSymbol = chooseCurrencySymbol(targetC);

  //add dom element
  let displayValue = document.createElement("p");
  displayValue.classList.add("display_value");
  displayValue.textContent = `${currSymbol} ${totalValue}`;
  resultContainer.appendChild(displayValue);

  //add last updated at timestamp dom element
  let timeStamp = createTimeStamp(
    apiResponse[cryptoC.toLowerCase()].last_updated_at
  ).toString();
  let uiTimeStamp = document.createElement("p");
  uiTimeStamp.textContent = `Last updated: ${timeStamp.slice(0, 34)}`;
  uiTimeStamp.classList.add("time_stamp");
  resultContainer.appendChild(uiTimeStamp);
};

//to clear an existing result when the search is rerun
const clearElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

//to format the time from seconds into a date
const createTimeStamp = secs => {
  var t = new Date(1970, 0, 1);
  t.setSeconds(secs);
  return t;
};

//for displaying the result
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
