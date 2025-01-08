// From an array of numbers find the biggest.

function findBigNumber(inputArray){
    let bigNumber=inputArray[0];
    for(let i=1;i<inputArray.length;i++){
        if(bigNumber<inputArray[i]){
            bigNumber=inputArray[i]
        }
        }
    
    return bigNumber;
}

let numArray=[1,22,3,44,5,66,7,88,9];
console.log(findBigNumber(numArray))