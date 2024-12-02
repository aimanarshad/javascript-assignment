let userInput = parseFloat(prompt("Enter a number with decimal point:", "3.4"));
let roundedNumber = Math.ceil(userInput);

let text = "This is my dummy text";
let sliceText = text.slice(0, roundedNumber);

let reversedText = "";
for (let i = sliceText.length - 1; i >= 0; i--) {
    reversedText += sliceText[i];
}

alert(reversedText);



// Second assignment


let inputValue = prompt("Enter a string:", "cloUd naTive computinG");

inputValue = inputValue
  .split(' ')  // Split the string by spaces
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize first letter of each word
  .join(' ');  // Join the words back into a single string

console.log(inputValue);
