//Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// equilateral have three equal sides
// scalene have no equal sides
// isosceles have two equal sides

function TriangleType(sideOne,sideTwo,sideThree){

    if (
        typeof sideOne !== "number" ||
        typeof sideTwo !== "number" ||
        typeof sideThree !== "number" 
      ) {
        console.log("Invalid Input enter a valid side");
        return;
      }


    if(sideOne==sideTwo && sideTwo==sideThree){
        console.log("It is an equilateral triangle");
    }
    else if(sideOne!==sideTwo && sideTwo!==sideThree){
        console.log("It is a scalene triangle");
    }
    else{
        console.log("It is an isosceles triangle")
    }

}

TriangleType(55,57,56);