// Write a JavaScript function that accepts a string
//  as a parameter and counts the number
//of vowels within the string.

function vowelCounter(inputString){
    const VOWELS="aeiou";
    let numberOfVowels=0;
    let splitArray=inputString.split("",inputString.length);
    for(let i=0;i<inputString.length;i++){
        if(VOWELS.includes(splitArray[i])){
            numberOfVowels+=1;
        }
    }
    return numberOfVowels;
}

console.log(vowelCounter("one piece"))