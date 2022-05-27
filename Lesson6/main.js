 // es5 and es6

 // const a = "hello"
 // let b = 10
 //

 // es5

 // console.log(c)
//  var c = "oiierjpo";
// console.log(c)
//

// c = "adf"
//
//  console.log(c)

//
//  const first_name = "jack";
// const last_name = "barbara";
//
// console.log(first_name + ' ' + last_name)
//
//  console.log(`full name: ${first_name} ${last_name}`)
//
//  const getFuulname = (user) => {
//     return "First Name: "+ user.first_name +"\n" + "\n" + "last name:" + user .last_name}
//     return `First Name: ${user.first_name}\nlast_name:${user.last_name}`
//
//  }
//
//  const user = {
//     first_name: "Atai",
//      last_name: "Zaplsg"
//  }
//
//  console.log(getFuulname(user))
//
//  spread operator

 const mass = [1,2,3,4,5]
 const mass2 = [...mass]

 for(let i =0; i < mass.length; i++){
     mass2.push(mass[i])
 }
 console.log(mass2)

 const obj = {
     username: "Beka",
     age:15,
     last_name: "Bekmatov",
     full_name: "Beks Bekmamatov"
 }

 const obj2 = [{...obj}]
 console.log(obj2)

     // деструктрузизация

  const props = {
     onSubmit: ()=> {
         console.log("Submit")
     },
      data: [
          {
              key: 'value'
          },
          {
              key2: 'value2'

          },
          {
              key3: 'value3'

          }
      ]
 }

 const {data, onSubmit} = props;

 console.log(data);

 onSubmit();


 console.log(props.data[1].key2)