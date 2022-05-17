// function sayHello() {
//     console.log("Heloo")
//
// }
//
// sayHello();
//
// function getFuiiName(user,age,user2) {
//     if(age < 18){
//         console.log("closed")
//     }else {
//     console.log(user.last_name, user2.last_name + " " + "open")
//
//     }


// }
//
// const user = {
//     first_name: "mahabat",
//     last_name: "aigyl"
// }
// const user2 = {
//     first_name: "amir",
//     last_name: "onur"
// }
//
// getFuiiName(user, 18, user2)
//
// const anonym = function (users) {
//     console.log(user)
//
// }
//
// anonym();

//
// function numbers(number1, number2) {
//     if(number1 > number2){
//         console.log("Первое число больше!")
//
//     }else if (number1 < number2){
//         console.log("Второе число больше!")
//     }else {
//         console.log("Равны")
//     }
//
// }
// const number = {
//     number1: 5
//     number2: 2
// }
// numbers(3,6)
//
//
// function twoMass(arr1, arr2) {
//     console.log(arr1, arr2)
//     if(arr1.length < arr2.length){
//         alert("arr1 < arr2")
//     }else {
//         alert("===")
//     }
//
// }
//
// const arr1 = [ 12123, 1123, 1232, 33232]
// const arr2 = [33232, 43, 34]
//
// twoMass(arr1, arr2)
//
// function tr() {
//     let line = "*"
//     while (line.length < 7){
//         console.log(line)
//         line = line + "*"
//     }
//
// }
// tr()

// }
//
//  function numbers (number1, number2) {
//     if(number1 > number2){
//         console.log("Первое число больше!")
//     }else if (number1 < number2){
//         console.log("Второе число больше!")
//     }else {
//         console.log("Равны")
//     }
//
// }
//
//     numbers(5, 8)
//
//
// const arr1 = [ 1234, 1123, 1232, 3456]
// function counChar(arr1) {
//     console.log(arr1.length)
// }
// counChar(arr1)

function FizzBuzz(aTarget) {
    for (let i = 1; i <= aTarget; i++) {
        let result = "";
        if (i%3 === 0) result += "Fizz";
        if (i%5 === 0) result += "Buzz";
        if (result.length === 0) result = i;

        console.log(result);
    }
}
FizzBuzz(100)