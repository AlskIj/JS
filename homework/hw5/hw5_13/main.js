let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            return  sumUAH / currencyValues[i].value;
        }
    }
}
exchange();