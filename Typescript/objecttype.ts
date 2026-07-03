type Employe = {
  name: String;
  empid: Number;
  salary: Number;
};
const empp2: Employe = {
  name: "Preethi",
  empid: 101,
  salary: 50000,
};
console.log(
  "Employee " +
    empp2.name +
    " with empid " +
    empp2.empid +
    " has a salary of " +
    empp2.salary,
);

type User = {
  readonly id: number;
  name: string;
  age: number;
};
const user: User = {
  id: 101,
  name: "Preethi",
  age: 20,
};
console.log(user);
user.name = "Mithuna"; //alowed
// user.id = 102; //not allowed because id is readonly
console.log(user);
