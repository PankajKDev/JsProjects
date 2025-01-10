// Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string.

function ReturnLongWord(inputString){
    let splitArray=inputString.split(" ",inputString.length);
    let biggestWord;
    for(let i=1;i<splitArray.length;i++){
        biggestWord=splitArray[0];
        if(splitArray[i].length>splitArray[i-1].length){
            biggestWord=splitArray[i]
        }

    }
 return biggestWord;

}


console.log(ReturnLongWord("I am a web developer"))
