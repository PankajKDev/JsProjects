// Take user input and print the sum of the next 20 odd numbers.

function printSumOfNextTwentyOdd(num){
    if(typeof num!=='number'){
        console.log("invalid input");
        return;
    }
    let totalSum=0;
    let inputNum=num;
    for(let i=0;i<20;i++){
        if(inputNum%2==0){
            inputNum=inputNum+1;
        }
        inputNum+=2;
         totalSum=totalSum+inputNum;

    }
    console.log(totalSum);

}
printSumOfNextTwentyOdd(5);