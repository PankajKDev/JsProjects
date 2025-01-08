//A function which will take 2 arrays and return 
// the unique names in a new array. Similar to
//point 12 of Loop.

function UniqueArray(ArrayOne,ArrayTwo){
    let UniqueArray=[];
    for(let i=0;i<ArrayOne.length;i++){
      if(!(ArrayTwo.includes(ArrayOne[i]))){
        UniqueArray.push(ArrayOne[i])
    }
    if(!(ArrayOne.includes(ArrayTwo[i]))){
        UniqueArray.push(ArrayTwo[i])
    }


}
   
       return UniqueArray;
}


let abc=["abc","def","ghi","jkl"];
let def=["abc","def","ghi","five"];
console.log(UniqueArray(abc,def))