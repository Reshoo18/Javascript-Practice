// Callbacks :- is an function passed as an argument in another function 

//Exampke =

function sum(a,b){
    console.log(a+b);
}
function Calculator(a,b,sum){
  sum(a,b)
}
Calculator(1,2,sum)