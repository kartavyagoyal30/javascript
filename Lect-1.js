// console.log("hello world");

// let name="Kartavya";
// let age=20;
// age=10;
// console.log(name,age);

// const account;
// console.log(account);

// var a=10;
// var a=20;
// console.log(a);

// if(true){
//     var c=20;
// }
// function b(){
//     var c=30;
//     console.log(c);
// }
// b();
// console.log(c);

//primitive data type (all are immutable)

//number,string,boolean,null,undefined,symbol,bigint
//number
// let a=10;
// let b=2.5;
// console.log(a,b);

//string

// let c="Strike is coming"
// let d="Anjali"
// console.log(c,d);

//boolean

// let login=true;
// let logout=false;
// console.log(login,logout);

//undefined

// let user;
// console.log(user);

//bitint

// let num=12345678987654321234567890n;
// console.log(num);

//null

// let whether = null;
// console.log(whether);
// console.log(typeof whether);

// let weather=current_weather("Dwarka")
//25 degree celsius
//null (present but can't fetch this time again try after some time)
//undefined( not present in the database)

//symbol

// const id1=Symbol("id");
// const id2=Symbol("id");
// console.log(id1==id2);

//non-primitive data type (all are mutable)
//array,object,function
//array

// let arr=[1,2,3,"Kartavya",true];
// console.log(arr);
// console.log(typeof arr);

//object

// let user={
//     name:"Kartavya",
//     account:"123456",
//     age:20,
//     category:"gen"
// }

// console.log(user);

//function

// function add() {
//   console.log(10 + 20);
// }

// add();

// let s = function sub() {
//   console.log(20 - 10);
// };
// s();
// console.log(typeof s);
// console.log(s);

// let str="Rohit";
// str="Anjali";
// console.log(str);


//pass by value
// let a=10;
// let b=a;
// b=20;
// console.log(a,b);

//pass by reference
let user={
    name:"Kartavya",
    account:"123456",
    age:20,
    category:"gen"
}
let user2=user;
user2.name="Anjali";
console.log(user,user2);
