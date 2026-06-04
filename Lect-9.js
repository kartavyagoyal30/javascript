//Scope and Closure , HOF
//Global -> accessible to everyone (var respect)
//Functional -> accessible only inside the function(var respect)
//Block level scope -> accessible only inside the block(var don't respect)

// let a=10;
// const b=20;

// if(true){
//     console.log(b);
// }

// function greet(){
//     let c=30;
//     console.log(c);
// }

// greet();

// let global=30;

// function greet(){
//     let global=40;

//     function meet(){
//         console.log(global);
//     }
//     meet();
// }

// greet();

// function createCounter(){

//     let count=0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// const counter=createCounter();
// console.log(counter());
// console.log(counter());
// counter();

let balance=500;

// balance+="Rohit";
// balance-=500;
// console.log(balance);

// let user={
//     balance:500,
//     deposit: function(amount){
//         if(typeof amount === "number" && amount>0)
//         {
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && this.balance>=amount)
//         {
//             this.balance-=amount;
//             return this.balance;
//         }
//     },
//     getBalance:function(){
//         return this.balance;
//     }
// }

// console.log(user.deposit(200)); 
// console.log(user.getBalance());
// console.log(user.withdraw(100));

//Higher Order Function

function double(value){
    return function execute(num){
        return num*value;
    }
}

const n=double(10)(3);
console.log(n);
