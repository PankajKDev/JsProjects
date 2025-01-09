// Take a string (“I AM RAM DATTA”) in a function argument. Return 
//a string with “-”replacing the white spaces. (“I-AM-RAM-DATTA”).

function HyphenToSpace(inputText){
    let text=inputText;
    let splitArray=inputText.split("",inputText.length)
    for(let i=0;i<splitArray.length;i++){
        if(splitArray[i]===" "){
            splitArray[i]="-";
        }
    }
    let newText=splitArray.join("");
    console.log(newText)
  
}
HyphenToSpace("ppp p p")