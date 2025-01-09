// A function which will take 5 arguments. All of them are 
// 1 letter strings. It will return them as a word.

function CharacterJoiner(char1,char2,char3,char4,char5){
    const charValidation=(char)=>{
        if(typeof char!=='string' || char.length!==1){
            throw new Error('Input must be only one character and only string')
        }
        return char;

    }

    let stringArray=[char1,char2,char3,char4,char5].map(charValidation);
    let joinedArray=stringArray.join("");
    return joinedArray;
}

console.log(CharacterJoiner("a","b","c","d","e"))