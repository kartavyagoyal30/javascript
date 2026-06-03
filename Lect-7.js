// greeting();

// function greeting(){
//     console.log("Hello");
// }

// function addNumber(num1,num2,num3=0){
//     const sum=num1+num2+num3;
//     console.log(sum);
// }

// function addNumber(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }

// greeting();
// console.log(greeting());
// addNumber(2,4,12,34,56,54,32,1,234);

// const arr=[10,20,30,40,50];
// const [first,second,...num]=arr;
// console.log(first,second,num);

// const arr=[10,20,30,40,50];
// const arr1=[100,200,300,400,500];

// const ans=[...arr,...arr1];
// console.log(ans);

//function: expression

// const addNumber=function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(10,20));

//arrow function

// const addNumber=(num1,num2)=>{
//     return num1+num2;
// }

// const addNumber = (num1,num2) => num1+num2;
// const squareNumber=num=>num*num;
// const greeting=()=>({name:"Kartavya",age:23});

// console.log(addNumber(10,20));
// console.log(squareNumber(6));
// console.log(greeting());

//IIFE

// (function greeting(){
//     console.log("Hello");
// })();

// (()=>{
//     console.log("Hello");
// })();

// function greet(){
//     console.log("Hello");
// }

// function meet(callback){
//     console.log("Hi");
//     callback(); 
// }

// meet(greet);

//blinkit

function blinkitOrderPlaced(){
    console.log("we have started packing your order");
}

function zomatoOrderPlaced(){
    console.log("we have started preparing your food");
}

function payment(amount,callback){
    console.log(`we have received the payment of ${amount}`);
    console.log("Payment is received");
    callback();
}

payment(1000,blinkitOrderPlaced);
payment(1000,zomatoOrderPlaced);


