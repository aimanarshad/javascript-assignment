let totalMarks = 500;
let obtainedMarks = 0;

// Get marks for each course from the user
for (let i = 1; i <= 5; i++) {
    obtainedMarks += parseFloat(prompt(`Enter marks for course ${i}:`));
}

// Calculate percentage
let percentage = (obtainedMarks * 100) / totalMarks;

// Determine the grade using switch case
let grade;
switch (true) {
    case (percentage >= 90):
        grade = "A+";
        break;
    case (percentage >= 75):
        grade = "A";
        break;
    case (percentage >= 60):
        grade = "B";
        break;
    case (percentage >= 45):
        grade = "C";
        break;
    case (percentage >= 30):
        grade = "D";
        break;
    default:
        grade = "F";
}

// Display the result in an alert
alert(`Your percentage is: ${percentage.toFixed(2)}%\nGrade: ${grade}`);



// //echo "# javascript-assignment" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/aimanarshad/javascript-assignment.git
// git push -u origin main