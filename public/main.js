const quantityInput = document.querySelector('.quantity');
const currencyInput = document.querySelector('#first-currency');
const submitButton = document.querySelector('#submit-button');
const cashCurrency = document.querySelector('#second-currency');

console.log('submit button ', submitButton);

submitButton.addEventListener("click", event => {
    let queryObj = {};
    event.preventDefault();
    console.log('submit button', submitButton);
    const quantity = quantityInput.value;
    console.log('quantity ', quantity);
    const cryptoCurrency = currencyInput.value;
    console.log('cryptocurrency ', cryptoCurrency);
    queryObj.quantity = quantity;
    queryObj.currency= cryptoCurrency;
    console.log('quer object', queryObj);
})

