// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called 'name' with the string value of 'Dane'.
// We check if the value of 'name' is 'Mary'.
// Because the value of 'name' is 'Dane' (not 'Mary'), we console log the string 'How do you do?'. 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare an undefined variable called 'secret'.
// We declare a variable called 'code' with the integer value of '123'.
// We check to see if the value of 'code' is '123'. Because it is, we set the 'secret' variable to the string value of 'super'
// and we multiply the 'code' variable by 2.
// We check to see if the value of 'code' is greater than '250'. Because we multiplied 'code' by two in the last block, 'code' is now 
// equal to '246'. Since this is less than '250', we skip this block of code.
// We then console log the 'secret' variable which outputs the string 'super' to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable 'isStudent' with the boolean value of 'true'.
// We declare the variable 'age' with the integer value of '34'.
// We declare the variable 'zip' with the integer value of '55407'.
// We check to see if value of 'isStudent' is 'true' and if the value of 'zip' is greater than '80000'. If those conditions aren't
// met, we check to see if the value of 'isStudent' is 'false' or if 'age' is less than '30'. If those conditions aren't met,
// we check to see if the value of 'isStudent' is 'true'. If that condition isn't met, we console log the string 'How about the weather?'.
// Because 'isStudent' is 'true' and 'age' is greater than '30', we console log the string 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - The values of 'colorOne' and 'colorTwo' are reversed. 
// Should be - let colorOne = 'blue'; colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - Only colorOne is being set to 'purple'.
  // Should include - colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - This conditional is checking if temp is higher than 39 OR time is greater or equal to 4.
// Should be - if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - This conditional is checking to see if 'minAge' is LESS or equal to 'age'. This technically works, but it lacks logical clearity.
// More clear - if (age >= minAge)
//FIX - The if and else code blocks are reversed for this conditional.
// Should be - {console.log('enter');} else {console.log('no entry');}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

