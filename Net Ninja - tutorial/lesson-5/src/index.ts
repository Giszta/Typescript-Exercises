// functions

function addTwoNumbers(a: number, b: number): number {
	return a + b;
}

console.log(addTwoNumbers(1, 2));

const substractTwoNumbers = (a: number, b: number): number => {
	return a - b;
};

function addAllNumbers(items: number[]): void {
	const total = items.reduce((a, c) => a + c, 0);
	console.log(total);
}

addAllNumbers([1, 2, 3, 5]);

//return type interface

function formatGreeting(name: string, greeting: string) {
	return `${greeting}, ${name}`;
}

const result = formatGreeting("mario", "hello");
