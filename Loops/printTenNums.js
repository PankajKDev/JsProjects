//  Take user input and print the next 10 numbers.

function printTenNums(num){
    if(typeof num!=='number'){
        console.log("invalid input");
        return;
    }
    let inputNum=num;
for(let i=0;i<10;i++){
console.log(`${inputNum}`);
inputNum++;
}
}
printTenNums(11);