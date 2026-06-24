/*Mini Project Task: Student Management System

Create a Student Management System using JavaScript.

Requirements
Create an array of student objects containing:
Student ID
Name
Marks
Implement a function to add a new student.
Implement a function to display all student details.
Implement a function to find a student using their ID.
Implement a function to display students who scored more than 80 marks.
Create a new array containing only the student names.
Calculate and display the average marks of all students.
Implement a function to delete a student using their ID.
Display the total number of students currently in the system.
Sort the students based on their marks in descending order.
Bonus Challenge

Create a menu-driven program where the user can choose options such as:

Add Student
View Students
Search Student
Delete Student
View Top Scorers
Exit
*/
let student = [
  { id: 1, name: "Preethi", marks: 85 },
  { id: 2, name: "Nithya", marks: 92 },
  { id: 3, name: "Deepika", marks: 78 },
];
function add(id, name, marks) {
  console.log(id + " added to the array");
  student.push({
    id: id,
    name: name,
    marks: marks,
  });
}
function display() {
  console.log("Displaying all the details");
  student.forEach((std) => {
    console.log(std);
  });
}
function findstudent(stdid) {
  let d = student.find((std) => std.id === stdid);
  if (d) console.log("Name for the id " + stdid + " is " + d.name);
  else console.log("Student not found");
}
function above8ty() {
  console.log("The student above 80 ");
  console.log(student.filter((std) => std.marks >= 80));
}
function namearray() {
  console.log("Storing names in the seperate array");
  const newarray = student.map((std) => std.name);
  console.log(newarray);
}

add(4, "Mithuna", 99);
display();
findstudent(1);
above8ty();
namearray();
