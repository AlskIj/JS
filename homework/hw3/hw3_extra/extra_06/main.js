// 1. Створити пустий масив та :
let array = [];

// a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; array.length < 50; i++) {
//     if (i % 2 === 0) {
//         array.push(i);
//     }
// }
// console.log(array);

// b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; array.length < 50; i++) {
//     if (i % 2 !== 0)
//         array.push(i);
// }
// console.log(array);

// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0 ; i < 20; i++) {
//     let randomNumber = Math.floor(Math.random() * 101);
//     array.push(randomNumber);
// }
// console.log(array);

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    let randomNumber =  Math.floor(Math.random() * (733 - 8) + 8);
    array.push(randomNumber);
}
console.log(array);

// // 2. Вивести за допомогою console.log кожен третій елемент
// for (let i = 0; i < array.length; i += 3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// let arr2 = []
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         arr2.push(array[i]);
//     }
// }
// console.log(arr2);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 1; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i - 1]);
    }
}