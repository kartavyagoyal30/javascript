//operator
//Arithmetic

// console.log(10+20);
// console.log(10-20);
// console.log(10*20);
// console.log(10/20);
// console.log(10%20);
// console.log(10**20);]

//Assignment operator

// let x=20;
// let y=10;
// x+=y;
// console.log(x);
// x-=y;
// console.log(x);
// x*=y;
// console.log(x);
// x/=y;
// console.log(x);
// x%=y;
// console.log(x);
// x**=y;
// console.log(x);

//Comparison operator

// let a=20;
// let b=10;

// console.log(a==b); //value check(chan be number and string )
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a===b); //first type check then value check
// console.log(a!==b); //first type check then value check

// let x=10;
// let y="11";
// let z=Number(y);
// console.log(z);

// let x="123asd";
// let y=Number(x);
// console.log(y); ->NaN(not a number)
// console.log(0/0);

// let z=10;
// let y=String(z);
// console.log(y);

// console.log(Number(null));
// console.log(String(null));
// console.log(Boolean(null));

// console.log(Number(undefined));
// console.log(String(undefined));
// console.log(Boolean(undefined));

// let a=0.1;
// let b=0.2;
// let c=a+b;

// // console.log(c==0.3);
// console.log(c.toFixed(1)==0.3);
// console.log(c.toFixed(2)==0.3);
// console.log(c.toFixed(3)==0.3);
// console.log(c.toFixed(4)==0.3);

//1.null is loosely equal to undefined only
// console.log(null==undefined);
// console.log(null===undefined);

//>,>=,<=,< (null --> number,undefined --> NAN)

// console.log(null>=0);

// console.log("Rohit"> "Mohit");
// console.log("Rohit"> "mohit");
// console.log(10>="10");
// console.log(10>=true);

//Ek koi bhi type hai, usko agar muje compare karna hai durse kisi type se dono number me convert honge

// console.log(null>="");

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// let age=20;
// if(age>=18){
//     console.log("Eligible to vote");
// }
// else{
//     console.log("Not eligible to vote");
// }

//logical operator(&&,||,!)

// console.log(true&& true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);
// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);
// console.log(!true);
// console.log(!false);

//check the first for the true and then return the second as the output
//if first is false then it result the first one as a output
// let a="Mohit";
// let b="Rohit";
// let c=a&&b;
// console.log(c);

//check the first for the false and then return the second as the output
//if first is true then it result the first one as a output
// let a="Mohit";
// let b="Rohit";
// let c=a||b;
// console.log(c);