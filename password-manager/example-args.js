var argv = require('yargs')
	.command('hello', 'Greets the user', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here'
			},
			lastname: {
				demand: true,
				alias: 'ln',
				description: 'Your last name goes here'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);
//argv is an object
//_ is a property of argv
//the _'s value is an array, that stores all the comands passed in

/*
if (argv._[0] === 'hello') {
	console.log('Hello World!');
}
*/

//If we run 'node example-args.js hello --name Leticia' in the command line, a new property called 'name' will be created, with the value 'Leticia'

/*
if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('Hello world!');
}
*/


//// Challenge
//Add the lastname property

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('Hello world!');
}