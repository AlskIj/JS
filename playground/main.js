function filter_list(l) {
    let numArr = [];
    for (const item of l) {
        if (typeof item == 'number') {
            numArr.push(item);
        }
    }
    return (numArr);
}

console.log(filter_list([1, 2, 'a', 'b']));