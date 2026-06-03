//Objects

// const user = {
//     name:"Kartavya",
//     age:23,
//     emailId:"kartavya@.com",
//     amount:3400
// }

// console.log(typeof user);
// console.log(user.age);

// user.aadhar=1234;

// console.log(user);
// user.amount=5000;
// console.log(user);
// delete user.emailId;
// console.log(user);

// console.log(user["aadhar"]);

// const user = {
//     name:"Kartavya",
//     age:23,
//     emailId:"kartavya@.com",
//     amount:3400,
//     // greeting: function(){
//     //     console.log(`Hello, ${this.name} `);
//     //     return 20;
//     // },
//     address:{
//         city:"Jaipur",
//         state:"Rajasthan"
//     }
// }


//shallow copy
// const user2={...user}; //seperate copy of the object till the first level

// const user2=user;
// user2.name="Anjali";
// console.log(user2);
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys,user[keys]);
// } 

// const {name:username,age:userage}=user;
// console.log(name,age);
// console.log(username,userage);

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

// const va=user.greeting();
// console.log(va);  

// console.log(user.address);
// console.log(user.address.city);

// const user2=structuredClone(user);
// user2.name="Anjali";
// console.log(user);
// console.log(user2);

const sym=Symbol("id");
const user={
    name:"Kartavya",
    age:23,
    0:100,
    2:"Goyal",
    [sym]:"Hello JI"  
}

console.log(user[0]);
console.log(user["0"]);
console.log(user[2]);
console.log(user["2"]);
console.log(user[sym]);