import { renderCategories } from "./helpers/render-categories.js";
import { render } from "./helpers/render-task.js";
import { Category, Task } from "./types/types";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
	document.querySelector(".categories");
let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
	{ title: "Wyrzucić śmieci", done: false },
	{ title: "Pójść na siłkę", done: true, category: "gym" },
	{ title: "nakarmić koty", done: false },
];

const addTask = (task: Task) => {
	tasks.push(task);
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

renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
