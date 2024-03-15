"use strict";
// functions
function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(1, 2));
const substractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 5]);
//return type interface
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("mario", "hello");
