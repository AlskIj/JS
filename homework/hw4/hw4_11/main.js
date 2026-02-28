function sum(arr) {
    let value = arr[0];
    for (i = 1; i < arr.length; i++) {
        value += arr[i];
    }
    return value;
}

sum([]);