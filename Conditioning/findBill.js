//Find the electricity bill of a person based on the unit. Prices of the first 80 units are
//1rs/unit, NEXT 80 units are 2rs/unit, NEXT units cost 4rs/unit.


//First solution

function findBill(bill){
if(bill>80){
    let firstSlab=bill-=80;
    if(bill>80){
        let secondSlab=bill-=80;
        let thirdSlab=bill*4;

        console.log(`total bill is ${firstSlab+secondSlab+thirdSlab}`);
    }
    else{
        let thirdSlab=bill*4;
        console.log(`total bill is ${firstSlab+thirdSlab}`);
    }
}    

}
findBill(200);



//Second improved solution
function findBill(bill){

    if(typeof bill!=='number' || bill<0){
        console.log("Enter a valid number");
        return;
    }


    else{
        let totalBill=0;
    if(bill<=80){
        totalBill=bill;
    }
    else if(totalBill<=160){
        totalBill=80+(bill-80)*2;
    }
    else{
        totalBill=80+80*2+(bill-160)*4;
    }
    console.log(`the total bill is ${totalBill}`);
return totalBill;
}
}

findBill(0);