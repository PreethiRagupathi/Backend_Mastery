//Employee Management System
/*type Employee={
    id: number | string;
    name:string;
    salary:number;
    department:string;
};
const emp1:Employee={
    id:101,
    name:"Preethi",
    salary:50000,
    department:"Data Analyst",
};
const emp2:Employee={
    id:"102",
    name:"Deepika",
    salary:75000,
    department:"Software Engineer",
}
function getData<T>(data:T):T{
    return data;
}
const empdata1=getData(emp1);
console.log(empdata1);
const empdata2=getData(emp2);
console.log(empdata2);
*/
//Product Inventory System
type Product={
    id: number|string;
    name:string;
    price:number;
    discount?:number;
};
const product1:Product={
    id:101,
    name:"Laptop",
    price:60000,
    discount:10,
};
const product2:Product={
    id:"102",
    name:"Keyboard",
    price:1500,
    discount:5,
};
const product3:Product={
    id: 103,
    name:"Mouse",
    price:500,
};

const totalitems:Product[]=[product1,product2,product3];
function getitems<T>(items:T[]):T[]{
    return items;
};
const result=getitems(totalitems);
console.log(result);
function printitems<T>(items:T):void{
    console.log(items);
};
result.forEach(product=>{
    printitems(product);
});

