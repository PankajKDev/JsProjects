// A function will take 2 arguments. One is a sentence 
// and another is a word. Check if the
//word is present in the sentence. Return true/false.
//  Print “PRESENT” (or) “NOT PRESENT” based on that.

function WordChecker(word,sentence){
    if(sentence.includes(word)){
        return true;
    }
    else{
        return false;
    }
}

function PresentOrNotPresent(fn,word,sentence){
    if(fn(word,sentence)){
        console.log("Present")
    }
    else{
        console.log("Not Present")
    }

}
PresentOrNotPresent(WordChecker,"man","I am a man")
