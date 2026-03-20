


//
// function filter (arr, fn) {
//     let result = [];
//     for (const item of arr) {
//         if (fn(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }
//
// console.log(filter([1, 2, 3,4], x => x % 2 === 0));




// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// console.log(sum([1, 2, 3, 4]));

// function myReduce(arr, fn, initial) {
//     let acc = initial;
//     for (const item of arr) {
//         acc = fn(acc, item);
//     }
//     return acc;
// }


// function squareDigits(num){
//     return +num.toString().split('').map(x => x ** 2).join('');
// }
//
// console.log(squareDigits(9119));

// let num = 9119;
// let numArr = num.toString();
// console.log(numArr);
// let split = numArr.split('');
// console.log(split);
// let result = [];
// let square;
// for (const item of split) {
//     square = item ** 2;
//     result.push(square);
//
// }
// console.log(result);
//
// console.log(result.join(''));
// num.toString().split('').map(x => x ** 2).join('');

// two sum
// function twoSum(arr, target){
//     let map = [];
//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i];
//         if (map[complement] !== undefined) {
//             return [map[complement], i];
//         }
//         map[arr[i]] = i;
//     }
// }
//
// console.log(twoSum([2, 7, 11, 22], 9));

//Count Pairs Whose Sum is Less than Target
// function countPairs(arr, target) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] < target) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
//
// console.log(countPairs([-6,2,5,-2,-7,-1,3], -2));