"use strict";
//arrays
let names = ["Mario", "Luigi", "Peach"];
let ages = [25, 29, 15];
names.push("Adam");
ages.push(45);
console.log(names);
console.log(ages);
// type inference with arrays
let fruits = ["apples", "pears", "bananas", "mangos"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];
//object literals
let user = { firstName: "Mario", age: 30, id: 1 };
user.firstName = "peach";
// user.email = "asda@gmail.com";
user.id = 2;
// type interface with object literals
let person = {
    name: "luigi",
    score: 35,
};
// person.name = true
person.name = "Adam";
