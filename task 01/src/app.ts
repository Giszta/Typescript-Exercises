// let age: number = 29; //w przypadku kiedy podajemy wartosc zmiiennej, nie musimy okreslac jej typu, ponieważ ts zrobi to sam (type inference)
// let ageAsString: string = "dziesiec";

// const add = (v1: number, v2: number) => v1 + v2;
// console.log(add(10, 5));

// const input1Element: HTMLInputElement = document.querySelector("#input1");
// const input2Element: HTMLInputElement = document.querySelector("#input2");
// const addButtonElement = document.querySelector("button");

// const addInput = (v1: number, v2: number) => v1 + v2;

// addButtonElement.addEventListener("click", () => {
// 	const sum = addInput(
// 		Number(input1Element.value),
// 		Number(input2Element.value)
// 	);
// 	console.log(sum);
// });

// //union type - związek kilku typów

// const logAge = (age2: number | string) => {
// 	console.log(`Hej, mam ${age2} lat`);
// };

// logAge(10);
// logAge("dwadziescia osiem");

// let test: string | number | boolean;
// test = "test";
// test = 21;
// test = true;
// // test = [];

// task 1 - discount

const buttonElement = document.querySelector("button");

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
	return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

buttonElement.addEventListener("click", () => {
	const originalPrice: number = 50;
	const hasDiscount: boolean =
		new URLSearchParams(window.location.search).get("discount") === "true";

	console.log(calculatePrice(originalPrice, hasDiscount));
});

//union type - związek kilku typów

const logAge = (age2: number | string) => {
	console.log(`Hej, mam ${age2} lat`);
};

logAge(10);
logAge("dwadziescia osiem");

let test: string | number | boolean;
test = "test";
test = 21;
test = true;
// test = [];
