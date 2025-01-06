//Take the buy price and sell price of an item. Find out if it was a profile or loss.

//using dollar symbol because i cant find rupee one
function profitChecker(buyPrice,sellPrice){
    if(typeof buyPrice!=='number' || typeof sellPrice!=='number'){
        console.log("Invalid input");
        return;
    }
    let evaluatedResult=sellPrice - buyPrice;
    if(evaluatedResult>0){
        console.log(`You earned profit of $${evaluatedResult}`);
    }
    else if(evaluatedResult==0){
        console.log("It was neither profit nor loss")
    }
    else{
        console.log(`you faced loss of $${evaluatedResult}`)
    }

}

profitChecker(65,55);