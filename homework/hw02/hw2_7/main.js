let time = +prompt("enter time 0-59");
if (time >= 0 && time < 15) {
    console.log('перша');
}else if (time >= 15 && time <= 30) {
    console.log('друга');
}else if (time >= 30 && time < 45) {
    console.log('третя');
}else if (time >= 45 && time <= 59) {
    console.log('четверта');
}
