var courses = [];
courses.push(prompt("Enter course 1:", "Computer"));
courses.push(prompt("Enter course 2:", "Math"));
courses.push(prompt("Enter course 3:", "English"));
courses.push(prompt("Enter course 4:", "Physics"));
courses.push(prompt("Enter course 5:", "Chemistry"));

alert("Your courses: " + courses);

courses[0] = prompt("Edit course 1:", courses[0]);
courses[1] = prompt("Edit course 2:", courses[1]);
courses[2] = prompt("Edit course 3:", courses[2]);
courses[3] = prompt("Edit course 4:", courses[3]);
courses[4] = prompt("Edit course 5:", courses[4]);

alert("Updated courses: " + courses);
