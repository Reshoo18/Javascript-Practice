// example javascript
// console.log("india")
// console.log("delhi")
// function hello(){
//     console.log("hello")
// }
// setTimeout(hello,2000)
// // only setTimeout function

// setTimeout(()=>{
// console.log("hello World")
// },4000);
// console.log("is wait")
// console.log("not wait")


function Async(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId)
            resolve("success")
        },4000);
    });
}
function Async2(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId)
            resolve("success")
        },4000);
    });
}
console.log("getting the data 1")
// let P1=Async(123);
//   P1.then((res)=>{
//     console.log(" getting data 2")
//     let P2= Async2(567)
//        P2.then((res)=>{
//         console.log("done")
//        })
//   });
Async(123).then((res)=>{
    console.log("getting data 2")
    Async2(456).then((res)=>{
        console.log("done")
    })
})