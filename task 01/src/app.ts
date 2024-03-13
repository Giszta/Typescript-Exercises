import { renderCategories } from "./helpers/render-categories.js";
import { render } from "./helpers/render-task.js";
import { Category, Task } from "./types/types";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
	document.querySelector(".categories");
let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby", "social"];

const tasks: Task[] = [
	{ title: "Wyrzucić śmieci", done: false },
	{ title: "Pójść na siłkę", done: true, category: "gym" },
	{ title: "nakarmić koty", done: false },
];

const addTask = (task: Task) => {
	tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
	selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
	event.preventDefault();
	addTask({
		title: taskNameInputElement.value,
		done: false,
		category: selectedCategory,
	});
	render(tasks, tasksContainerElement);
});

renderCategories(
	categories,
	categoriesContainerElement,
	updateSelectedCategory
);
render(tasks, tasksContainerElement);

let get = (response: unknown) => response;

const logFixed = (v: number) => {
	console.log(v.toFixed());
};

logFixed(2.1);
let value = get(2.3);
// type narrowing
if (typeof value === "number") {
	logFixed(value);
}
