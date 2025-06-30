let btn1=document.querySelector("#btn1")
// btn1.onclick=()=>{
// console.log("button is cliced")
// let a=25;
// a++;
// console.log(a);
// }


// let div=document.querySelector("div")
// div.onmouseover=()=>{
//     console.log("this is a box")
// }
// let btn2=document.querySelector("#btn2")
// btn2.ondblclick=()=>{
//     console.log("hello i m button 2")
// }
btn1.addEventListener("click",()=>{
  console.log("hello i m handler 1")
});
btn1.addEventListener("click",()=>{
  console.log("hello i m handler 2")
});
const handler3=()=>{
  console.log("hello i m handler 3")
}

btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
  console.log("hello i m handler 4")
});


btn1.removeEventListener("click",handler3)