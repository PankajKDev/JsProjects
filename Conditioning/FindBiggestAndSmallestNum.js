// Take 5 integers. Find the biggest and smallest number.

function findSmallestAndBiggest(...num){
let smallNum=Math.min(...num);
let BigNum=Math.max(...num);
console.log(`The smallest Number is ${smallNum}`);
console.log(`The biggest Number is ${BigNum}`);
}
findSmallestAndBiggest(1,2,3,4,5);