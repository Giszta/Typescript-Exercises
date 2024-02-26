const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
	document.querySelector(".categories");
let selectedCategory: Category;

type Category = "general" | "work" | "gym" | "hobby";

interface Task {
	title: string;
	done: boolean;
	category?: Category;
}

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
	{ title: "Wyrzucić śmieci", done: false },
	{ title: "Pójść na siłkę", done: true, category: "gym" },
	{ title: "nakarmić koty", done: false },
];

const render = () => {
	tasksContainerElement.innerHTML = "";
	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement("li");
		if (task.category) {
			taskElement.classList.add(task.category);
		}
		const id: string = `task-${index}`;
		const labelElement: HTMLLabelElement = document.createElement("label");
		labelElement.innerText = task.title;
		labelElement.setAttribute("for", id);
		const checkboxElement: HTMLInputElement = document.createElement("input");
		checkboxElement.type = "checkbox";
		checkboxElement.name = task.title;
		checkboxElement.id = id;
		checkboxElement.checked = task.done;
		checkboxElement.addEventListener("change", () => {
			task.done = !task.done;
		});

		taskElement.appendChild(labelElement);
		taskElement.appendChild(checkboxElement);

		tasksContainerElement.appendChild(taskElement);
	});
};

const renderCategories = () => {
	categories.forEach((category) => {
		const categoryElement: HTMLElement = document.createElement("li");

		const radioInputElement: HTMLInputElement = document.createElement("input");
		radioInputElement.type = "radio";
		radioInputElement.name = "category";
		radioInputElement.value = category;
		radioInputElement.id = `category-${category}`;
		radioInputElement.addEventListener("change", () => {
			selectedCategory = category;
		});

		const labelElement: HTMLLabelElement = document.createElement("label");
		labelElement.setAttribute("for", `category-${category}`);
		labelElement.innerText = category;

		categoryElement.appendChild(radioInputElement);
		categoryElement.appendChild(labelElement);

		categoriesContainerElement.appendChild(categoryElement);
	});
};
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
	render();
});

renderCategories();
render();
