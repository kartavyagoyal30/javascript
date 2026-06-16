//this call apply bind

//this:class ,object method
//strict mode vs non strict mode

// 'use strict';
//global object: In windo it is callle window, in node js, It is called global
//globalThis:It points to global object of the environment

//this keyword is global scope:NodeJS(Empty Object),in browser it point to global object

//call apply bind, this point to the invoking object

//in class constructor , this will point to newly created empty object

// var a=10;
// var b=20;
// console.log(a,b);

// function greet(name1,name){
//     console.log(name1,name);
// }

// greet("Rohit","Anjali");

// console.log(window);
// console.log(global);

// console.log(globalThis);

//learn about this keyword
// 'use strict';
// console.log(this);

//function

// const user={
//     name:"Rohit",
//     age:20,
//     greet: function(){
//         console.log(`Hi ${this.name}`);
//     }
// }
// const user2={
//     name:"Mohit"
// }

// user2.greet=user.greet;

//this==user

// user2.greet();

// function greet() {
//   console.log(`Hi ${this.name}`);
// }
// function incrementAge(value,name){
//     this.age+=value;
//     this.name=name;
//     console.log(this.age);
//     console.log(this.name);
// }
// const user = {
//   name: "Rohit",
//   age: 20,
// };
// const user2 = {
//   name: "Mohit",
//   age: 30,
// };

// greet.call(user);
// // incrementAge.call(user,10,"Anjali");
// // incrementAge.apply(user,[10,"Anjali"]);

// const incr=incrementAge.bind(user,10,"Anjali");
// incr();
// greet.call(user2);
// incrementAge.call(user2,20,"Anjali");

// console.log(user);
// console.log(user2);


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// const p1=new Person("Rohit",20);
// console.log(p1);

//Arrow function: this doesn't exist for arrow function

const greet=()=>{
    console.log(this);
}
greet();