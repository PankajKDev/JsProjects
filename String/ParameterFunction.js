// Write a JavaScript program to pass a 
// 'JavaScript function' as a parameter.

function ParameterParentFunction(fn){
    console.log(fn(55,66))


}
function sum(num1,num2){
    return num1+num2;
}
ParameterParentFunction(sum)