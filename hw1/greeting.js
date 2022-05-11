const name = prompt("Как тебя зовут?");
alert(`Hi! ${name}`);

const arr = [1,2,3,4,5,6];
const arr1 = [7,8,9];

if (arr.length > arr1.length) {
    console.log("Очень хорошо!")
} else if (arr.length < arr1.length) {
    console.log("Не правильно!");
} else {
    console.log("Досвидание!");
}

const color = prompt("Выборите цвет?");

switch (color) {
    case "red":
        console.log("red - stop!");
        break;
    case "orange":
        console.log("orange - get ready");
        break;
    case "green":
        console.log("green - you can go");
        break;
    default:
        break;


}




