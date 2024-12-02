var courses = [];

for (let i = 0; i < 5; i++) {
    courses.push(prompt(`Enter course ${i + 1}:`, `Course ${i + 1}`));
}

alert("Your courses: " + courses);

for (let i = 0; i < courses.length; i++) {
    courses[i] = prompt(`Edit course ${i + 1}:`, courses[i]);
}

alert("Updated courses: " + courses);
