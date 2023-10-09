/**
 * A loop:
 * is a programming structure that allows you to execute a block of code repeatedly until a certain condition is met.
 *  
 * JavaScript supports four types of loops:
 * For loop.: A for loop executes a block of code a specified number of times.
 * While loop.: A while loop executes a block of code as long as a certain condition is true.
 * Do...while loop.: A do...while loop executes a block of code at least once, and then checks the condition. If the condition is true, the loop continues to execute.
 * For...of loop.: A for...of loop loops through the values of an iterable object.
 */ 
 // Here is an example of a for loop:
 //      start/ stop/   update
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// This loop will itterate over an array forwards
let nums = [1, 2, 3]
for(let i = 0; i < nums.length; i++){
  console.log(nums[i])
}
// This loop will itterate over an array backwards
for(let i = nums.length - 1; i > 0; i--){
  console.log(nums[i])
}
//This loop will print the numbers 0 through 9 to the console.
// Here is an example of a while loop:
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
//This loop will also print the numbers 0 through 9 to the console.
// Here is an example of a do...while loop:
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
//This loop will also print the numbers 0 through 9 to the console.
// Here is an example of a for...of loop:
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}
// This loop will print the keys of an object
// Here is an example of a for...in loop
const obj = {
  name: "John Doe",
  age: 30
};

for (const key in obj) {
  console.log(key);
} 