//In an array of objects, check how many objects 
// have a property named “pastSchool” and
//delete if the property is there

let Student=[
    {
        name:"John",
        age:20

    },
    {
        name:"Arthur",
        age:22,
        pastSchool:true

    },
    {
        name:"Dutch",
        age:30
    }
]

Student.forEach((item)=>{
    if(item.hasOwnProperty('pastSchool')){
        delete item.pastSchool;
    }
})

console.log(Student);