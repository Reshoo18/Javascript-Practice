let mode1=document.querySelector("#mode")
currMode="light"

mode1.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark"
        document.querySelector("body").style.background="black"
    }else{
        currMode="light"
        document.querySelector("body").style.background="white"
    }
    console.log(currMode)
})