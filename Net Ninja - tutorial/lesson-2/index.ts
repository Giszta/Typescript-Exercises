// types

let age: number = 30;
let firstName: string = "Mario";
let isFictional: boolean;

age = 31;
firstName = "luigi";
isFictional = false;

let planet = "earth"; //string
let moons = 1; //number
let isLarge = false; // boolean

planet = 10; //error nnumber
planet = "Staurn"; //ok
moons = "145"; // error string
moons = 145; //ok
isLarge = "true"; //error string
isLarge = true; //ok

// null and indefined

let something: null;
let anotherThing: undefined;

something = 10; //error
something = null; //ok
anotherThing = "hello"; //error
anotherThing = undefined; //ok
