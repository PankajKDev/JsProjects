// Write a JavaScript function that accepts a 
// number as a parameter and check the number
//is prime or not.

//number which can only be divided by itself is prime

function checkPrime(num){
    if(num<=1) return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    
    }
 return true;
}

console.log(checkPrime(4))