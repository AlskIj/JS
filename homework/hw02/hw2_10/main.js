let num1 = +prompt("enter your first number");
let num2 = +prompt("enter your second number");

if (num1 > num2) {
    console.log(num1);
}else if (num1 < num2) {
    console.log(num2);
}else if (num1 === num2) {
    console.log('equal');
}else {
    console.log('error');
}