"use strict";
const product1 = {
    id: 101,
    name: "Laptop",
    price: 60000,
    discount: 10,
};
const product2 = {
    id: "102",
    name: "Keyboard",
    price: 1500,
    discount: 5,
};
const product3 = {
    id: 103,
    name: "Mouse",
    price: 500,
};
const totalitems = [product1, product2, product3];
function getitems(items) {
    return items;
}
;
const result = getitems(totalitems);
console.log(result);
function printitems(items) {
    console.log(items);
}
;
result.forEach(product => {
    printitems(product);
});
