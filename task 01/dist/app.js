import { renderCategories } from "./helpers/render-categories.js";
import { render } from "./helpers/render-task.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    { title: "Wyrzucić śmieci", done: false },
    { title: "Pójść na siłkę", done: true, category: "gym" },
    { title: "nakarmić koty", done: false },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
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
