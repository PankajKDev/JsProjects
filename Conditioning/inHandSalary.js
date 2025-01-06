//Take the user's yearly salary. If salary is 5 LPA, tax is 0. If greater than 10 LPA, tax is
//15%, if greater than 14 LPA, tax is 30%. Find the inhand salary.

function taxCalculator(salary){
if(typeof salary!=='number'){
    console.log("Invalid Input");
    return;
}
if(salary<1000000){
    console.log(`Tax applied : $0\nIn hand Salary : $${salary}`);
}
else if(salary>1000000 && salary<1400000){
    let tax= (salary-1000000)*15/100;
    let inHandIncome=salary-tax;
    console.log(`Tax applied : $${tax}\nIn hand Salary : $${inHandIncome}`);
}
else if(salary>=1400000){
  //had to check with gpt but apparently tax is calculated in slabs first slab will be 10lakh to 14 lakh with 15% and the rest over 30%  
  let firstTaxSlab=(1400000-1000000)*15/100;
  let secondTaxSlab=(salary-1400000)*30/100;
  let tax=firstTaxSlab+secondTaxSlab;
  let inHandIncome=salary-tax;
    console.log(`Tax applied : $${tax}\nIn hand Salary : $${inHandIncome}`);
}
}
taxCalculator(10000000);