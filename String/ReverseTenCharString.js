// A function to reverse a string if it is longer than 10 characters.

function ReverseString(inputString){
    if(inputString.length<=10){
        throw new Error("String should be greater than 10 characters")
    }
    let originalString=inputString.toLowerCase();
    let splitArray=originalString.split("",originalString.length);
    let reversedString=splitArray.reverse().join("");

    return reversedString;
}

console.log(ReverseString("onetwothreefourfive"))