export function whatsMyTYpe<T>(argument: T): T {
	return argument;
}

const iAmString = whatsMyTYpe<string>('Hello world');
const iAmNumber = whatsMyTYpe<number>(123);
const iAmArray = whatsMyTYpe<string[]>(['2', 'hi', 'you']);
console.log(iAmString.split(' ', 1));
console.log(iAmNumber.toFixed());
console.log(iAmArray.join('-'));
