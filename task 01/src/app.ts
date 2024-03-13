import { renderCategories } from "./helpers/render-categories.js";
import { render } from "./helpers/render-task.js";
import { Category, Task } from "./types/types.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
	document.querySelector(".categories");
let selectedCategory: Category;

const categories: Category[] = [
	Category.GENERAL,
	Category.WORK,
	Category.GYM,
	Category.HOBBY,
	Category.SOCIAL,
];

const tasks: Task[] = [
	{ title: "Wyrzucić śmieci", done: false, category: Category.HOBBY },
	{ title: "Pójść na siłkę", done: true, category: Category.GYM },
	{ title: "nakarmić koty", done: false, category: Category.WORK },
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

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["zrobić klate", Category.GYM, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

addTask({ title: taskName, category: taskCategory, done: taskDoneStatus });

renderCategories(
	categories,
	categoriesContainerElement,
	updateSelectedCategory
);
render(tasks, tasksContainerElement);

// let get = (response: unknown) => response;

// const logFixed = (v: number) => {
// 	console.log(v.toFixed());
// };

// logFixed(2.1);
// let value = get(2.3);
// // type narrowing
// if (typeof value === "number") {
// 	logFixed(value);
// }

// Interface vs type alias
// type TaskType = {
// 	name: string;
// 	done: boolean;
// 	category?: Category;
// };

// interface TaskInterface {
// 	name: string;
// 	done: boolean;
// 	category?: Category;
// }
// interface TaskInterface {
// 	createdAt: Date;
// }

// let newTask: TaskInterface;

// newTask = {
// 	name: "nowy task",
// 	done: true,
// 	createdAt: new Date(),
// };

// type Category2 = "work" | "hobby" | "general";
// type Category2AndNumber = Category | number;
