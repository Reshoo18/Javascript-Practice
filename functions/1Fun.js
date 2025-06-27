// console.log("reshoo")
// console.log("ranjan")git add .addg




//1.question :- create a function and pass a string and calculate the number of vowels are present in the strig

function CountVowels(str){
    count=0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char=="u"){
            count++;
        }
    }
   return count;
}
CountVowels("helloworld");