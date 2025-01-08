// Using forEach (in javascript), print the sum of all the array elements.


function ArraySum(inputArray){
    let sum=0;
    inputArray.forEach((item)=>{
        sum+=item;
    })
    return sum;
}

let numArray=[1,2,3,4,5,6,7,8,9];

console.log(ArraySum(numArray));