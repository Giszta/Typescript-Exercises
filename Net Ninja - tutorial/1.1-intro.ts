//---------------------------------
// Benefits of TypeScript
//---------------------------------

// 1- better error feedback

function reverse(str: string) {
	return str.split("").reverse().join("");
}

const result = reverse("hello");
const resultError = reverse(true); // wrong type

// 2- better autocompletion & code hints

const reversed = reverse("ninja");
reverse. // suggest only string type method 

// 3- custom types

interface MenuItem {
    title: string
    cost: number
}

function printMenuItem(item: MenuItem) {
    console.log(item.title, ":", item.cost)
}

//error example 1
printMenuItem()

//error example 2
printMenuItem({title: "veggie carbobnara", cost:"15"})

//error example 3
printMenuItem({name: "avocado on toast", cost:8})