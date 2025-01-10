//TO-DO:
//You have an array of objecst. Each object has 5 props
// (name, rollNumber,mathMark, scienceMark, LanguageMark)
//. Find out who topped the class

function CalculateTotalMarks(student){
return student.mathMark+student.scienceMark+student.LanguageMark;
}

function findClassTopper(students){
    if(students.length===0)return null;
    const topper=students.reduce((currentTopper,student)=>{
        const currentStudentTotal=CalculateTotalMarks(student);
        const topperTotal=CalculateTotalMarks(currentTopper);

        return currentStudentTotal>topperTotal?student:currentTopper;
    })
return topper;
}

let ClassData= [
    {
      "name": "John",
      "rollNumber": 1,
      "mathMark": 85,
      "scienceMark": 90,
      "LanguageMark": 80
    },
    {
      "name": "Jane",
      "rollNumber": 2,
      "mathMark": 78,
      "scienceMark": 88,
      "LanguageMark": 92
    },
    {
      "name": "Mike",
      "rollNumber": 3,
      "mathMark": 92,
      "scienceMark": 85,
      "LanguageMark": 87
    },
    {
      "name": "Sara",
      "rollNumber": 4,
      "mathMark": 88,
      "scienceMark": 91,
      "LanguageMark": 84
    },
    {
      "name": "Tom",
      "rollNumber": 5,
      "mathMark": 75,
      "scienceMark": 80,
      "LanguageMark": 89
    }
  ]

  let CT=findClassTopper(ClassData);
  console.log(CT)