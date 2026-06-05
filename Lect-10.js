// forEach, filter, reducer, map, set

// const arr = [10, 20, 30, 6, 90];
// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
// })
// let sum=0;
// arr.forEach((number)=>{
//     sum+=number;
// })
// console.log(sum);

//filter(give the new array)

// const newArr=arr.filter((number)=>{
//     return number>25;
// })
// console.log(newArr);

//custom filter
// Array.prototype.filtering = function (compare) {
//   const ans = [];
//   for (let num of this) {
//     if (compare(num)) {
//       ans.push(num);
//     }
//   }
//   return ans;
// };

// const newArr=arr.filtering((number) => {
//   return number > 25;
// });
// console.log(newArr);

// const a=[1,2,3,4,5];
// const answer=a.filtering((num)=> num>3);
// console.log(answer);

// const arr=[10,20,30,5,90,87];

// const newArr=arr.map((num)=> num*2);
// console.log(newArr);

//reduce

// const value=arr.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },0)
// console.log(value);


//set
// const arr=[10,20,30,10,25,15,10,20];
// console.log(arr);

// const s1=new Set(arr);
// s1.add(11);
// console.log(s1);
// console.log(s1.has(20)); //present or not in the set
// console.log(s1.delete(10));
// console.log(s1.size);

// const arr=["ro@gm","mo@gm","ro@gm","mo@gm","ro@gm","ro@gm"];
// const uniqueEmail=[...new Set(arr)];
// console.log(arr);
// console.log(uniqueEmail);

//map

// const m1= new Map([
//     ["Rohit",40],
//     [2,"Mohit"],
//     [true,11],
//     [[10,20,30],"Mohit"]
// ]);

// m1.set({name:"Mahish",age:20},false);
// console.log(m1);
// console.log(m1.get(2));
// console.log(m1.get([10,20,30]));
