let studentsArray1 =
[
    {id: 1, name: 'zura', gpa: 4},
    {id: 2, name: 'gela', gpa: 3.5},
    {id: 3, name: 'zaura', gpa: 2},
    {id: 4, name: 'jumberi', gpa: 1}
];
let studentsArray2 =
[
    {id: 1, name: 'gaiozi', gpa: 4},
    {id: 2, name: 'enveri', gpa: 2.5},
    {id: 3, name: 'grisha', gpa: 2.5},
    {id: 4, name: 'genadi', gpa: 3},
    {id: 5, name: 'tamazi', gpa: 1}
];

function getTopStudents(studentsArray1, studentsArray2)
{
    let allStudents = studentsArray1.concat(studentsArray2);
    allStudents.sort((a, b) => a.gpa - b.gpa);

    let result = [];


    for (let i=allStudents.length-5; i<allStudents.length; i++)
    {
        result.push(allStudents[i]);
    }

    let lastStudentIndex = allStudents.length - 5;

    for (let i=lastStudentIndex-1; allStudents[i].gpa == allStudents[lastStudentIndex].gpa; i--)
    {
        result.push(allStudents[i]);
    }

    
    result.sort((a, b) => a.gpa - b.gpa);

    return result;
}

let answer = getTopStudents(studentsArray1, studentsArray2);
alert (answer.map(c => c.name));
