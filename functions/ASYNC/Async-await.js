// Asynch function have two key word method 
// 1:- async 
// 2:- await 


//1:- Acync  :- means its return promise 
//  async function hello (){
//     console.log("hello ")
//  }
//  hello();

 //2 await :- We cam use await only with in the asuync function only not in individually function 
//   function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("the data is here")
//             resolve(300)
//         },2000)
//     })
//   }
//   calling await 
// async function getData(){
//     await api();
// }
// getData();








//ASYNC AWAIT WHOLE CODE
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },2000)
    })
}

async function getNewCall(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}
    

getNewCall();