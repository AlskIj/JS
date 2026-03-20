// Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let word = ''
//
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
// }
// console.log(word);

// let arr = ['a', 'b', 'c'];
// let word = ''
//
// let i = 0
// while (i < arr.length) {
//     word += arr[i];
//     i++;
// }
// console.log(word);

let arr = ['a', 'b', 'c'];
let word = ''

for (const letter of arr) {
    word += letter;
}
console.log(word);