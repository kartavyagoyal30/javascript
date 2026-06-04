//Execution Context
//Memory Allocation
//a=undefined
//b=undefined
//addNumber=fnCode
//sumResult1=undefined
//sumResult2=undefined

//Execution Phase


// var a=10;
// var b=20;
// console.log(a);

// function addNumber(num1,num2){
//     const sum=num1+num2;
//     return sum;
// }

// var sumResult1=addNumber(a,b);
// var sumResult2=addNumber(4,5);
// console.log(sumResult1,sumResult2);

//let const
//Memory Allocation
//a=<uninitialized> (temporal dead zone)
//b=<uninitialized> (temporal dead zone)
//Execution Phase

let a=10;
const b=20;
const addNumber=function(num1,num2){
    const sum=num1+num2;
    return sum;
}

const result=addNumber(a,b);
console.log(result);
