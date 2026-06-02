//Arrays: is is a container of hetrogeneous elements

let marks = [1200, 1300, 1500, 1600, 1700];
// let arr=[100,200,"kartavya",true];
// arr[0]=1000;
// console.log(arr);
// console.log(marks);
// console.log(marks.length);

// push:
// marks.push(2000);
// console.log(marks);

//pop:
// marks.pop();
// console.log(marks);

//starting me add kar sakte h:

// marks.unshift(1000);
// console.log(marks);

//starting me remove kar sakte h:

// marks.shift();
// console.log(marks);

// let arr= [10,20,30,40,50];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num in arr)
// {
//     console.log(arr[num]);
// }

// let arr2=arr;
// arr2.push(30);
// console.log(arr);
// console.log(arr2);

// const arr=[10,20,30,40,50];
// const arr2=[...arr];
// arr2.push(30);
// console.log(arr);
// console.log(arr2);

// const arr=[10,20,30,40,50];
// console.log(arr.slice(1,4));

// // console.log(arr.splice(1,3));
// console.log(arr.splice(1,3,"akak",12));
// console.log(arr);

// const arr=[10,20,30,40,50];
// const arr2=["rohit",11,true];
// const arr3=[...arr,...arr2];
// console.log(arr3);

// const arr=[10,20,30,40,50];
// const arr2=["rohit",11,true];
// const arr3=[90,4,false];

// arr.push(arr2);
// const arr4=arr.concat(arr2,arr3);
// const arr4=[arr,arr2,arr3];

// console.log(arr4);

// const names=["Alice","Bob","Charlie","Bob"];
// console.log(names.toString());

// console.log(names.join(" "));

// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));

// names.sort();
// names.reverse();

// console.log(names);

// const arr=[101,90,80,32,91];
// arr.sort(); //sorting is based on the first character and the array is treated as a string
// console.log(arr);

// const arrr=[10,"Rohit","Mohan",true];
// arrr.sort(); //sorting is based on the first character and the array is treated as a string
// console.log(arrr);

// const a=[10,40,31,71,5,11];
// a.sort((a,b)=>{
//     return a-b;
// })

// a.sort((a,b)=>{
//     return b-a;
// })
// console.log(a);

const arr=[10,30,50,[40,90,11],80];
console.log(arr[3]);
// console.log(arr.flat());

arr.name="Kartavya";
console.log(arr);
