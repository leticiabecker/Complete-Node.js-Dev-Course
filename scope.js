// Variable Scope

var age = 24;
// This is a global variable, because it is defined  outside of any function, but the reverse is not true. A local variable cannot be accessed outside the function.

fuunction localFunction () {
	//console.log(age);

	// var name = 'name';
	// console.log(name);


	//updating the variable that was declared outside the function:
	//age = 0; 

	var age = 0; //will create a new variable with the same name, but inside the function.

	age = 0; //it is gonna get the local variable and never check if there is any global variable with the same name.
}


localFunction();
console.log(age);