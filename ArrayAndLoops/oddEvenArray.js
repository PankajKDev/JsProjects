
//Take an array. Iterate over each element and add 1 if the item is odd and
// add 2 if the item is even and print the new array.

function oddEvenArray(inputArray){
    let originalArray=inputArray;
 
    for(let i=0;i<inputArray.length;i++){
        if(originalArray[i]%2==0){
            originalArray[i]+=2;
        }
        else{
            originalArray[i]+=1;
        }

    }
    return originalArray;
}

let numArray=[5,6,7,8,9,10];
console.log(oddEvenArray(numArray));