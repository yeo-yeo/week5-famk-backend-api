const quantityInput = document.querySelector('.quantity');
const currencyInput = document.querySelector('#first-currency');
const submitButton = document.querySelector('#submit-button');
const cashCurrency = document.querySelector('#second-currency');
const resultContainer = document.querySelector('#result');
let quantity;
let cryptoCurrency;

// let queryObj = {};

submitButton.addEventListener("click", event => {
    quantity = quantityInput.value;
    cryptoCurrency = currencyInput.value;
    event.preventDefault();
    console.log("button event list")
    // queryObj.quantity = quantity;
    // queryObj.currency= cryptoCurrency;
    backEndCall(cryptoCurrency);
    
})

let APIResponse;

const backEndCall = cryptoCurrency => {
    const xml = new XMLHttpRequest();
    const url = `/search?ids=${cryptoCurrency}&vs_currencies=usd`;

    xml.onreadystatechange = () => {
        if (xml.readyState === 4 && xml.status === 200) {
            APIResponse = JSON.parse(xml.responseText);
            console.log('this is api response', APIResponse)
            renderCurrencies();
        }
        
    }
    xml.open("GET", url, true);
    xml.send();
}

  const clearElement = el => {
      while (el.firstChild) {
          el.removeChild(el.firstChild);
      }
  }


  
const renderCurrencies = () => {

clearElement(resultContainer);
    let displayValue = document.createElement('p');
    let totalValue = APIResponse[cryptoCurrency.toLowerCase()].usd * quantity; 
    displayValue.textContent = `$ ${totalValue}`;
    resultContainer.appendChild(displayValue);
    //timeStamp = createTimeStamp(APIResponse[cryptoCurrency.toLowerCase()].last_updated_at);
    //console.log('This is timestamp ', timeStamp)
    //console.log('cryptocurrency ', cryptoCurrency);
    //console.log('apiresponse ', APIResponse);
    //console.log('APIResponse.cryptoCurrency ', APIResponse[cryptoCurrency.toLowerCase()].usd);
    //console.log('displayValue ', displayValue);
} 

const createTimeStamp = (secs) => {
var t = new Date(1970, 0, 1);
t.setSeconds(secs);
return t;
}


/*const renderTimeStamp = APIResponse => {
    let timeStamp = document.createElement('p');
    let timeStampValue = APIResponse.[cryptoCurrency.last_updated_at;
    //let time = new Date(timeStampValue);
    timeStamp.textContent = timeStampValue;
    resultContainer.appendChild(timeStamp);
}*/



/*const frontSendUrl = () => {
    //createUrl is a pure function that creates a url from the input values.
    let geckoUrl = createUrl(currencyOne, currencyTwo);
    let xhr = new XMLHttpRequest();
    // make a file path using the search prefix and gecko url
    let searchConcat = `/search?q=${geckoUrl}`;
    let updatedSearch = searchConcat.toLowerCase();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Response comes back so...
            // Parse response and name object
            convertedInfo = JSON.parse(xhr.responseText);
            // append currency and date information to DOM -- call functions here.
            timestamp(convertedinfo.date)
            // timestamp to convert long time number to a readable date and time
            writeResults(convertedInfo);
            // write results will need to get the correct data from the object and print to page
            // perhaps it is better to call timestamp somewhere in writeResults
            // also in writeResults a function to multiply values by the number given in the input field
        }
    };
    // Send the search term over to our server
    xhr.open("GET", updatedSearch, true);
    xhr.send();
}
};*/