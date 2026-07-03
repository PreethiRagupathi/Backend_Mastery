/*terface  Employee{
    name:String,
    empid:Number,
    designation:String,
    branch:String,
}
const emp1:Employee={
    name:"Preethi",
    empid:101,
    designation:"Software Engineer",
    branch:"Coimbatore"
}
console.log(emp1);

interface Book {
  title: String;
  author: String;
  displayInfo(): void;
}
const book1: Book = {
  title: "Mutkalin patham",
  author: "Preethi",
  displayInfo(){
    console.log(
    "Book title is " + book1.title + " and author is " + book1.author,
  );
  }
};
book1.displayInfo();

interface User{
    name:string,
    email:string,
    phonenumber?:number,
};
const user1:User={
    name:"Preethi",
    email:"preethi@gmail.com",
    phonenumber:1234567890
}
const user2:User={
    name:"Mithuna",
    email:"Mithuna@gmail.com",
}
console.log(user1);
console.log(user2);

interface Rectangle{
    width:number,
    height:number,
}
const rectangle:Rectangle={
    width:10,
    height:5
};
function calculateArea(rectangle:Rectangle){
    console.log("Area of the rectangle is:"+(rectangle.width*rectangle.height));
}
calculateArea(rectangle);
*/
interface Person{
    name:string,
    age:number
};
interface Student extends Person{
    course:string,
}
const user:Student={
    name:"Preethi",
    age:20,
    course:"Computer Science"
}
console.log(user);