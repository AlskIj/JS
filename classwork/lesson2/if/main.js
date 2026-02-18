// let age = +prompt('enter your age');
// console.log(age);
//
// // if (age >= 18) {
// //     console.log('watch your movie');
// // }
//
//
// if (age >= 18) {
//     document.write('<h2>watch movie</h2>');
// } else {
//     document.write('<h2>go away</h2>');
// }


// let color = prompt('enter color');
//
// if (color === 'green') {
//     console.log('you can go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('?????');
// }


// let color = prompt('enter color');
// let isRoadClear = prompt('is road clear?');
//
// if (color === 'green') {
//     if (isRoadClear === 'yes') {
//         console.log('you can go');
//     } else {
//         console.log('wait pls');
//     }
//
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('?????');
// }


let color = prompt('enter color');
let isRoadClear = prompt('is road clear?');

if (color === 'green' && isRoadClear === 'yes') {
     console.log('you can go');
} else if (color === 'yellow') {
     console.log('wait');
} else if (color === 'red') {
     console.log('stop');
} else {
     console.log('?????');
}

