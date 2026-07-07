/*
Question:
Write a JavaScript program to generate a student report card.
*/

// Object containing student details
// Data Types: string, number
// Variables: student, name, mark1, mark2, mark3
let student = {
  name: "Preethi",
  mark1: 89,
  mark2: 87,
  mark3: 92,
};

// Function Definition
// Parameters: name, mark1, mark2, mark3
function generateReport(name, mark1, mark2, mark3) {
  // Function Definition
  // Parameters: mark1, mark2, mark3
  function calculateTotal(mark1, mark2, mark3) {
    // Operators: +
    // Expression: mark1 + mark2 + mark3
    // Return Value
    return mark1 + mark2 + mark3;
  }

  // Function Definition
  // Parameter: total
  function calculateAverage(total) {
    // Operator: /
    // Expression: total / 3
    // Return Value
    return total / 3;
  }

  // Function Definition
  // Parameter: average
  function getGrade(average) {
    // Operators: >, >=
    // Expressions used in conditions
    if (average > 90) {
      return "A";
    } else if (average >= 75) {
      return "B";
    } else if (average >= 50) {
      return "C";
    } else {
      return "Fail";
    }
  }

  // Variables
  let total = calculateTotal(mark1, mark2, mark3);

  // Variable
  let average = calculateAverage(total);

  // Variable
  let grade = getGrade(average);

  // Scope:
  // total, average, and grade are accessible only inside generateReport()

  console.log("Student Name: " + name);
  console.log("Mark Total: " + total);
  console.log("Average: " + average);
  console.log("Grade: " + grade);
}

// Function Call
// Arguments: student.name, student.mark1, student.mark2, student.mark3
generateReport(student.name, student.mark1, student.mark2, student.mark3);
