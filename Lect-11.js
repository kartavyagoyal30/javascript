//before and after

const newElement=document.createElement("h2");
newElement.textContent="Strike is Coming";
newElement.id="second";

const element=document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement1=document.createElement("h3");
newElement1.textContent="Diwali is coming soon";
newElement1.id="third";
newElement1.classList.add("diwali");
newElement1.classList.add("holi");
newElement1.style.backgroundColor="pink";
newElement1.style.fontSize="40px";

const element1=document.getElementById("second");
element1.after(newElement1);

// element.before(newElement1);

// creating inside any element

// const list=document.createElement("li");
// list.textContent="Milk";
// const list1=document.createElement("li");
// list1.textContent="Cake";
// const list2=document.createElement("li");
// list2.textContent="Halwa";
// const list3=document.createElement("li");
// list3.textContent="Paneer";

// const unordered_list=document.getElementById("listing");
// unordered_list.append(list);
// unordered_list.append(list1);
// unordered_list.prepend(list2);
// // list.after(list3);

// unordered_list.children[1].after(list3);

const arr=["Milk","Paneer","Cake","Tofu","Tea"];

const unorderedElement=document.getElementById("listing");
const fragment=document.createDocumentFragment();
for(let food of arr){
    const list=document.createElement("li");
    list.textContent=food;
    fragment.append(list);
}

unorderedElement.append(fragment);

const s1= document.getElementById("first");
s1.remove();

