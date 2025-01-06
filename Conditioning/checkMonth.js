//Take user input. Check if the season is summer or winter based on the month. Consider
//Nov, Dec, Jan, Feb as winter and remaining as summer.

function checkMonth(inputMonth){
    inputMonth=inputMonth.toLowerCase();
 
        switch (inputMonth) {
            case "jan":
            case "january":
            case "feb":
            case "february":
            case "nov":
            case "november":       
            case "dec":
            case "december":        
                console.log(`${inputMonth} is a winter month`);
                break;
            
            
            case "mar":
            case "march":
            case "apr":
            case "april":
            case "may":
            case "jun":
            case "june":
            case "jul":
            case "july":
            case "aug":
            case "august":
            case "sep":
            case "september":
            case "oct":
            case "october":                           
                console.log(`${inputMonth} is a summer month`);
                break;
            default:
                console.log(`${inputMonth} is invalid month \nenter in format of jan,feb,mar`);
        }
    
    

}
checkMonth("dan");