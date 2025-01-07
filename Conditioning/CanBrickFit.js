//take three dimensions of a brick: height(a), width(b) and depth(c) and check if this brick
//can fit into a hole with the width(w) and height(h).

function CanBrickFit(brickHeight, brickWidth, holeHeight, holeWidth) {
    if (
        typeof brickHeight !== "number" ||
        typeof brickWidth !== "number" ||
        typeof holeHeight !== "number" ||
         typeof holeWidth !== "number"
      ) {
        console.log("Invalid Input");
        return;
      }

      if(brickHeight<=holeHeight && brickWidth<=holeWidth){
        console.log("The brick will fit");
      }
      else{
        console.log("the brick will not fit")
      }
}
CanBrickFit(22,33,22,33);