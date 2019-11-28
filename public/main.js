const quantityInput = document.querySelector('.quantity');
const currencyInput = document.querySelector('#first-currency');
const submitButton = document.querySelector('#submit-button');
const cashCurrency = document.querySelector('#second-currency');
const resultContainer = document.querySelector('#result');

let queryObj = {};

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const quantity = quantityInput.value;
    const cryptoCurrency = currencyInput.value;
    queryObj.quantity = quantity;
    queryObj.currency= cryptoCurrency;
    backEndCall(cryptoCurrency);
    
})

const backEndCall = cryptoCurrency => {
    const xml = new XMLHttpRequest();
    const url = `/search?ids=${cryptoCurrency}&vs_currencies=usd`;

    xml.onreadystatechange = () => {
        if (xml.readystate === 4 && xml.status === 200) {
            const APIResponse = JSON.parse(xml.responseText);
            renderCurrencies(APIResponse);
        }
        
    }
    xml.open("GET", url, true);
    xml.send();
}

/*let APIResponse = {
    "bitcoin": {
      "usd": 7469.8,
      "last_updated_at": 1574940331
    }
  };*/

const renderCurrencies = APIResponse => {
    let displayValue = document.createElement('p');
    displayValue.textContent = APIResponse.cryptoCurrency;
    resultContainer.appendChild(displayValue);
    renderTimeStamp(APIResponse);
    console.log('APIResponse.cryptoCurrency ', APIResponse.cryptoCurrency.usd);
    console.log('displayValue ', displayValue);
} 

const renderTimeStamp = APIResponse => {
    let timeStamp = document.createElement('p');
    let timeStampValue = APIResponse.cryptoCurrency.last_updated_at;
    //let time = new Date(timeStampValue);
    timeStamp.textContent = timeStampValue;
    resultContainer.appendChild(timeStamp);
}



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