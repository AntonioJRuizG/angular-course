export class Person {
	constructor(public name: string, private address: string = 'No address') {}
}

/* class Hero extends Person {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string
	) {
		super(realName, 'New York');
	}
} */

// const ironman = new Hero('Ironmann', 45, 'Tony');

// console.log(ironman);

// Priorizar la composición sobre la herencia evitando extender clases.

class Hero {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string,
		public person: Person
	) {}
}

const chris = new Person('Chris', 'New York');
const thor = new Hero('Thor', 40, 'Chris', chris);

console.log(thor);
