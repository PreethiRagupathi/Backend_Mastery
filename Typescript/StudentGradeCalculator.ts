interface Student {
    name: string;
    marks: number[];
}
let students: Student[] = [
    {
        name: "Preethi",
        marks: [85, 90, 78, 92]
    }
];
function calculateAverage(students: Student[]) {
    for (let student of students) {
        let totalMarks = 0;
        for (let mark of student.marks) {
            totalMarks += mark;
        }
        let average = totalMarks / student.marks.length;
        console.log(`Average marks of ${student.name} is: ${average}`);
        if (average >= 90) {
            console.log("Grade: A");
        } else if (average >= 80) {
            console.log("Grade: B");
        } else if (average >= 70) {
            console.log("Grade: C");
        } else {
            console.log("Grade: D");
        }
    }
}
calculateAverage(students);