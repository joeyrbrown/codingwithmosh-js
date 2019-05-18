// Writing this file as "Separation of Concerns" - separating behavior from presentation layer.

// Explain Why's and Hows in Comments
console.log('Hello World');

// Going for in ES6 use the let keyword for declaring variables.
let name = 'Joey';
console.log(name);

/* --- VARIABLES
If variables are NOT initialized with a value it will be 'undefined'.

Rules for Variables
    1. Cannot be a reserved word
    2. Should be meaningful names
    3. Cannot start with a number (1name)
    4. Cannot contain space for Hypen (-)
    5. Variables are case-sensitive

Modern Best-practices are variables on one line and initializing with single quotes ''.
*/

/* --- CONSTANTS ---
Values of constants can NOT change
If you don't need to reassign use const but if you need to reassign variable use let
-- Declaring and initializing variables

*/
const interestRate = 0.3;

console.log(interestRate);

/* --- Types: Primitives/Value Types and Reference Types ---

-- Primitive Types
--- Strings
--- Number
--- Boolean
--- undefined
--- null

-- Reference Types
--- Object
--- Array
--- Function

*/

let myName = 'Joey'; // String Literal
let age = 35; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined; 
let selectedField = null; // use null to clear the value of a variable

// in ES6 you have another type called Symbol

/* --- Dynamic Typing ---
Javascript is a Dynamic language. 
-- Static Typed a variable can NOT change type.
-- Dynamic Type a variable can change it's type at runtime.

'undefined' is both a Primitive type and can be a value. 

*/

/* --- Objects
Objects are reference types.



*/
let person = {}; // Object literal (empty object)
let dog = {
    name: 'Rex',
    age: 3
};
console.log(person);
console.log(dog);

// Dot Notation
dog.name = 'Belle';

console.log(dog);

// Bracket Notation
dog['age'] = 4;
console.log(dog);

/* --- Arrays ---
Arrays are data structures we use to display a list of values. 
They have a base 0 index.

Arrays are also objects and have special properties and methods.

*/
let selectedColor = []; // Arrary literal (empty array)
let selectedCars = ['Ford', 'Chevy', 'Dodge'];
console.log(selectedColor);
console.log(selectedCars);

console.log(selectedCars.length); // Array is also an object and has properties

/* --- Functions ---
Functions is a set of statements that perform a task or calculates an returns a value.


*/
// Performing a task
function greet(name) { // name is a parameter for the function
    console.log('Hello World ' + name);

} // Function declaritions don't require parenthesis

greet('Joey'); // Joey is an argument value being passed to greet function.

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2)); // Console log is a function call and square is a function call

