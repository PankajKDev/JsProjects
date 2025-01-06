//Get user input. Check if the user has a fever.

function checkFever(temp,unit){
if(typeof temp!=='number'){
    console.log("invalid input");
    return;
}

switch(unit.toLowerCase()){
    case "c":
    case "celsius":
        if(temp>=38){
            console.log("you have fever! \n Immediately consult a doctor")
        }
        else{
            console.log("You are healthy no worries!")
        }   
    break;

    case "f":
    case "fahrenheit":
        if(temp>=99){
            console.log("you have fever! \n Immediately consult a doctor")
        }
        else{
            console.log("You are healthy no worries!")
        }
        break;
        
        default:
            console.log("Enter a valid unit Celsius(c) or Fahrenheit(f)");
            break;
}
}


checkFever(100,"c");