
//QUESTION # 1

// let number = prompt ("Enter a number;");
// number = Number (number);


// if (number % 3 === 0){
//     console.log("Number is divisible by 3");
// }
// else {
//     console.log("Number is not divisible by 3");
// }


//QUESTION # 2


// let number = prompt ("Enter a number:");
// number = Number (number);

// if (number % 2 === 0){
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

//QUESTION # 3

// let age =prompt("Enter your age:");
// age = Number (age);
// if (age > 18) {
//     console.log("old enough");
// } else {
//     console.log("Too young");
// }

//QUESTION # 4

// let myName = "ShahabRajper";

// let userName = prompt("Enter your name:");

// if (userName === myName){
//     console.log("Hello," + userName + "! Nice to see you.");
// }

//QUESTION # 5


// let number = prompt("Enter a number.");
// number = Number (number);
// switch (number % 3){case 0:
// console.log("Number is divisible by 3");
// break;
// default:
//     console.log("Number is not divisible by 3");
// }


//QUESTION # 6

// let input = prompt("Enter a single character:");

// if (input.length === 1) {
//   let charCode = input.charCodeAt(0);

//   if (charCode >= 48 && charCode <= 57) {
//     console.log("Input is a number.");
//   } else if (charCode >= 65 && charCode <= 90) {
//     console.log("Input is an uppercase letter.");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("Input is a lowercase letter.");
//   } else {
//     console.log("Input is a special character or symbol.");
//   }
// } else {
//   console.log("Please enter a single character.");
// }


//QUESTION # 7

// Taking input from user
// let number1 = parseFloat(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, *, /, %):");
// let number2 = parseFloat(prompt("Enter second number:"));

// let result;

// // Using switch case to perform operations
// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         break;
//     case "-":
//         result = number1 - number2;
//         break;
//     case "*":
//         result = number1 * number2;
//         break;
//     case "/":
//         if (number2 !== 0) {
//             result = number1 / number2;
//         } else {
//             result = "Error! Division by zero.";
//         }
//         break;
//     case "%":
//         result = number1 % number2;
//         break;
//     default:
//         result = "Invalid operator!";
// }

// // Displaying the result
// alert("Result: " + result);


//QUESTION # 8

// let time = prompt("Enter time in 24-hour format (e.g., 1900 for 7PM):");
// time = parseInt(time); // Convert to number

// // Check and display greeting
// if (time >= 0000 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
// } else {
//     alert("Invalid time entered.");
// }


//QUESTION # 9

// let year = prompt("Enter a year in YYYY format:");
// year = parseInt(year); // Convert input to number

// // Check if it's a leap year
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(year + " is a Leap Year.");
// } else {
//     alert(year + " is not a Leap Year.");
// }


//QUESTION # 10


// // Step a: Store correct password
// var correctPassword = "mypassword123";

// // Step b: Ask user to enter their password
// var userPassword = prompt("Enter your password:");

// // Step c: Validate the input

// // i. Check if user entered a password or not
// if (!userPassword) {
//     alert("Please enter your password");
// }
// // ii. Compare with stored password
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

//QUESTION # 11

// var firstName = "Ali";

// var userName = prompt("Enter your first name");

// // Validate the input
// if (!userName) {
//     alert("Please enter your first name");
// } 
// // Compare with stored name
// else if (userName === firstName) {
//     alert("Welcome back, Ali");
// } 
// else {
//     alert("You are not Ali");
// }

//QUESTION # 12


// var greeting;

// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting); // Optional: to display the greeting


//QUESTION # 13

// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));

// // Compare the two numbers
// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } else {
//     alert("Both numbers are equal.");
// }

//QUESTION # 14

// // Take input from the user
// var number = parseFloat(prompt("Enter a number:"));

// // Check the number
// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else if (number === 0) {
//     alert("The number is zero.");
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }


//QUESTION # 15

// // Ask the user for the current hour
// var hour = parseInt(prompt("Enter the current hour (0 to 23):"));

// // Check and display the appropriate message
// if (hour >= 6 && hour <= 9) {
//     alert("Breakfast is served.");
// } else if (hour >= 11 && hour <= 13) {
//     alert("Time for lunch.");
// } else if (hour >= 17 && hour <= 20) {
//     alert("It's dinner time.");
// } else {
//     alert("Sorry, you'll have to wait, or go get a snack.");
// }

//QUESTION FOR CHECKING CORRECT PASSWORD

// var correctPassword = "12345";
// var enteredPassword = prompt("Enter your password");

// var isPasswordCorrect = (enteredPassword === correctPassword);

// if (isPasswordCorrect) {
//     alert("Access Granted");
// } else {
//     alert("Wrong Password");
// }


//QUESTION # 16

// // Step 1: Store value in a variable
// var myValue = true; // You can change this to try other types (e.g., 123, "hello", undefined)

// // Step 2: Use typeof to check the type of the value
// var valueType = typeof myValue;

// // Step 3: Display the type
// console.log("The type of the variable is: " + valueType);
// alert("The type of the variable is: " + valueType);


// // Step 1: Store value in a variable
// var myValue ="Shahab"; // You can change this to try other types (e.g., 123, "hello", undefined)

// // Step 2: Use typeof to check the type of the value
// var valueType = typeof myValue;

// // Step 3: Display the type
// console.log("The type of the variable is: " + valueType);
// alert("The type of the variable is: " + valueType);


// // Step 1: Store value in a variable
// var myValue = 123; // You can change this to try other types (e.g., 123, "hello", undefined)

// // Step 2: Use typeof to check the type of the value
// var valueType = typeof myValue;

// // Step 3: Display the type
// console.log("The type of the variable is: " + valueType);
// alert("The type of the variable is: " + valueType);

 

//QUESTION # 17

// // Ask user for a character
// var char = prompt("Enter a single character:");

// // Convert the character to lowercase (to handle both uppercase and lowercase inputs)
// char = char.toLowerCase();

// // Check if input is a single character
// if (char.length === 1) {
//     // Check if it is a vowel
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         alert("True - It is a vowel.");
//     } else {
//         alert("False - It is not a vowel.");
//     }
// } else {
//     alert("Please enter exactly one character.");
// }



//QUESTION # 18

// console.log(10 !== 8);  // Output: true

//QUESTION # 19

// var month = prompt("Enter the number of the month (1-12):");
// month = parseInt(month); // Convert string input to number

// switch (month) {
//     case 1:
//         alert("January");
//         break;
//     case 2:
//         alert("February");
//         break;
//     case 3:
//         alert("March");
//         break;
//     case 4:
//         alert("April");
//         break;
//     case 5:
//         alert("May");
//         break;
//     case 6:
//         alert("June");
//         break;
//     case 7:
//         alert("July");
//         break;
//     case 8:
//         alert("August");
//         break;
//     case 9:
//         alert("September");
//         break;
//     case 10:
//         alert("October");
//         break;
//     case 11:
//         alert("November");
//         break;
//     case 12:
//         alert("December");
//         break;
//     default:
//         alert("Invalid month");
// }

//QUESTION # 20

// let age = prompt("Enter your age:");
// let voteable = (age < 18) ? "Too young" : "Old enough";

// alert(voteable);
