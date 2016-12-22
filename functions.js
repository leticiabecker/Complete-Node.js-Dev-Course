function greetUser (name, lastName) {
	console.log('Hello ' + name + ' ' + lastName + '!');
}

greetUser('Leticia', 'Becker');




function greetUser (name, lastName) {
	return 'Hello ' + name + ' ' + lastName + '!';
}

var greeting = greetUser('Leticia', 'Becker');
console.log(greeting);



//challenge

function add (a, b) {
	return a + b;
}

var sum = add(1, 2);
console.log(sum);

console.log(add(2,3));