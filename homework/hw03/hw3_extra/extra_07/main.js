// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
//
// let sum = 0;
// for (let i = 1; i < arr.length; i++) {
//     sum += arr[i];
// }
// let avg = sum / arr.length;
// console.log(Math.round(avg));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let array = [];
// for (let i = 0; i < 5; i++) {
//     let randomNumber =  Math.floor(Math.random() * (733 - 8) + 8);
//     array.push(randomNumber);
// }
// console.log(array);
//
// let arr = [];
// let prod;
// for (let i = 0; i < array.length; i++) {
//     prod = array[i] * 5;
//     arr.push(prod);
// }
// console.log(arr);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let array = [234, true, '123', '0', 0, undefined, NaN, 12.67, 33n, -2,'shf']
let arr = []

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'number') {
        arr.push(array[i]);
    }
}
console.log(arr);