// Delete the gender property from the person object

const Person={
    name:"John",
    age:42,
    gender:"M"
}

function genderDeleter(obj){
    if(obj.hasOwnProperty('gender')){
        delete obj.gender;
    }
}
genderDeleter(Person);
console.log(Person)