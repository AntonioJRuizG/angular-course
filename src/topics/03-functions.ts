function addNumbers(a: number, b: number): number {
	return a + b;
}

const multiplyNumbers = (a: number, b: number, c?: number): string => {
	return `${a * b}`;
};

const sum: number = addNumbers(1, 2);
const mult: string = multiplyNumbers(2, 3);

console.log({ sum, mult });

interface Character {
	name: string;
	hp: number;
	showHP: () => void;
}

const strider: Character = {
	name: 'Strider',
	hp: 50,
	showHP() {
		console.log(`Life points ${this.hp}`);
	},
};

const healCharacter = (character: Character, amount: number) => {
	character.hp += amount;
};

healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHP();

export {};
