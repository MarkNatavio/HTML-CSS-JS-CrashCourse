// Variables

/*
Variables are, case sensitive, should be named meaningfuly and descriptively, cannot start with a number, cannot contain a space or hyphen, and cannot be a reserved word

Reserved words in javascript: https://www.w3schools.com/js/js_reserved.asp

There are different ways to format a variable
• thisIsCamelProperCase
• this_is_snake_case

Both of these are acceptable.
Notice: Variables are either primitive or reference data types.

Primitive Data Types
======================
There are many different primitive data types. Unlike most lanaguages, JavaScript does not require us to specify the datatype
*/

let firstName = "John"; // String
let age = 27;  // Integer
let alive = true;  // Boolean (true or false)
let favoriteColor = null; // Null
let item; // Undefined
let likes = ["food", "animals", "warm weather"];  // List

let lastName = "Smith";

// Typically, we use a console.log(); command to display text in the console.
// The console can be accessed by inspcting the elements of a website and selectnig the console tab
// This is useful when debugging as it allows us to have a visual indication of what logic in the code is followed and when a breakpoint may take place
console.log(firstName);
console.log(age);
console.log(alive);
console.log(favoriteColor);
console.log(item);
console.log(likes);
for (let i = 0; i < likes.length; i++){
  console.log(likes[i])
}

// Concatenating strings
console.log(firstName + " " + lastName); // normal method

let fullName = `${firstName} ${lastName} is ${age} years old`; // advanced method
console.log(fullName)

/*
Doing Math with JavaScript
============================
It is of course necessary for JavaScript to be able to do math as we represent data in numbers.
*/

// Addition
let x = 1;
let y = 3;
console.log(`x = ${x}, y = ${y}, x+y = ${x+y}`);

x += y;
console.log(x);

// Subtaction
console.log(`x = ${x}, y = ${y}, y-x = ${y-x}`);

y -= x;
console.log(y);

// Multiplication
console.log(`x = ${x}, y = ${y}, x*y = ${x*y}`);

x *= y
console.log(x);

// Division
console.log(`age = ${age} age/2 = ${age/2}`);

age /= 2;
console.log(age);



/*
Reference data types
======================
Reference data types enables a program to indirectly access a particular data, such as a variable's value or a record, in the computer's memory or in some other storage device.

These include arrays and objects of classes

First lets look at arrays, please keep in mind that the first index in an array is index 0, not index 1

Ex.
let array_example = new Array(1,2,3,4);
console.log(array_example); // will return     [1,2,3,4]
                            // The indexes are  0 1 2 3
*/

// We can assign an array in 1 of two ways
// let array_name = new Array(...);
// let array_name = [...];

// These are pretty much the same, [] is just a shortcut for new Array(...);

let array1 = ['red','gree','blue'];
console.log(array1);
console.log(array1[0]); // and we can access a specific index value

const array2 = new Array(1,2,3,4,5,6);
console.log(array2);
console.log(array2[0]); 


// As we can see, both of the arrays above work the same.
// The only difference is that when declaring array1 we use a let while when declaring array2 we use a const

// let allows us to just delcare a variable
// const is a keyword that indicates that the variable is constant. That means that it is immutable and cannot change

// So if we do the following, everything should be fine
console.log("before " + array1);
array1 = 'new';
console.log("after " + array1);

// Here we are using const, which means that a value cannot be reassigned
array2[2] = 9; // This is mutating the array, so no error takes place
console.log(array2);

/*
// On the other hand
array2 = [0]; // This is reassigning the array, so this will give an error
console.log(array2);
*/


// Arrays have some special properties such as
console.log(array2.length); // gets the length of the array
array2.push(7); // adding a value to the end of the array
console.log(array2);
array2.pop(); // removing the last value of the array
console.log(array2);

// We can also save the last value by doing
let lastValue = array2.pop();
console.log(array2);
console.log(lastValue); // last value is saved to the lastValue variable


let firstValue = array2.shift(); // removing the first value of the array
console.log(array2);
console.log(firstValue); //  first value is saved to the firstValue variable

// Finding the index of a specific value
console.log(`The value of 4 in ${array2} is in index ${array2.indexOf(4)}`);


// What can be stored in an array? Any primitive data type, even another array
let myArray = ['red', 5, true, null, [1,2,3]];
console.log(myArray);

// An array inside of an array is called a nested array. To access the values within it we do the following
let parentArray = [[1,2,3,5],[6,7,8,9],[10,11,12,13]];
console.log(parentArray);
console.log(`the second value in the first array is ${parentArray[0][1]}`);


/* 
Object literals
=================
Objects contain key value pairs, it puts objects together. It serves like a hashmap/hashtable where we assign a value to a key

It is structured as such
const object_name = {
  key1 : value1,
  key2 : value2,
  key3 : value3
  ...
}
*/

// So for example, this
firstName = 'John';
lastName = 'Smith';
age = 20;

// Has the same information as this
const person = {
  person_firstName: 'John',
  person_lastName: 'Smith',
  person_age: 30
}

// Now, to acces the information inside we do
console.log(person['person_firstName']); // bracket notation
console.log(person.person_lastName); // dot notation

// Just like an array, we can have a nested object

const newPerson = {
  firstName_value: "Jane",
  lastName_value: "Doe",
  age_value: 27,
  pets: ['dog', 'cat'],
  address: {
    street: '123 Street',
    city: 'Woodside',
    state: 'New York',
    country: 'United States of America',
    planet: 'Earth'
  }
}
console.log(newPerson);
console.log(newPerson.pets[0]);
console.log(newPerson.address.city);

// to add an item we can do
newPerson.email = 'JDoe@madeupmail.com';

// to remove an item we can do
delete newPerson.age_value;

// Now we can do something called deconstructing, where we basically pull only certain items in an object

const { firstName_value, lastName_value } = newPerson;
console.log(firstName_value);
console.log(lastName_value);


// With these objects, we can format some data just like in JSON. Typically, when we recieve data from APIs and backend servers formated in JSON
const people = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 58,
    pets: ['cat'],
    address: {
      street: '123 Street',
      city: 'City Name',
      state: 'State Name'
    }
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 45,
    pets: ['dog'],
    address: {
      street: '321 Street',
      city: 'City Name 2',
      state: 'State Name 2'
    }
  }
];

// With this array we can prepare the data to be sent to a server by doing the following
const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

// to parse it back we can do
console.log(JSON.parse(peopleJSON));

/*
Functions
===========
Functions are pieces of code that we would like to reuse and not retype. This makes it specially useful for doing quick actions

To build a function we do the following
*/
function function_name() {
  console.log('Hello World');
}

// Calling the function
function_name(); // to make the function run, we call it by doing this

/*
Functions with parameters
===========================
Parameters are variables we pass through a function for it to use

Functions can also return a value in case we want to use it

Ex.
*/
function sum3(parameter1, parameter2, parameter3){
  console.log(`Parameter 1: ${parameter1} \nParameter 2: ${parameter2} \nParameter 3: ${parameter3}`);
  return parameter1 + parameter2 + parameter3;
}

console.log('Sum: '+sum3(124,5121,89765));

// Notice: keep in mind that the parameters passed must match the same data type as the parameters used in the function

// Another way to write a function is an arrow function

const addition = (num1, num2) => {
  return num1+num2
}

console.log(addition(1,2));

/* Another way to write this is like this
const addition = (num1, num2) => num1 + num2

If there is only one parameter we can remove the ()


Keep in mind that variables made outside of a function are global, meaning that they can be used anywhere.
However, variables made within a function are local, meaning that they can only be used within the function
*/

/*
Loops
=======
Loops automatically do a process a specific number of times for us.

Make sure to not run into an infinite loop by making sure that the loop's condition is met
*/

// While loop
console.log('while loop:');
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // this adds i by 1 everytime. If we do i-- we subtract i by 1 everytime
}

console.log('for loop:');
// For loop
for (let i = 10; i > 0; i--){
  console.log(i);
}

// How is this useful? Lets try to iterate through all the people and find their first names. instead of accessing them ourselves, a loop can do it for us.
for (let i = 0; i < people.length; i++){
  console.log(people[i].firstName);
}

// This can also be written like this
for (let person of people) {
  console.log(person.lastName);
}

// We can also use a forEach method to loop through an array. This is probably the safest option
people.forEach(function(person){
  console.log(person.pets);
});

// If we wanted to use an arrow function, it would be like this
people.forEach(person => console.log(person.age));


// We can also use the map method to get an array of all the items
const peopleNames = people.map(person => person.firstName);
console.log(peopleNames);


// We can use a filter to only select certain entries
const peopleUnder50 = people.filter(person => person.age < 50);
console.log(peopleUnder50);


/*
Conditions
============
Conditions are self explanatory. According to the rule you set, something will happen
*/

let z = 20;
if (z < 20) { // if this is true
  console.log('Less than 20'); // say that z is less than 20
} else if (z > 20) { // first condition is not true, so if this second condition is true
  console.log('More than 20'); // say that z is more than 20
} else {  // no other condition is true
  console.log('It is 20'); // say z is equal to 20
}

/*
We can also set the condition to be some fo the following
<     less than
<=    less than or equal to
>     more than
>=    more than or equal to
==    equal (1 == 1)√ or (1 == "1")√ or ("string" == "string")√
===   absolutely equal (1 == 1)√ but not (1 == "1")X
!=    not equal
!==   absolutely not equal 

these conditions will return a true or false depending on what is set
*/

// There can also be mutliple conditions for further specification
z = 25;
if (z < 20 || z > 30) { // || is an OR, meaning either the first or second condition must be met
  console.log('less than 20, more than 30');
} else if (z > 20 && z > 30) { //  && is an AND, meaning both the first and second condition must be met
  console.log('more than 20, more than 30');
} else {
  console.log('between 20 and 30');
}

// Another way to write this is by doing
let animal = 'cat';
const likesCats = animal == 'cat' ? true : false;
console.log(likesCats);


// Finally, we have switches which are like a lot of if checks but it is more efficient than using multiple if checks
switch (animal) {
  case 'dog':
    console.log('dog');
    break
  case 'lizard':
    console.log('lizard');
    break
  case 'fish':
    console.log('fish');
    break
  case 'bird':
    console.log('bird');
    break
  default:
    console.log(`${animal}`);
    break
}

