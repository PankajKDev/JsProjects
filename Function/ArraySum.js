// A function to take an array and return the sum

function ArraySum(inputArray){
    let sum=0;
    inputArray.forEach((item)=>{
        sum+=item;
    })
    return sum;
}

let xyz=[1,2,3,4,5,6,7,8,9];

console.log(ArraySum(xyz))