function minValue(array) {
    let min = array[0];
    for (const number of array) {
        if (number <  min) {
            min = number;
        }
    }
    return min;
}

minValue([]);