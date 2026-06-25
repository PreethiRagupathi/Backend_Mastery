let student = [
  { id: 1, name: "Preethi", dept: "CSBS" },
  { id: 2, name: "Nithya", dept: "ECE" },
  { id: 3, name: "Deepika", dept: "CSE" },
];
let college = {
  name: "KSRCT",
  totdept: 14,
  totfac: 280,
};
// Traditional for-loop
console.log("Traditional for-loop");
for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}
/* Output:
Traditional for-loop
{ id: 1, name: 'Preethi', dept: 'CSBS' }
{ id: 2, name: 'Nithya', dept: 'ECE' }
{ id: 3, name: 'Deepika', dept: 'CSE' }
*/
// For-of loop
console.log("For-of loop");
for (const std of student) {
  console.log(std);
}
/* Output:
For-of loop
{ id: 1, name: 'Preethi', dept: 'CSBS' }
{ id: 2, name: 'Nithya', dept: 'ECE' }
{ id: 3, name: 'Deepika', dept: 'CSE' }
*/
// ForEach loop
console.log("ForEach loop");
student.forEach((std) => {
  console.log(std);
});
/* Output:
ForEach loop
{ id: 1, name: 'Preethi', dept: 'CSBS' }
{ id: 2, name: 'Nithya', dept: 'ECE' }
{ id: 3, name: 'Deepika', dept: 'CSE' }
*/
// For-in loop (Array)
console.log("For-in loop (Array)");
for (const s in student) {
  console.log(student[s]);
}
/* Output:
For-in loop (Array)
{ id: 1, name: 'Preethi', dept: 'CSBS' }
{ id: 2, name: 'Nithya', dept: 'ECE' }
{ id: 3, name: 'Deepika', dept: 'CSE' }
*/
// For-in loop (Object)
console.log("For-in loop (Object)");
for (const clg in college) {
  console.log(college[clg]);
}
/* Output:
For-in loop (Object)
KSRCT
14
280
*/
console.log("For-in loop (Object - Key & Value)");
for (const clg in college) {
  console.log(clg, ":", college[clg]);
}
/* Output:
For-in loop (Object - Key & Value)
name : KSRCT
totdept : 14
totfac : 280
*/
let fruits = ["Apple", "Mango", "Orange", "Grapes"];
for (const fruit of fruits) {
  console.log(fruit);
}
/* Output:
Apple
Mango
Orange
Grapes
*/
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
/* Output:
0 Apple
1 Mango
2 Orange
3 Grapes
*/
/*
for        -> Need index or full control
for...of   -> Need values from an array
for...in   -> Need keys from an object
forEach()  -> Perform an action on every array element
*/
// Add a new element
student.push({
  id: 4,
  name: "Ram",
  dept: "EEE",
});
// Update the department for id = 2
let std = student.find((s) => s.id === 2);
if (std) {
  std.dept = "AIDS";
}
console.log(student);
/* Output:
[
  { id: 1, name: 'Preethi', dept: 'CSBS' },
  { id: 2, name: 'Nithya', dept: 'AIDS' },
  { id: 3, name: 'Deepika', dept: 'CSE' },
  { id: 4, name: 'Ram', dept: 'EEE' }
]
*/
// Delete the student with id = 1
student = student.filter((s) => s.id !== 1);
console.log(student);
/* Output:
[
  { id: 2, name: 'Nithya', dept: 'AIDS' },
  { id: 3, name: 'Deepika', dept: 'CSE' },
  { id: 4, name: 'Ram', dept: 'EEE' }
]
*/
const prompt = require("prompt-sync")();
console.log(
  "1.Finding the nature(Positive,Negative or Zero)\n2.Finding even or odd\n3.Voting Eligibility\n4.Largest of two numbers\n5.Student Grade",
);
let num = Number(prompt("Enter your choice: "));
switch (num) {
  case 1:
    let n = Number(prompt("Enter the number to find its nature: "));
    if (n < 0) {
      console.log("Negative Number");
    } else if (n == 0) {
      console.log("Zero");
    } else {
      console.log("Positive Number");
    }
    break;
  case 2:
    let eo = Number(prompt("Enter the number to find odd or even: "));
    if (eo % 2 == 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
    break;
  case 3:
    let age = Number(prompt("Enter the age: "));
    if (age < 18) {
      console.log("Not Eligible");
    } else {
      console.log("Eligible");
    }
    break;
  case 4:
    let num1 = Number(prompt("Enter the 1st number: "));
    let num2 = Number(prompt("Enter the 2nd number: "));
    if (num1 > num2) {
      console.log("Num 1 is greater");
    } else if (num2 > num1) {
      console.log("Num 2 is greater");
    } else {
      console.log("Both are equal");
    }
    break;
  case 5:
    let mark = Number(prompt("Enter the mark: "));
    if (mark >= 90) {
      console.log("Grade A");
    } else if (mark >= 75) {
      console.log("Grade B");
    } else if (mark >= 50) {
      console.log("Grade C");
    } else {
      console.log("Fail");
    }
    break;
  default:
    console.log("Invalid Choice");
}
/* Output:
1.Finding the nature(Positive,Negative or Zero)
2.Finding even or odd
3.Voting Eligibility
4.Largest of two numbers
5.Student Grade

Enter your choice: 5
Enter the mark: 96
Grade A
*/
