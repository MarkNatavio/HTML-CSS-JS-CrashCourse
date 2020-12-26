/*
 Java script is an object oriented programming language.
 It is used in website developing both in the front and back end.

 It used to be very simple but due to the community support, a lot of frameworks
 were added, making js as powerful as it is now.

 To execute this program we need an html file
*/

// Variables
let age = 0; // integers
let name = 'Mark'; // string
let boolean = True; // boolean
let strArray = ['hello', 'there']; // array

// Objects

let objectName = {
    age: 23,
    name: 'I have name',
    boolean: True,
    strArray: ['I am real', 'I am human']
};

// Functions
function functionName(parameter){ // function
    return parameter*parameter;
}

functionName(age); // function call

// Printing out values in the command line
console.log(age);
console.log(name);
console.log(boolean);
console.log(strArray);
console.log(strArray[0]);
console.log(objectName);
console.log(objectName.name);

