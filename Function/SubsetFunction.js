//Write a JavaScript function to get all possible 
// subset with a fixed length (for example 2)
//combinations in an array.

function subsetFunction(arr){
    let SubsetArray=[];
    for(let i=0;i<arr.length-2+1;i++){
      for(let j=0;j<arr.length;j++){
        SubsetArray.push([arr[i],arr[j]])

      }

    }

  return SubsetArray;

}
let xyz=[1,2,3,4,5,6,7,8,9,10];
console.log(subsetFunction(xyz))


