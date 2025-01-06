// Take user inputs for 3 angles of a triangle. Validate if it is a valid triangle.

//note by me: The sum of all sides of a triangle is 180 so i will follow that principle

function triangleChecker(firstSide, secondSide, thirdSide) {
  if (
    typeof firstSide !== "number" ||
    typeof secondSide !== "number" ||
    typeof thirdSide !== "number"
  ) {
    console.log("Invalid Input");
    return;
  }
  let sumOfSides=firstSide+secondSide+thirdSide;
  if(sumOfSides==180){
    console.log("The entered input is a triangle");
  }
  else{
    console.log("The entered input is not a triangle");
  }
}

triangleChecker(45,45,90);
// taking angles as input
