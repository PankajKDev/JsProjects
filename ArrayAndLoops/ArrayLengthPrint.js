// Take an array of strings (example: “RAM”, “SHAYAM”) and print a 
//new array having only names whose length is below 5.

function ArrayPrintWithFiveLength(arrString){
    let newArray=[];
    for(let i=0;i<arrString.length;i++){
        if(arrString[i].length==5){
            newArray.push(arrString[i])
        }
    }
    return newArray;


}
let xyz=["Ram","Shyam","Yoshikage","Knull","abcde","fghij"];
console.log(ArrayPrintWithFiveLength(xyz));
