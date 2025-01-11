//  Create an object called a calculator with properties  
//num1 and num2. Add a method
//called add that returns the sum of these two numbers

class MathSum{
    constructor(numOne,numTwo){
        this.numOne=numOne;
        this.numTwo=numTwo;
    }
    sum(){
        return this.numOne+this.numTwo;
    }
}

const newSum=new MathSum(55,24);
console.log(newSum.sum());