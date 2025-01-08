// Take two arrays arr1 = [“SAM”, “VIKRAM”, “VENUS”] and arr2 = [“WATSON”,
//“RAM”, “SAM”] use a for loop to find out the names common in both the arrays.

function ArrayCompare(arrayOne,arrayTwo){
    let commonArray=[];
    for(let i=0;i<arrayOne.length;i++){
        for(let j=0;j<arrayTwo.length;j++){
            if(arrayOne[i]==arrayTwo[j]){
                commonArray.push(arrayOne[i])
            }

        }

    }
    return commonArray;
}

let xyz=["apple","orange","cat","dog","fist"];

let abc=["two","apple","fist","black flash"]

console.log(ArrayCompare(xyz,abc));