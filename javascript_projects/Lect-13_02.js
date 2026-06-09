const parent=document.getElementById("parent");
parent.addEventListener('click',(e)=>{
//     const target=e.target;
//     if(target.id==="red"){
//         document.body.style.backgroundColor="red";
//     }
//     else if(target.id==="green"){
//         document.body.style.backgroundColor="green";
//     }
//     else if(target.id==="blue"){
//         document.body.style.backgroundColor="blue";
//     }
//     else if(target.id==="pink"){
//         document.body.style.backgroundColor="pink";
//     }
//     else if(target.id==="orange"){
//         document.body.style.backgroundColor="orange";
//     }

    const child = e.target;
    const body=document.querySelector("body");
    body.style.backgroundColor=child.id;
})