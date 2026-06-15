//async await

// async function greet() {
//   // return "Rohit";

//   return new Promise((resolve, reject) => {
//     reject("Rohit");
//   });
// }

// const response = greet();
// // console.log(response);
// response.then((data) => {
//   console.log(data);
// }).catch((error)=>{
//     console.log("Error:",error);
// });

async function github() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  //   console.log(data);

  const parent = document.getElementById("first");
  for (let user of data) {
    const element = document.createElement("div");
    element.classList.add("User");

    const image = document.createElement("img");
    image.src = user.avatar_url;

    const userName = document.createElement("h2");
    userName.textContent = user.login;

    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.textContent = "View Profile";

    element.append(image, userName, anchor);
    parent.append(element);
  }
}

github();

// console.log("hello world end");
