// Take user input and print previous 10 odd numbers.


function PrevTenOdd(num){
    if(typeof num!=='number'){
        console.log("invalid input");
        return;
    }
    let inputNum=num;

    for(let i=0;i<=10;i++){
        
        if(inputNum%2==0){
            
            inputNum=inputNum-1;
        }
      
        console.log(inputNum);
        inputNum-=2;
    }
}
PrevTenOdd(5);