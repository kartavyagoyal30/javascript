//code
// console.log("hello world start");
// const p1=fetch("https://api.github.com/users");

// console.log(p1);

//fulfilled,rejected

// const p2=p1.then((response)=>{
//     return(response.json());
// })

// p2.then((response)=>{
//     console.log(response);
// })

fetch("https://api.github.com/users")
.then((response)=>{
    if(response.ok){
        throw new Error("Something went wrong");
    }
    return response.json();
})
.then((response)=>{
    // console.log(response);

    const parent=document.getElementById("first");
    const image=document.createElement("img");
    for(let i=0;i<response.length;i++){
        const image=document.createElement("img");
        image.src=response[i].avatar_url;
        parent.append(image);
    } 
})
.catch((error)=>{
    const parent=document.getElementById("first");
    parent.textContent="Something went wrong";
})

// console.log("hello world end");

// const j1={
//     name:"Rohit",
//     age:20,
//     address:"Gwalior"
// }

// const jsonFormat=JSON.stringify(j1);

// console.log(jsonFormat);

// const jsonFormat=`{
//     "name":"Rohit",
//     "age":20,
//     "address":"Gwalior"
// }`;

// const JsObject=JSON.parse(jsonFormat);

// console.log(JsObject);