// Given number is odd or even? Negative or positive?

function EvenOrOddChecker(num){
if(typeof num!=='number'){
    console.log("Invalid Input");
    return;
}


if(num%2==0){
    console.log(`${num} is an even number`)
}
else{
    console.log(`${num} is an odd number`)
}


if(num>0){
    console.log(`${num} is a positive number`)
}
else{
    console.log(`${num} is a negative number`)
}
}

EvenOrOddChecker(55);