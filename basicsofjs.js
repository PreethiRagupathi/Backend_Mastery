/* Variables
var x=10; 
var x=20; //Allowed
console.log(x); // print 20
//var keyword allows both redeclaration and reassignment of variables

let y=10;
let y=20; // let not allowed (let y=20; // let not allowed)
y=25 
console.log(y); //print 25
//The let keyword does not allow redeclaration within the same scope

const z=40;
//z=30; // not allowed (z=30; ^TypeError: Assignment to constant variable.)
console.log(z); //print 30
//The const keyword is used for variables whose value should not change after initialization.
*/

//Datatypes
let age = 20;
let price = 99.99;
console.log(age); //returns 20
console.log(typeof(age)); //returns number

let name = "Preethi";
let message = 'Hello World';
console.log(name);
console.log(typeof(name)); //returns string

let isStudent = true;
let isLoggedIn = false;
console.log(isStudent);//returns true
console.log(typeof(isLoggedIn));// returns boolean

let city;
console.log(city); // undefined
console.log(typeof(city)); //undefined

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); //123456789012345678901234567890n
console.log(typeof(bigNumber)); //bigint - datatype to store large number

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false
console.log(typeof(id1)); //symbol -to create unique identifiers even if two symbols have the same description

let student = {
  name: "Preethi",
  age: 20
};
console.log(student); // { name: 'Preethi', age: 20 }
console.log(typeof(student));//object

let colors = ["Red", "Green", "Blue"];
console.log(colors); // { name: 'Preethi', age: 20 }
console.log(typeof(colors)); // object

function greet() {
  return "Hello";
}
console.log(greet()) //Hello
console.log(typeof(greet));//function

//Operators
//Arithmetic operators
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

//Comparison Operator
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 == "10"); // true
console.log(10 === "10"); // false
//== (loose equality) compares two values for equality after converting them to a common type (type coercion), while === (strict equality) compares both the value and the data type without converting them.

//Logical Operator
let age = 20;
console.log(age > 18 && age < 25); // true
console.log(age > 18 || age > 30); // true
console.log(!(age > 18)); // false

//Assignment operator
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

//Expression
//It is any piece of code that produces a value.
10 + 5

let age = 20;
age > 18

"Hello" + " World"

5 + 3          // 8
10 > 5         // true
"a" + "b"      // "ab"
true && false  // false