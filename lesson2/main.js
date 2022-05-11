// const array = [
//     {
//         username:'Maha',
//         full_name: "Aigyl amir"
//     }, {
//         username:'Maha',
//         full_name: "Aigyl amir"
//     }, {
//         username:'Maha',
//         full_name: "Aigyl amir"
//     }, {
//         username:'Maha',
//         full_name: "Aigyl amir"
//     }, {
//         username:'Maha',
//         full_name: "Aigyl amir"
//     },
// ]

// let i =0; // i = i + 1
// //console.log(i)
//
// for(let i = 0; i< array.length; i++){
//     console.log(array[i])
// } // индексы
//
// for(let user of array){
//     console.log(user)
// }
//
// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key10: 'b10',
//
// }
//
// for(let key in obj){
//     console.log(obj)
// }

//

//
//
// const users = [
//     {
//         username: 'jack',
//         salary: 500
//     },{
//         username: 'jonh',
//         salary: 5000
//     },{
//         username: 'Sack',
//         salary: 10000
//     },
// ]
// //
// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers);

const users = [
    {
        username: "Nik",
        force: 2500,
        speed: 400
    },{
        username: "Lego",
        force: 3500,
        speed: 500
    },{
        username: "Robo_Explorer",
        force: 4500,
        speed: 600
    },{
        username: "Anki",
        force: 5500,
        speed: 700
    },{
        username: "jane",
        force: 7500,
        speed: 800
    },
]
const robot_user = users.filter(user => user.force > 4500)
console.log(robot_user);


