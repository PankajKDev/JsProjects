// Filter the odd numbers from an array.

function filterOdds(inputArray){
let oddArray=[];
for(let i=0;i<inputArray.length;i++){
if(inputArray[i]%2==1){
oddArray.push(inputArray[i])
}
}
return oddArray;
}
let exArray=[1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(filterOdds(exArray));
