// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = ["Wyrzucić śmieci", "Pójść na siłkę", "nakarmić koty"];

const render = () => {
	tasksContainerElement.innerHTML = "";
	tasks.forEach((task) => {
		const taskElement: HTMLElement = document.createElement("li");
		taskElement.innerHTML = task;
		tasksContainerElement.appendChild(taskElement);
	});
};

const addTask = (task: string) => {
	tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
	event.preventDefault();
	addTask(taskNameInputElement.value);
	render();
});

render();
