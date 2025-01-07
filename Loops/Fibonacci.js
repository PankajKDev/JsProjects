// Fibonacci series.

function fibonacci(n) {
let n1=0,n2=1,fiboNum;
for(let i=1;i<n;i++){
fiboNum=n1+n2;
console.log(fiboNum)
n1=n2;
n2=fiboNum;
}

}
fibonacci(10)