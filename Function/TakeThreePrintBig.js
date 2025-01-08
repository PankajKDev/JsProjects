// Write a function which will take 3 numbers and return the biggest.


//solution 1 can take  multiple inputs
function PrintBigNumber(...num){
    let numArray=[...num];
    let BigNumber=numArray[0];
    for(let i=0;i<num.length;i++){
        if(BigNumber<numArray[i]){
            BigNumber=numArray[i];
        }
    }
    return BigNumber;
}

console.log(PrintBigNumber(11,22,33,6,99))

//solution 2 

function ThreeBigNumber(numOne,numTwo,numThree){
    let BigNumber=numOne;
    if(BigNumber<numTwo)BigNumber=numTwo;
    if(BigNumber<numThree)BigNumber=numThree;
    return BigNumber;
}
console.log(ThreeBigNumber(5,2,33))


//solution 3

function ThreeBigNumberSolutionThree(numOne,numTwo,numThree){
    let BigNumber=Math.max(numOne,numTwo,numThree)
    return BigNumber;
}
console.log(ThreeBigNumberSolutionThree(555,23,33))

