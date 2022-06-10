// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
//
// }
//
// const  rex = new Dog(
//     10,
//     50,
//     "black"
//
// )
//
// const sharik = new Dog(
//     5,
//     5,
//     'purpul'
// )
//
//
// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//
//     voice(){
//         console.log(this.voiceText)
//     }
//
// }
//
// class bear extends Animal{
//     constructor(type,gender,color,voiceText,height,weight) {
//         super(type,gender,color,voiceText);
//         this.weigh = weight;
//         this.height = height;
//     }
//     purpose(){
//         console.log(`bear weight: ${this.weight} \nbear color: ${this.color}\nbear voice: ${this.voiceText}`)
//     }
//
// }
//
// const Misha = new bear(
//     "wild",
//     "male",
//     "white",
//     "aaaa",
//     "2",
//     "300",
// )
// console.log(Misha)
// Misha.purpose()
//
// class Cat extends Animal{
//     constructor(type,gender, color, voiceText,height, weight, earLengt, speed) {
//         super(type, gender, color, voiceText);
//         this.height = height;
//         this.weight = weight;
//         this.earLenght = earLengt;
//         this.speed = speed;
//     }
// }
//
// const Tom = new Cat(
//     'pet',
//     'male',
//     'blac',
//     'Myau',
//     '20',
//     6,
//     '5',
//     '10'
// )
//
// const Atay = new Cat(
//     'pet',
//     'undefined',
//     'black',
//     'nnnnn',
//     '168',
//     ''
// )


class Home {
    constructor(width, color, rooms, bedrooms, kitchen, bathroom, window, door, furniture, garden ) {
        this.width = width;
        this.color = color;
        this.rooms = rooms;
        this.bedrooms = bedrooms;
        this.kitchen = kitchen;
        this.bathroom = bathroom;
        this.window = window;
        this.door = door;
        this.furniture = furniture;
        this.garden = garden
    }
}
const big_house = new Home(
    1200,
    "white",
    12,
    8,
    1,
    3,
    8,
    10,
    9,
    1
)
console.log(big_house)

class school extends Home {
    constructor(width, color, rooms, bedrooms, kitchen, bathroom, window, door, furniture, garden,  school, floor, children, teacher, time ) {
        super(width, color, rooms, bedrooms, kitchen, bathroom, window, door, furniture, garden);
        this.school = school;
        this.floor = floor;
        this.children = children;
        this.teacher = teacher;
        this.time = time
    }
}

const child_school = new school(
    1400,
    "white",
    17,
    6,
    1,
    3,
    10,
    12,
    100,
    1,
    "big",
    3,
    1000,
    102,
    45
)

console.log(child_school)

// for (let i = 0; i< 10; i++){
//     console.log(i);
// }

var User = {login:"user@gmail.com",password : "****"}
console.log(typeof User);