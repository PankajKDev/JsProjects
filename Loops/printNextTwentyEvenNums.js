// Take user input and print the next 20 even numbers.

function NextEvenTwenty(num){
    if(typeof num!=='number'){
        console.log("invalid input");
        return;
    }
    let inputNum=num;

    for(let i=0;i<=20;i++){
        if(inputNum%2==1){
            inputNum=inputNum+1;
        }
        console.log(inputNum);
        inputNum+=2;
    }

}
NextEvenTwenty(2);