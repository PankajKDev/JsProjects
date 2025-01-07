// Take user input and print the sum of the next 20 odd numbers.

function printSumOfNextTwentyOdd(num){
    if(typeof num!=='number'){
        console.log("invalid input");
        return;
    }
  let totalSum=0;
  let inputNum=num%2==0?num+1:num;
  for(let i=0;i<20;i++){
    totalSum=totalSum+inputNum;
    console.log(inputNum);
    inputNum+=2;

  }
console.log(totalSum)
}
printSumOfNextTwentyOdd(5);