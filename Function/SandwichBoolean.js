//A function to take a string and return “T” or “F” if it is a 
// sandwich string. If string length isgreater than 3, it will return “W”

function SandwichBoolean(inputString){
    const VOWELS="aeiou";
    const CONSONANTS="bcdfghjklmnpqrstvwxyz";

    if(inputString.length==3){
        let originalString=inputString.toLowerCase();
        let splitArray=originalString.split("",originalString.length)
        let firstChar=CONSONANTS.includes(splitArray[0]);
        let secondChar=VOWELS.includes(splitArray[1]);
        let thirdChar=CONSONANTS.includes(splitArray[2]);
        if(firstChar && secondChar && thirdChar){
            return "T";
        }
        else{
            return "F";
        }
    }
    else if(inputString.length>3){
        return "w"
    }

}

console.log(SandwichBoolean("mxnz"));