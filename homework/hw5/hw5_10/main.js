let foobar = (array) => {
    let num = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < num) {
            num = array[i];
        }
    }return num;
}
console.log(foobar([0, 2, 3, 4, -5]));