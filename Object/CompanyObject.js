// Create a nested object called company with properties
//  name, address, and employees.
// The employee's property should be an array of objects,
//  each representing an employee
// with name and position properties. Write a function 
// that logs the names and positions of
// all employees

const Company={
    name:"Silver inc",
    address:"New York west avenue",
    employees:[
        {
            name:"Pankaj",
            position:"CEO"
        },
        {
            name:"John",
            position:"SDE"
        },
        {
            name:"Jane",
            position:"HR"
        }
    ]
}

function Print(Arr){
    Arr.forEach((item)=>{
        for(Keys in item){
            console.log(`${Keys} : ${item[Keys]}`)
        }
    })
}

Print(Company.employees)