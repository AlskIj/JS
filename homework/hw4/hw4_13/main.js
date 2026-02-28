function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}



console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));