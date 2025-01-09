// Write a JavaScript function that returns 
// array elements larger than a number.

function ReturnLargeElementsArray(num,array){
    let LargeNumArray=[];
    for(let i=0;i<array.length;i++){
        if(array[i]>num){
            LargeNumArray.push(array[i])
        }
    }
    return LargeNumArray;
}

let numArray=[20,40,60,80,100];

console.log(`The larger elements than input are :${ReturnLargeElementsArray(25,numArray)}`)