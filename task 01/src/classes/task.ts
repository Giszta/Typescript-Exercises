import { Category } from "../types/types.js";

interface Logger {
	logCreationDate: (addtion: string) => void;
}

export class TaskClass implements Logger {
	name: string = "Nowe zadanie";
	done: boolean = true;
	category?: Category;

	private createdAt: Date;

	constructor(
		name: string,
		done: boolean,
		category: Category = Category.GENERAL
	) {
		this.name = name;
		this.done = done;
		this.category = category;
		this.createdAt = new Date();
	}

	logCreationDate(extra: string) {
		console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
	}
}
