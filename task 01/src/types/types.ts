export class Task {
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

export enum Category {
	GENERAL = "general",
	WORK = "work",
	GYM = "gym",
	HOBBY = "hobby",
	SOCIAL = "social",
}
