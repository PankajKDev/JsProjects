// Create a function that takes an argument and 
// returns “YES” if it is an object.

function ObjectChecker(obj){
    if(obj==null){
        console.log("Null is invalid value");
        return;
    }
    if(typeof obj=='object'){
        console.log("Yes it is an object")
    }
    else{
        console.log(`it is a ${typeof obj} not an object`)
    }
}
let radahn={};

ObjectChecker(radahn);