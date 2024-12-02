// Get inputs from the user
let num1 = parseFloat(prompt("Enter the first number:")); // First number
let num2 = parseFloat(prompt("Enter the second number:")); // Second number
let sign = prompt("Enter an operator (+, -, *, /, %):"); // Operator

// Initialize a variable to hold the result
let result;

// Perform the operation based on the sign
if (sign === "+") {
    result = num1 + num2;
} else if (sign === "-") {
    result = num1 - num2;
} else if (sign === "*") {
    result = num1 * num2;
} else if (sign === "/") {
    result = num1 / num2;
} else if (sign === "%") {
    result = num1 % num2;
} else {
    result = "Invalid operator!";
}

// Display the result in an alert
if (result !== "Invalid operator!") {
    alert(`${num1} ${sign} ${num2} = ${result}`);
} else {
    alert(result);
}


// Percentage Calculate


const totalMarks = 500;
let course1 = parseFloat(prompt("Enter marks for course 1:"));
let course2 = parseFloat(prompt("Enter marks for course 2:"));
let course3 = parseFloat(prompt("Enter marks for course 3:"));
let course4 = parseFloat(prompt("Enter marks for course 4:"));
let course5 = parseFloat(prompt("Enter marks for course 5:"));
let obtainedMarks = course1 + course2 + course3 + course4 + course5;
let percentage = (obtainedMarks * 100) / totalMarks;
alert(`Total Marks: ${totalMarks}\nObtained Marks: ${obtainedMarks}\nPercentage: ${percentage.toFixed(2)}%`);
