let pattern=/test/;//check the exact string 
const input='test';
const didmatch=pattern.test(input);
console.log(didmatch)//true

let pattern=/[a-z]/;//checks whether any single character(lower case) exist in the given limit
const input='a';
const didmatch=pattern.test(input);
console.log(didmatch)//true

let pattern=/[A-Z]/;//checks whether any single character(Upper case) exist in the given limit
const input='A';
const didmatch=pattern.test(input);
console.log(didmatch)//true

let pattern=/[0-9]/; // checks whether any digit exists
const input='5';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/[a-zA-Z]/; // checks whether any alphabet exists
const input='P';
const didmatch=pattern.test(input);
console.log(didmatch);//true 

let pattern=/[a-zA-Z0-9]/; // checks whether any letter or digit exists
const input='7';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/[^a-z]/; // checks whether any character is NOT a lowercase letter
const input='5';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/\d/; // checks whether any digit exists
const input='8';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/\D/; // checks whether any non-digit exists
const input='A';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/\w/; // checks whether any word character (letter, digit, _) exists
const input='_';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/\W/; // checks whether any special character exists
const input='@';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/\s/; // checks whether any whitespace exists
const input=' ';
const didmatch=pattern.test(input);
console.log(didmatch);//true

let pattern=/\S/; // checks whether any non-whitespace character exists
const input='A';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/[0-9]+/; // checks whether one or more digits exist
const input='123';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/[0-9]; // checks whether zero or more digits exist
const input='123';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/colou?r/; // checks whether "color" or "colour" exists
const input='colour';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/c.t/; // checks whether any single character exists between c and t
const input='cat';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/^Hello/; // checks whether the string starts with "Hello"
const input='Hello World';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/World$/; // checks whether the string ends with "World"
const input='Hello World';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/^\d{3}$/; // checks whether the string contains exactly 3 digits
const input='123';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/^\d{3,5}$/; // checks whether the string contains 3 to 5 digits
const input='1234';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/^\d{3,}$/; // checks whether the string contains at least 3 digits
const input='123456';
const didmatch=pattern.test(input);
console.log(didmatch);

let pattern=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; // checks whether the input is a valid email format
const input='preethi@gmail.com';
const didmatch=pattern.test(input);
console.log(didmatch);

