// #qLQLJSeN7i
let array = [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while
// let i= 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// 2. перебрати його циклом for
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
// let i = 0;
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести числа тільки парні значення
// let i = 0;
// while (i < array.length) {
//     if (i % 2 === 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число, кратне 3, на слово “okten”
// for (let i = 0; i < array.length; i++) {
//     if (i % 3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// 8. вивести масив у зворотньому порядку.
// let reversed = [];
// for (let i = array.length - 1 ; i >= 0; i--) {
//     reversed.push(array[i]);
// }
// console.log(reversed);

// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// 9_1
// let i= array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }

// 9_2
// for (let i = array.length - 1 ; i >= 0; i--) {
//     console.log(array[i]);
// }

// 9_3
// let i = array.length - 1 ;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 9_4
// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 9_5
// let i = array.length - 1;
// while (i >= 0) {
//     if (i % 2 === 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 9_6
// for (let i = array.length; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// // 9_7
for (let i = array.length; i >= 0; i--) {
    if (i % 3 === 0) {
        array[i] = 'okten';
    }
}
console.log(array);