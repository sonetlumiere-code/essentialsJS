/* JS ESSENTIALS */


//in-line comment

/* this is a  
multi-line
comment */


/* VARIABLES ------------------------------------------------------------------------------------------------------------------- */

var myName = "Lucas";        //functional or globed scoped
let myAge = 31;              //block scoped
const siete = 7;             //block scoped + cannot get new value




/* DATA TYPES ------------------------------------------------------------------------------------------------------------------- */

// Primitives (immutable data types)
let dataString = "This is a string";
let dataNumber = 20;
let dataBigInt = 9007199254740991n || BigInt(9007199254740991);
let dataBoolean = true || false;
let dataUndefined = undefined;
let dataSymbol = Symbol('foo');
let dataNull = null;

// Non-primitives (mutable data types)
let dataObject = {key: 'value', method(){"Hello"}};
let dataArray = [1, 2, 3];

// Typeof operator
typeof dataString;  	      //string
typeof dataNumber;		      //number
typeof dataBigInt;          //bigint
typeof dataBoolean;		      //boolean
typeof dataUndefined;	      //undefined
typeof dataSymbol;          //symbol
typeof dataNull;		        //object
typeof dataObject;		      //object
typeof dataArray;           //object

// Type coercion
const numero1 = 20;               //type number
const numero2 = '40';             //type string
console.log(numero1 + numero2);   //60




/* OPERATORS  -------------------------------------------------------------------------------------------------------------------  */
/*

// Basic Operators
+     — Addition
-     — Subtraction
*     — Multiplication
/     — Division
%     — Remainder 
++    — Increment numbers
--    — Decrement numbers
=     — Asignment operator
(...) — Grouping operator: operations within brackets are execute earlier than those outside

// Comparison Operators
==    — Equal to
===   — Equal value and equal type
!=    — Not equal
!==   — Not equal value or not equal type
>     — Greater than
<     — Less than
>=    — Greater than or equal to
<=    — Less than or equal to
?     — Ternary operator

// Logical Operators
&&    — Logical and
||    — Logical or
!     — Logical not

// Bitwise Operators
&     — AND 	 					            // 5 & 1    (0101 & 0001)	1 (1)
|     — OR 	 						            // 5 | 1    (0101 | 0001)	5 (101)
~     — NOT 			 			            // ~ 5      (~0101)	      10 (1010)
^     — XOR 	 					            // 5 ^ 1    (0101 ^ 0001)	4 (100)
<<    — Left shift 	 			          // 5 << 1   (0101 << 1)	  10 (1010)
>>    — Right shift 				        // 5 >> 1   (0101 >> 1)	  2 (10)
>>>   — Zero fill right shift 	    // 5 >>> 1  (0101 >>> 1)	2 (10)

*/


// Incrementing and Decrementing numbers
let myVar = 1;
myVar++;
myVar--;


// Compound Assignment with Augmented
var a = 3;
var b = 17;
var c = 12;
var d = 25;
a += 12; // Output: 15
b -= 5;  // Output: 12
c *= 2;  // Output: 24
d /= 5;  // Output: 5


// Strict Equality Comparison
console.log(3 == '3');      //true
console.log(3 === '3');     //false (does not convert types of data)
console.log(2 != '2');      //false
console.log(2 !== '2');     //true (does not convert types of data)


// Nullish coalescing operator
const valor1 = 0 || 'default';                  // output: 'default'
const valor2 = '' || 1000;                      // output: '1000'
const valor3 = undefined || 'default';          // output: 'default'
const valor4 = null || 'default';               // output: 'default'

const valor5 = 0 ?? 'default';                  // output: 0
const valor6 = '' ?? 1000;                      // output: ''
const valor7 = undefined ?? 'default';          // output: default
const valor8 = null ?? 'default';               // output: null




/* CONDITIONALS  -------------------------------------------------------------------------------------------------------------------  */

// if else statements
let a = 1;
let b = 2;
if (a < b) {
  console.log('is true!');
} else {
  console.log('is false!');
}


// Multi if else statements
let val = 8;
if (val > 10) {
  console.log("Greater than 10");
} else if (val < 5) {
  console.log("Smaller than 5");
} else {
  console.log("Between 5 and 10");
}


// Ternary operators (same as if else)
let uno = 1;
let dos = 2;
const isEqual = uno === dos ? true : false;
console.log(isEqual);   //false


// Switch statements
function switchCase(n) {
  switch(n) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
    case 5:
      answer = "delta";
      break;
    default:
      answer = "default";
      break;
  }
  return answer;
}
console.log(switchCase(4));		//Outputs 'delta'




/* LOOPS  -------------------------------------------------------------------------------------------------------------------  */

// While loop
let i = 0;
while (i < 10) {
  console.log(i);		// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  i++;
}


// Do while loop
let j = 0;
do {
  console.log(j);		// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  j++;
} while (j < 10)


// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);		// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}


// For in / for of
const arr = [3, 5, 7, 'foo'];

for (let item of arr) {
  console.log(item); 		// Output: 3, 5, 7, 'foo'
}

for (let index in arr) {
  console.log(index); 		// Output: '0', '1', '2', '3'
}

let object = {
  age: 20,
  city: 'Buenos Aires'
};

for(let key in object){
  console.log(key);     // Output: 'age', 'city'
}


// Break / continue statements
for(i = 0; i < 10; i++){
  if(i == 3){
    continue;
  }
  if(i == 7){
    break;
  }
  console.log(i);  // Output: 1, 2, 4, 5, 6
}




/* FUNCTIONS -------------------------------------------------------------------------------------------------------------------  */

// Function declaration (call the function before declaration is possible (hoisting))
sum(2, 3);   // Outputs 5

function sum(a, b) {
  return a + b;
}


// Function expression (call the function before declaration is not possible)
f('word');  // Error

const f = function(w){
  return w
}


// Arrow functions
const f1 = () => {};						          //Zero parameters
const f2 = paramOne => {};				        //One parameter
const f3 = (paramOne, paramTwo) => {};	  //Two or more parameters
const double = number => number * 2;      //Single-line block


// Arrow functions and 'this'
const myObject2 = {
  myMethod2: function(){
    console.log(this);      // logs myObject2
  }
}
myObject2.myMethod2();

const myObject = {
  myMethod: () => {
    console.log(this);      // logs Window object
  }
};
myObject.myMethod(); //Arrow functions do not bind their own 'this', instead, they inherit the one from the parent scope (lexical scoping).


// Scope
let outerWear = "T-Shirt";        //Global scope
function myOutfit() {
  let outerWear = "sweater";      //Local scope
  return outerWear;
}
console.log(myOutfit());          // Outputs "sweater"
console.log(outerWear);           // Outputs "T-Shirt"


// Default parameters in functions
function increment(arg1, arg2 = 1) {
  return arg1 + arg2;
};
console.log(increment(5));      // Outputs 6
console.log(increment(5, 2));   // Outputs 7


// Spread Operator and Rest Parameters
function sum(...args){
  console.log('You have passed ' + args.length + ' arguments'); // You have passed 6 arguments
  return args.reduce((a, b) => a + b);		
}
var numbers = [1, 2, 3];
console.log(sum(...numbers, 4, 5, 6));  // Output: 21


// Closures
function getCounter(){
  let counter = 0;
  return function(){
    return counter++;
  }
}
let contador = getCounter();
console.log(contador());  // 0
console.log(contador());  // 1
console.log(contador());  // 2
console.log(contador());  // 3


// Callbacks
function callMe() {                             // callback function
  console.log('I am callback function');
}
function greet(name, callback) {
  console.log(`Hi ${name}`);
  callback();
}
greet('Peter', callMe);                         // passing function as an argument


// Generator
function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);	// expected output: 10
console.log(gen.next().value);	// expected output: 20


// Currying
const suma = (a, b, c) => a + b + c;
const parcial = a => b => c => suma(a, b, c);
console.log(parcial(1)(2)(3));  // 6


// Composition
const getName = info => ({
  showName() {
    console.log(`Nombre: ${info.name}`)
  }
})
function User(name, age){
  let info = {
    name,
    age
  }
  return Object.assign(info, getName(info))
}
let user = User('Lucas', 30);
user.showName();


// Explicit Binding
function persona(item1, item2){
  console.log(`Mi nombre es ${this.nombre} y escucho ${item1} y ${item2}`);
}
const info = {
  nombre: 'Luna'
}
const musica = ['Reggae', 'Rock'];

persona.call(info, musica[0], musica[1]);
persona.apply(info, musica);
const nuevaFn = persona.bind(info, musica[0], musica[1]);
nuevaFn();




/* ARRAYS ------------------------------------------------------------------------------------------------------------------- */

let dogs = ['Bulldog', 'Beagle', 'Labrador'];
const numbers = [2, 5, 8, 7, 1, 6, 10, 3, 4, 9];

// Nested Arrays
let nestedArray = [[10, 20], [30, 40], ['strings', 60]];

// Length property
dogs.length;                            // Output: 3

// Accessing Array elements
console.log(numbers[3]);                // Output: 7
console.log(nestedArray[1][0]);         // Output: 30

// Modify Array data with indexes
nestedArray[2][0] = 45;                 // nestedArray now equals [[10, 20], [30, 40], [45, 60]]

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);				              // Output: [1, 2, 3, 4, 5, 6]

// Destructuring assignment
const array = [1, 2, 3, 4, 5, 6];
const [w, x, , ...z] = array;           // ignore index 2
console.log(w, x, z);                   // Outputs 1, 2, [4, 5, 6]

// Destructuring assignment to switching places in arrays
let a = 8, b = 6;
[a, b] = [b, a];                        // a = 6, b = 8

// Destructuring assignment with default values
let [named = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(named);    // Julius (from array)
console.log(surname);  // Anonymous (default used)

// Deep clone arrays
let array1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let array2 = [...array1];                           //Using Spread Operator
let array3 = array1.slice();                        //Using slice() method
let array4 = JSON.parse(JSON.stringify(array1));    //Using JSON.parse and JSON.stringify


// Array Methods
let myArray = Array(7);								            // Output: [empty x 7]. Creates an array with 7 empty slots.
let arrayOf = Array.of(7, 8, 9);					        // Output: [7, 8, 9]. Creates an array.
let arrayFrom = Array.from('foo');					      // Output: ["f", "o", "o"].
let penultimateElement = dogs.at(-2);             // Output: 'Beagle'.
let animals = dogs.concat('cats', 'birds'); 		  // Output: ["Bulldog", "Beagle", "Pug", "Boxer", "Labrador", "cats", "birds"]
let every = numbers.every(n => n < 11);				    // Outputs: true. All elements in the array pass the test. Returns a boolean value.
let filtered = numbers.filter(x => x > 3);     		// Output: [5, 8, 7, 6, 10, 4, 9]
let find = numbers.find(n => n > 5);				      // Output: 8. Returns the value of the first element in the array that passes the test.
let findIndex = numbers.findIndex(n => n > 5);    // Output: 2. Returns the index of the first element in the array that passes the test.
dogs.indexOf('Beagle');  			    			          // Output: 1
dogs.includes('Labrador');							          // Output: true. Returns a boolean value.
let joined = dogs.join(' * ');                    // Output: "Bulldog * Beagle * Labrador"
let maped = numbers.map(x => x * 2);    			    // Output: [4, 10, 16, 14, 2, 12, 20, 6, 8, 18]
let popped = dogs.pop();                          // Remove last element. dogs = ['Bulldog', 'Beagle']. popped = 'Labrador'
dogs.push('Chihuahua');                 			    // Add new element to the end
let reduced = numbers.reduce((x, y) => x + y);    // Output: 55
dogs.reverse();                         			    // Reverse unicode sorting
let shifted = dogs.shift();                       // Remove first element. dogs = ['Beagle', 'Labrador']. shifted = 'Bulldog'
let sliced = dogs.slice(1, 3);              		  // Pulls a copy of a portion of an array into a new array
let sameDogs = dogs.slice();                      // Deep copy
let some = numbers.some(n => n > 9);				      // Output: true. At least one element in the array passes the test. Returns a boolean value.
dogs.sort();                            			    // Output: ["Beagle", "Bulldog", "Labrador"]. Unicode sorting.
numbers.sort((a, b) => a - b);   					        // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Numeric sort.
numbers.sort((a, b) => b - a);   					        // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]. Numeric descending sort.
numbers.sort((a, b) => 0.5 - Math.random());			// Random order sort.
dogs.splice(2, 0, 'Pug', 'Boxer');					      // Modify Array (where, how many to remove, add elements).
dogs.toString();                       				    // Convert to string, Output: "Bulldog,Beagle,Labrador".
dogs.unshift('Dogo');              					      // Add new element to the beginning.




/* STRINGS ------------------------------------------------------------------------------------------------------------------- */

let str = "Hello";

// Concatenation
let str2 = 'World!';
console.log(str + ' ' + str2);   // Output: Hello World!

// Concatenating Strings with plus equals operator
let ourStr = "I come first. ";
console.log(ourStr += "I come second. ");    // Output: "I come first. I come second. "

// String Interpolation
const myPet = 'cat';
console.log(`I own a pet ${myPet}.`);     // Output: I own a pet cat.

// Length property
str.length;   // Output: 5

// Access character in string
let lastName = "Lovelace";
let firstLetterOfLastName = lastName[0];                    //Output: "L"
let lastLetterOfLastName = lastName[lastName.length - 1];   //Output: "e"


/* Escape Sequences in Strings

\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed

*/


// Strings Methods
str.charAt(1);                  // Output: e. Character at index 2.
str.charCodeAt(2);              // Output: 108. Unicode number.
str.concat(" Wor", "ld");       // Output: "Hello World".
str.indexOf("e");            	  // Output: 1. Find substring, -1 if doesn't contain.
str.includes("llo");			      // Output: true. Return true if the search string is found within the given string, false if not.
str.endsWith("lo");				      // Output: true. True if the given characters are found at the end of the string; otherwise, false.
str.lastIndexOf("l");        	  // Output: 3. Last occurance.
str.match(/[A-H]/gi);			      // Output: ["H", "e"]. (Support RegExp).
str.repeat(3);					        // Output: "HelloHelloHello".
str.replace("H", "123");       	// Output: "123ello". Find and replace. (Support RegExp).
str.search("l");				        // Output: 2. The index of the first match, or -1 if no match was found. (Support RegExp).
str.slice(1, 4);                // Output: "ell". Cuts a portion of string. Negative values count from behind.
str.split("");                 	// Output: ["H", "e", "l", "l", "o"]. (Support RegExp).
str.split(" ");                 // Output: ["Hello"].
str.startsWith("H");			      // Output: true. True if the given characters are found at the beginning of the string; otherwise, false.
str.toLowerCase();              // Convert to lower case.
str.toUpperCase();              // Output: "HELLO". Convert to upper case.
str.trim();						          // Trim whitespaces from left and right side.
str.trimStart();			          // Trim whitespace from left side.
str.trimEnd();				          // Trim whitespace form right side.




/*REGULAR EXPRESSION SYNTAX ------------------------------------------------------------------------------------------------------------------- *//*

// Pattern Modifiers (flags)
e   //Evaluate replacement
i   //Case-insensitive
g   //Global match
m   //Multiple lines
s   //Treat strings as single line
x   //Allow comments and whitespace in pattern
U   //Ungreedy pattern


// Groups and ranges
[abc]  		  //Any of the characters between the brackets
[^abc]  	  //Any character not in the brackets
[0-9]  		  //Any digit from 0 to 9
[A-z] 		  //Any character from uppercase A to lowercase z
(a|b|c) 	  //Find any of the alternatives separated with |
[:punct:]  	  //Any punctu­ation symbol
[:space:]  	  //Any space character
[:blank:]  	  //Space or tab


// Character classes
.   	  //Any single character, except newline or line terminator
\d  	  //A digit
\D  	  //A non-digit character
\w  	  //Word character
\W  	  //Non-word character
\s  	  //Whitespace character
\S  	  //Non-whitespace character
\t  	  //Tab character
\r  	  //Carriage return character
\n  	  //A new line character
\v  	  //Vertical tab character
\f  	  //Form feed character
[\b]	  //A backspace
\0  	  //NUL character
\xxx      //The character specified by an octal number xxx
\xdd      //Character specified by a hexadecimal number dd
\uxxxx    //The Unicode character specified by a hexadecimal number xxxx
\		  //Escape character


// Quantifiers
a+ 		  //One or more of a
a*   	  //Zero or more occurrences of a
a?  	  //Zero or one occurrences of a
a+?  	  //One or more, ungreedy
a*?  	  //Zero or more, ungreedy
?=a  	  //Any string that is followed by a specific string a
?!a  	  //String that is not followed by a specific string a
a{2}      //Exactly 2 of a
a{2,}  	  //2 or more of a
a{,5}     //Up to 5 of a
a{2,5}    //2 to 5 of a


// Assertions
\b  	  //Find a match at the beginning / end of a word
\B  	  //Find a match not at the beginning / end of a word
^a  	  //Any string with "a" at the beginning of it
a$  	  //Any string with "a" at the end of it
x(?=y)	  //Matches "x" only if "x" is followed by "y".
x(?!y)	  //Matches "x" only if "x" is not followed by "y".
(?<=y)x	  //Matches "x" only if "x" is preceded by "y".
(?<!y)x   //Matches "x" only if "x" is not preceded by "y".

*/




/* BOOLEANS ------------------------------------------------------------------------------------------------------------------- */

// truthy and falsy values

//falsy
let falsy1 = false;
let falsy2 = 0;              //zero
let falsy3 = -0;             //minus zero
let falsy4 = 0n;             //BigInt zero
let falsy5 = '' || "" || ``; //empty string
let falsy6 = null;
let falsy7 = undefined;
let falsy8 = NaN;

//truthy
let truthy1 = '0';           //a string containing a single zero
let truthy2 = 'false';       //a string containing the text 'false'
let truthy3 = [];            //an empty array
let truthy4 = {};            //an empty object
let truthy5 = function(){};  //an 'empty' function




/* OBJECTS ------------------------------------------------------------------------------------------------------------------- */

// Object literal
let student = {                
  firstName:"Jane",       							// properties (key: value)
  lastName:"Doe",
  age:18,
  height:170,
  fullName() {     									// method (function)
    return this.firstName + " " + this.lastName;		//the value of 'this' keyword is the calling object.
  }
};


// Accesing objects
student.firstName;			// Dot notation. Output: Jane
student['lastName'];		// Bracket notation. Output: Doe	
student.fullName();  		// Output: Jane Doe.


// Updating Object Properties
student.age = 19;           	  // Dot notation.
student['height'] = 180;		  // Bracket notation.


// Add new properties to an Object
student.hobbie = 'guitar';   			// Dot notation.	
student['favourite food'] = 'pizza';	// Bracket notation.


// Delete operator
delete student.age;


// Deep clone
let obj = { name: 'luna', age: 5 };
let clon2 = { ...obj };                         // Using spread operator
let clon3 = JSON.parse(JSON.stringify(obj));    // Using JSON.parse and JSON.stringify


// Accessing Nested Objects
var myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      seats: 'crumbs'
    }		
  }
};
var gloveBoxContents = myStorage.car.inside['glove box'];	  //Outputs 'maps'


// Optional chaining
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};
const dogName = adventurer.dog?.name;
console.log(dogName);                                 // output: undefined
console.log(adventurer.someNonExistentMethod?.());    // expected output: undefined


// Privacy
// Getters
const robot = {		
  _energyLevel: 100,
  get energyLevel(){								//Getters can perform an action on the data when getting a property.
    if(typeof this._energyLevel === 'number') {		//Getters can return different values using conditionals.
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};
console.log(robot.energyLevel);		//Output: My current energy level is 100

// Setters
const person = {
  _age: 37,
  set age(newAge){  //Setters can check input and perform actions on properties.
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40;
console.log(person._age);       // Output: 40
person.age = '40'; 			        // Output: You must assign a number to age


// Create Objects with functions with property value shorthand
const monsterFactory = (name, age, catchPhrase) => {
  return { 
    name,				
    age,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
const ghost = monsterFactory('Casper', 251, 'BOO!');		//Output: {name: "Casper", age: 251, scare: ƒ}


// Destructured assignment
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  tastes: {
    drink: 'Blood',
    food: 'Burger'
  }
};
const { residence } = vampire;                  // residence outputs 'Transylvania'
const { name: newName } = vampire;              // newName outputs 'Dracula'
const { tastes: {drink, food} } = vampire;      // drink outputs 'Blood', food outputs 'Burger'


// Destructuring Assignment to pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
function half({max, min}) {
  return (max + min) / 2.0;
}
console.log(half(stats));


// Static methods (built-in)
Object.keys()	//Returns an array containing the names of all of the given object's own enumerable string properties.
Object.values()	//Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
Object.entries()	//Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.assign()	//Copies the values of all enumerable own properties from one or more source objects to a target object.
Object.create()	//Creates a new object with the specified prototype object and properties.
Object.defineProperty()	//Adds the named property described by a given descriptor to an object.
Object.defineProperties()	//Adds the named properties described by the given descriptors to an object.
Object.freeze()		//Freezes an object. Other code cannot delete or change its properties.
Object.seal()	//Prevents other code from deleting properties of an object.
Object.fromEntries()	//Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).
Object.getOwnPropertyDescriptor()	//Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors()	//Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames()	//Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols()	//Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf()	//Returns the prototype (internal [[Prototype]] property) of the specified object.
Object.is()	//Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible()	//Determines if extending of an object is allowed.
Object.isFrozen()	//Determines if an object was frozen.
Object.isSealed()	//Determines if an object is sealed.
Object.preventExtensions()	//Prevents any extensions of an object.
Object.setPrototypeOf()	//Sets the object's prototype (its internal [[Prototype]] property).


// Instance methods (built-in)
Object.hasOwnProperty()	//Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
Object.isPrototypeOf()	//Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
Object.propertyIsEnumerable()	//Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
Object.toLocaleString()	//Calls toString().
Object.toString()		//Returns a string representation of the object.
Object.unwatch()		//Removes a watchpoint from a property of the object.
Object.valueOf()		//Returns the primitive value of the specified object.
Object.watch()			//Adds a watchpoint to a property of the object.




/* CLASSES ------------------------------------------------------------------------------------------------------------------- */

class Dog {						//By convention, we capitalize and camelCase class names. 
  constructor(name) {			//constructor method
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

  
// Instance
let bradford = new Dog('Bradford');     // Create dog name Bradford
console.log(bradford.name);         	  // Output: Bradford


// Inheritance
// Parent class (superclass)
class Animal {                            
  constructor(name) {       	
    this._name = name;
  }
  get name() {
    return this._name;
  }
} 

// Child class (subclass)
class Cat extends Animal {              // The extends keyword makes the methods of the animal class available inside the cat class.     
  constructor(name, usesLitter) {
    super(name);                    // The super keyword calls the constructor of the parent class.
    this._usesLitter = usesLitter;
  }
    get usesLitter() {
    return this._usesLitter;
  }
}
const bryceCat = new Cat('Bryce', true);
console.log(bryceCat.name);     		    //Output: Bryce
console.log(bryceCat.usesLitter);       //Output: true


// Static methods  			
class Human {
  constructor(name) {
    this._name = name;
  }
  static greet() {		// You can call it directly from the class, but not from an instance of the class.
    return 'Hello World!'
  }
}
console.log(Human.greet());  // Returns 'Hello World!'


// Private properties
class Client {
  #name;
  constructor(name, country){
    this.#name = name;
    this.country = country;
  }
  getInfo(){
    return `Client: ${this.#name}, lives in ${this.country}`;
  }
  set setClientName(name){
    this.#name = name;
  }
  get getClientName(){
    return this.#name;
  }
}
let ada = new Client('Ada', 'England');
console.log(ada.getInfo()); 
//console.log(ada.#name);       // Error (#name property not accessible from outside)
//ada.#name = 'Lovelace';       // Error
ada.setClientName = 'Lovelace';
console.log(ada.getClientName);


// Mixin
class Persona {
  constructor(nombre, email){
    this.nombre = nombre;
    this.email = email;
  }
}
const funcionesPersona = {
  mostrarInfo(){
    console.log(`Nombre: ${this.nombre}, Email: ${this.email}`)
  }
}
Object.assign(Persona.prototype, funcionesPersona);
const person = new Persona('Lucas', 'lucas.perez.ok@gmail.com');
person.mostrarInfo();




/* JSON ------------------------------------------------------------------------------------------------------------------- */

// Create JSON object
let jsonStr = '{"names":[' +                    	
              '{"first":"Hakuna","lastN":"Matata" },' +
              '{"first":"Jane","lastN":"Doe" }]}';

// parse
let jsonObj = JSON.parse(jsonStr);

// Access                     
console.log(jsonObj.names[1].first);    // outputs 'Jane'

// stringify
let myObj = { "name": "Jane", "age": 18, "city": "Chicago" };  	// create object
let myJSON = JSON.stringify(myObj);                         	  // stringify

// Storing and retrieving
localStorage.setItem("testJSON", myJSON);   	      // storing data (Key / Value)
let item = localStorage.getItem("testJSON");        // retrieving data 
let parsedItem = JSON.parse(item);
console.log(parsedItem.name);




/* SETS ------------------------------------------------------------------------------------------------------------------- */

const carrito = new Set();
carrito.add('Camisa');
carrito.add('Remera');
carrito.add('Pantalon');
carrito.add('Zapatillas');

console.log(carrito.size);            // 4
console.log(carrito.has('Camisa'));   // true

carrito.delete('Remera');
console.log(carrito.delete('Camisa'));      // true
console.log(carrito.delete('Guitarra'));    // false

carrito.clear();

const numeros = [10, 20, 30, 40, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);    // [10, 20, 30, 40]




/* WEAKSETS ------------------------------------------------------------------------------------------------------------------- */

const weakset = new WeakSet();      // only objects, not iterable, don't have .size property
const client = {
  nombre: 'Juan',
  saldo: 100
}
weakset.add(client);
weakset.add('Pedro');               // Error

console.log(weakset.has(client));   // true
weakset.delete(client);




/* MAPS ------------------------------------------------------------------------------------------------------------------- */

const cliente = new Map();
cliente.set('nombre', 'Karen');
cliente.set('activo', true);
cliente.set('saldo', 300);
cliente.set('saldo', 500);            // rewrite

console.log(cliente.size);            // 3
console.log(cliente.has('nombre'));   // true
console.log(cliente.get('nombre'));   // Karen

cliente.delete('saldo');
cliente.clear();




/* WEAKMAPS ------------------------------------------------------------------------------------------------------------------- */

const weakmap = new WeakMap();          // not iterable, don't have .size property
const producto = {
  id: 10
};
weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto));     // true
console.log(weakmap.get(producto));     // 'Monitor'  (objects are not accessibles)




/* SYMBOL ------------------------------------------------------------------------------------------------------------------- */

const sym = Symbol(1);
const sym2 = Symbol(1);

console.log(sym === sym2);            // false
console.log(Symbol() === Symbol());   // false

const persona = {};
const nombre = Symbol('Nombre del cliente');    // description

persona[nombre] = 'Juan';
persona.saldo = 500;

console.log(persona[nombre]);   // 'Juan'
console.log(persona.saldo);     // 500

for(let i in persona){    // Symbol properties are not iterables
  console.log(i);         // saldo
}




/* NUMBERS AND MATH ------------------------------------------------------------------------------------------------------------------- */

// Number Properties
Number.MAX_VALUE 			        //The maximum numeric value representable in JavaScript
Number.MIN_VALUE  			      //Smallest positive numeric value representable inJavaScript
Number.NEGATIVE_INFINITY      //The negative Infinity value
Number.POSITIVE_INFINITY 	    //Positive Infinity value
NaN 						              //The 'Not-a-Number' value


//Numbers Methods
const pi = 3.141;
pi.toFixed(0);          	// returns 3
pi.toFixed(2);          	// returns 3.14 (for working with money)
pi.toPrecision(2)       	// returns 3.1
pi.toExponential()        // returns 3.14e+0
pi.toString()				      // returns string
pi.valueOf();           	// returns number
Number(true);           	// converts to number
Number(new Date())      	// number of milliseconds since 1970
parseInt("3 months");   	// returns the first number: 3
parseFloat("3.5 days"); 	// returns 3.5


// Math Properties (constants)
Math.E 			      //Euler's number
Math.LN2 		      //The natural logarithm of 2
Math.LN10 		    //Natural logarithm of 10
Math.LOG2E 		    //Base 2 logarithm of E
Math.LOG10E 	    //Base 10 logarithm of E
Math.PI 		      //The number PI
Math.SQRT1_2 	    //Square root of 1/2
Math.SQRT2 		    //The square root of 2


// Math Methods
const PI = Math.PI;                 // 3.141592653589793
Math.round(4.4);        	          // = 4 (rounded)
Math.round(4.5);        	          // = 5
Math.pow(2,8);          	          // = 256 - 2 to the power of 8
Math.sqrt(49);          	          // = 7 - square root 
Math.abs(-3.14);        	          // = 3.14 - absolute (positive value)
Math.ceil(3.14);        	          // = 4 - rounded up
Math.floor(3.99);       	          // = 3 - rounded down
Math.sin(0);            	          // = 0 - sine
Math.cos(x);      	                // The cosine of x (x is in radians)
Math.acos(x) 	 		                  // The arccosine of x, in radians
Math.asin(x) 	 		                  // Arcsine of x, in radians
Math.tan(x) 			                  // The tangent of an angle
Math.atan(x) 	 		                  // The arctangent of x as a numeric value
Math.atan2(y,x)  		                // Arctangent of the quotient of its arguments
Math.min(0, 3, -2, 2);  	          // = -2  (the lowest value)
Math.max(0, 3, -2, 2);  	          // = 3  (the highest value)
Math.log(1);            	          // = 0 natural logarithm 
Math.exp(1);            	          // = 2.7182pow(E,x)
Math.random();          	          // random number between 0 and 1
const randomRange = (ourMax, ourMin) => Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;  
console.log(randomRange(2, -6));    // random integer, from -6 to 2




/* DATES IN JAVASCRIPT ------------------------------------------------------------------------------------------------------------------- */

Date();									              // Output: actual date.
new Date("2017-06-23");					      // Output: Thu Jun 22 2017 21:00:00 GMT-0300 (Argentina Standard Time)
new Date(2017, 5, 21, 3, 23, 10, 0);	// Output: Wed Jun 21 2017 03:23:10 GMT-0300 (Argentina Standard Time)

// Static methods
Date.now()		                                // Devuelve el número de milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970.
Date.parse("2022-03-18 00:00:00" + "-0300")		// Parses a string representation of a date, and returns the number of milliseconds since January 1, 1970.
Date.UTC()		

// Instance Methods
new Date().toLocaleString();			// Output: d/m/yyyy h:mm:ss

let fecha = new Date();
let year = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let output = `Año: ${dia}/${mes}/${year}`+ '\n' + `Hora: ${hora}:${minutos}:${segundos}`;




/* MODULES ------------------------------------------------------------------------------------------------------------------- */

module.exports 	  // exports the module for use in another program.
require() 		    // imports the module for use in the current program.


// Examples
// exports 	(in menu.js file).
let Menu = {};												// Create an object to represent the module.
Menu.specialty = "Roasted Beet Burger with Mint Sauce";		// Add properties or methods to the module object.
module.exports = Menu; 										// Export the module with module.exports.
// require	(in order.js file).
const Menu = require('./menu.js');			        // Import the module with require() and assign it to a local variable (the .js extension is optional).
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);	// Use the module and its properties within a program.
}
placeOrder();


// export default
let Menu2 = {};
export default Menu;    // Uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
//import
import Menu2 from './menu';


// Named exports
var specialty = "";
function isVegetarian() {
}; 
export { specialty, isVegetarian };   // Named exports allow us to export data through the use of variables.
// Named imports
import { specialty, isVegetarian } from './menu';


// Export named exports
export let specialty = "" ;					  // They can be exported as soon as they are declared
export function isVegetarian() {
}; 
// Import named imports
import { specialty, isVegetarian } from 'menu';


// Export assign 				
let specialty = "";
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };	// The 'as' keyword allows us to give a variable name.
// Import as
import {isLowSodium as saltFree} from 'Menu';
// Another way of using aliases is to import the entire module as an alias:
import * as Carte from './menu';
Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium(); 




/* LOCAL STORAGE ------------------------------------------------------------------------------------------------------------------- */

// Comprobar disponibilidad de localStorage en navegador
if(typeof(Storage) !== 'undefined'){
  console.log("LocalStorage disponible");
} else {
  console.log("navegador incompatible con localStorage");
}

// Guardar datos en LocalStorage
localStorage.setItem("titulo", "Curso de JavaScript");			  // (Key / Value)

// Recuperar elemento
console.log(localStorage.getItem("titulo"));

// Guardar objetos
let usuario = {
  nombre: "Ava",
  apellido: "Lovelace",
  edad: 28
};
localStorage.setItem("usuario", JSON.stringify(usuario));     // (Key / Value)

// Recuperar objeto
let userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);

// Remover item
localStorage.removeItem("usuario");

// Borrar todo el localStorage
localStorage.clear();




/* TIMERS ------------------------------------------------------------------------------------------------------------------- */

// setTimeout
setTimeout (() => {
  console.log("Hello World");	
}, 2000);							

// setInterval	
const pep = setInterval (() => {
   console.log("Hello boy");
}, 2000);
  
// clearInterval
setTimeout(() => {
  clearInterval(pep);
}, 12000);




/* PROMISES ------------------------------------------------------------------------------------------------------------------- */

// Constructing a Promise Object
const myFirstPromise = new Promise((resolve, reject) => {
  if (1 > 2) {
    resolve('I resolved!');
  } else {
    reject('I rejected!'); 
  }
});

// Consuming Promises
myFirstPromise
  .then((resolvedValue) => {              // success handler
    console.log(resolvedValue);
  })            
  .catch((rejectionReason) => {           // failure handler
    console.log(rejectionReason);
  });




/* ASYNC / AWAIT ------------------------------------------------------------------------------------------------------------------- */

function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    const error = false;
    setTimeout(() => {
      if(!error){
        resolve('resolved');
      } else {
        reject('fatal error in process')
      }   
    }, 2000);
  });
}

// async await with function declaration
async function asyncCall() {
  console.log('calling . . .');
  try{
    const result = await resolveAfter2Seconds();
    console.log(result);	// expected output: 'resolved'	
  } catch(error){
    console.log(error)
  }
};
asyncCall();

// async/await with function expression
const asyncCall = async () => {
  console.log('calling . . .');
  try{
    const result = await resolveAfter2Seconds();
    console.log(result);	// expected output: 'resolved'	
  } catch(error){
    console.log(error)
  }
}
asyncCall();


// Promise All
function getClients(){ 
  return new Promise( resolve => {
    console.log('Descargando clientes . . .')
    setTimeout(() => resolve('clients data'), 2000)
  })
}
function getProducts(){
  return new Promise(resolve => {
    console.log('Descargando productos . . .')
    setTimeout(() => resolve('products data'), 3000)
  })
}
const appSerial = (async () => {
  try {   
    const responseClients = await getClients();
    console.log(responseClients);
    const responseProducts = await getProducts();
    console.log(responseProducts);
    // tarda en total 5 segundos
  }
  catch(error){
    console.log(error)
  }
})();
const appParallel = (async () => {
  try {   
    const totalData = await Promise.all([getClients(), getProducts()]);
    console.log(totalData); 
    // tarda en total 3 segundos
  }
  catch(error){
    console.log(error)
  }
})();




/* REQUESTS ------------------------------------------------------------------------------------------------------------------- */

//XHR GET
const xhr = new XMLHttpRequest;							// creates new object
const url = "https://api-to-call.com/endpoint";

xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}
xhr.open("GET", url);       // opens request
xhr.send();								  // sends object

//XHR POST
const xhr = new XMLHttpRequest;							    // creates new object
const URL = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});				// converts data to a string

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}
xhr.open('POST', URL);      // opens request
xhr.send(data);							// sends object


//fetch() GET
fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
  return jsonResponse;
})

//fetch() POST
fetch('https://api-to-call.com/endpoint', {method: 'POST', body: JSON.stringify({id: '200'})}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
  return jsonResponse;
});


//async await GET
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint')
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  } catch(error) {
    console.log(error);
  }
};

//async await POST
const postData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {method: 'POST', body: JSON.stringify({id: 200})})
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  } catch(error) {
    console.log(error);
  }
};