// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="Strike is coming";
// }

// const element=document.getElementById("first");
// element.onclick=function handleClick(){
//     element.textContent="Strike is coming";     
// }

// element.onclick=function handleClick1(){
//     element.textContent="Diwali is coming soon";     
// }

// element.onclick=function handleClick2(){
//     element.textContent="Holi is coming soon";     
// }

// element.addEventListener("click",()=>{
//     element.textContent="Strike is coming";
// })

// element.addEventListener("click",()=>{
//     element.style.backgroundColor="red";
// })

// const child1=document.getElementById("child1");

// child1.addEventListener('click',()=>{
//     child1.textContent="I am Clicked";
// })

const pp=document.getElementById("parent");

function handleClick(e){
    e.target.textContent="I am Clicked";
}
pp.addEventListener('click',handleClick);
pp.removeEventListener('click',handleClick);

// const grandpar=document.getElementById("grandparent");
// grandpar.addEventListener('click',()=>{
//     console.log(e.target);
//     // console.log("grandparent is clicked");
// },true)

// const par=document.getElementById("parent");
// par.addEventListener('click',()=>{
//     // console.log("parent is clicked");
// })

// const child=document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     // e.stopPropagation();
//     // console.log("child is clicked");
// })

//capture phase on ha:Top se down aaoge:Us time pe event ko trigger kar diya jayega
//capture phase off ha:Event hai usko down to up(bubbling phase) tab trigger kara jayega





