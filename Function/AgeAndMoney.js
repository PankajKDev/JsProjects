//A function will take argument age. If 
// age is between 18-60 return 
// true else false. Based on the result, 
// if true multiply the age with 1000 
//and print “MONEY EARNED: value” else print “NO MONEY”.

function AgeAndMoney(age){
    let MoneyEarned=0;
if(age>=18 && age<=60){
    MoneyEarned=age*1000;
    console.log(`MONEY EARNED:${MoneyEarned}`)
    return true;
}
else{
    console.log("NO MONEY");
    return false;
}
}
console.log(AgeAndMoney(60))
