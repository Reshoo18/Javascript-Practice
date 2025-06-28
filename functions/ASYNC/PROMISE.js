// let promise=new Promise((resolve,reject)=>{
//     console.log("hello i am promise")
//     resolve("yes success")
//     //reject("but not success")
// });



function getData(dataId,getNextData){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("data",dataId)
          resolve("success")
          //reject("unsuccess")
        },2000)
        
    });
}
getData(123)
