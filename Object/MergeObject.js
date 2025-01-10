// You have two objects. Merge them to object.

let introduction={name:"Pankaj",age:20};
let profession={job:"web developer",experience:0}

let mergedObj={...introduction,...profession}

console.log(mergedObj)