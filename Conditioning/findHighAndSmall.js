// Program to find the smallest and highest among 5 numbers.

function findHighAndLow(n1, n2, n3, n4, n5) {
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number" ||
    typeof n4 !== "number" ||
    typeof n5 !== "number"
  ) {
    console.log("Invalid Input");
    return;
  }
  //max logic
  let max = n1;
  if (n2 > n1) max = n2;
  if (n3 > n2) max = n3;
  if (n4 > n3) max = n4;
  if (n5 > n4) max = n5;

  console.log(max);
//min logic
let min=n1;
if(n2<n1)min=n2;
if(n3<n2)min=n3;
if(n4<n3)min=n4;
if(n5<n4)min=n5;

console.log(min)


}
findHighAndLow(1, 2, 3, 4, 5);
