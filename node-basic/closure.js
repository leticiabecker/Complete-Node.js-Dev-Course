//Closure: a function created inside of another function. It is about defining functions that have access to parent function variables.

//A function that will create another function
	//it follows the same rules of Variable Scope.
function greetMaker (name) {
	function greet () {
		console.log('Hello '+ name);
	}
	return greet;
}

var greetLeticia = greetMaker('Leticia');
//greetLeticia is actually a function

greetLeticia();

var greetWorld = greetMaker('world');
greetWorld();


// Challenge

/* function createAdder(baseNumber)
		return function (numberToAdd)

	add up baseNumber & numberToAdd
	return result;
*/

function createAdder (baseNumber) {
	function result (numbertoAdd) {
		return baseNumber + numbertoAdd;
	}
	return result;
}

// Or
/* function createAdder (baseNumber) {
	return function result (numbertoAdd) {
		return baseNumber + numbertoAdd;
	}
} */


var addTen = createAdder(10)
console.log(addTen(2));


