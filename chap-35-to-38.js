function capitalizeWords(inputValue) {
    return inputValue
        .split(' ')  // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Capitalize first letter of each word
        .join(' ');  // Join the words back together with a space
}

let inputValue = "cloUd naTive computinG";
inputValue = capitalizeWords(inputValue);

console.log(inputValue);
