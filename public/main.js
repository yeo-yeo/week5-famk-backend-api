const quantityInput = document.querySelector('.quantity');
const 
 = document.getElementById('first-currency');
const submitButton = document.getElementById('submit-button');
const cashCurrency = document.getElementById('second-currency');

let queryObj = {};

submitButton.addEventListsener('click', e => {
    
    e.preventDefault()
    const quantity = quantityInput.value;
    const cryptoCurrency = currencyInput.value;
    queryObj.quantity = quantity;
    queryObj.cryptoCurrency = cryptoCurrency;
    console.log(queryObj);

})