// Write a function that reverses a number.

function ReverseNumber(num){
    if(typeof num!=='number'){
        throw new Error('Enter number as input');
    }
    let stringNum=num.toString();
    let reverseArray=stringNum.split("",stringNum.length).reverse()
    let joinedArray=reverseArray.join("");
    let reversedNum=Number(joinedArray);
    return reversedNum;
}
console.log(ReverseNumber(67))
