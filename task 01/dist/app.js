let age = 29; //w przypadku kiedy podajemy wartosc zmiiennej, nie musimy okreslac jej typu, ponieważ ts zrobi to sam (type inference)
let ageAsString = "dziesiec";
const add = (v1, v2) => v1 + v2;
console.log(add(10, 5));
const input1Element = document.querySelector("#input1");
const input2Element = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");
const addInput = (v1, v2) => v1 + v2;
addButtonElement.addEventListener("click", () => {
    const sum = addInput(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
const logAge = (age2) => {
    console.log(`Hej, mam ${age2} lat`);
};
logAge(10);
logAge("dwadziescia osiem");
