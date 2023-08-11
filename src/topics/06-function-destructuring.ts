export interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description: 'Nokia AI',
	price: 100,
};

const tablet: Product = {
	description: 'Samsung T4',
	price: 400,
};

interface TaxCalculationOptions {
	tax: number;
	products: Product[];
}

export function calculateTax(options: TaxCalculationOptions): number[] {
	let total = 0;

	// Without destructuring
	options.products.forEach((product) => {
		total += product.price;
	});

	// With destructuring
	options.products.forEach(({ price }) => {
		total += price;
	});

	return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.25;

// No destructuring
const result = calculateTax({
	products: shoppingCart,
	tax: tax,
});
console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);

// With arraydestructuring
const [total, taxTotal] = calculateTax({
	products: shoppingCart,
	tax: tax,
});
console.log('Total: ', total);
console.log('Tax: ', taxTotal);
