let name = prompt("Enter your name:", "Ameen Alam");
let dobDate = prompt("Enter your birth date (day):", "24");
let dobMonth = prompt("Enter your birth month (MM):", "05");
let dobYear = prompt("Enter your birth year (YYYY):", "1999");

let dob = new Date(dobYear, dobMonth - 1, dobDate);
let now = new Date();

let timeOfDay = "";
let currentHour = now.getHours();

if (currentHour < 12) {
    timeOfDay = "Good Morning";
} else if (currentHour < 18) {
    timeOfDay = "Good Afternoon";
} else if (currentHour < 21) {
    timeOfDay = "Good Evening";
} else {
    timeOfDay = "Good Night";
}

console.log(`Hello ${name}, ${timeOfDay}`);

let dobPST = dob.toLocaleString("en-US", { timeZone: "Asia/Karachi" });
console.log(`Your DOB is: ${dobPST}`);

let ageInMilliseconds = now - dob;
let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
let years = Math.floor(ageInDays / 365);
let remainingDays = ageInDays % 365;
let months = Math.floor(remainingDays / 30);
let days = remainingDays % 30;

console.log(`You are ${years} years ${months} months ${days} days old`);

let nextBirthday = new Date(now.getFullYear(), dobMonth - 1, dobDate);
if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
}

let timeLeft = nextBirthday - now;
let timeLeftDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let timeLeftHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let timeLeftMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
let timeLeftSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

if (timeLeftDays === 0) {
    console.log(`Happy Birthday ${name}! Today is Your ${years + 1}th Birthday`);
} else {
    console.log(`How much time left in your next birthday? ${timeLeftDays} days ${timeLeftHours} hours ${timeLeftMinutes} minutes ${timeLeftSeconds} seconds`);
}
