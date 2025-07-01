//const name ="hello"
// function Outer(){
//     //let name="reshoo"
//     function inner(){
       
//        let name="ranjan"
//         console.log(name)
//     }
//     inner();
// }
// Outer();


//CLOSURE CODE EXUCUTION
function Outer(){
    let name ="reshoo"
    function innerFUnc(){
        console.log(name)
    }
    return innerFUnc
}
let inner =Outer();

inner();