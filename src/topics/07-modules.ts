import { Product, calculateTax } from './06-function-destructuring';

const shoppingCart: Product[] = [
	{ description: 'Nokia', price: 100 },
	{ description: 'iPad', price: 1000 },
];
const [total, tax] = calculateTax({ products: shoppingCart, tax: 0.15 });

console.log({ total, tax });
export {};
