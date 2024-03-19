// union types

let someId: number | string;

someId = 1;
someId = "2";

let email: string | null = null;
email = "mario@netninja.dev";
email = null;
type Id = number | string;

let anotherId: Id;
anotherId = "1244dfwnik4";
anotherId = 5;

// union type pitfall

function swapIdType(id: Id): Id {
	//can only use props and methods common to both number and string types
	//parseInt(id)---> not allowed

	return id;
}
