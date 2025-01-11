// Create a function that takes an object and
//  return all the property name as a string.
//{name: “Sandip”, age: 28} => “name age”

const Intro={
    name:"Pankaj",
    age:20,
}

function ObjPropToString(obj){
    let Props=[];
    for(Keys in obj){
        Props.push(Keys)
    }
    return Props.join()
}

console.log(ObjPropToString(Intro))