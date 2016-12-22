var name = undefined;

console.log(name);

function doesNothing () {

}

console.log(doesNothing());

//when there is no return statement, it returns "undefined"


//if we do not set a variable before, the function will crash. So it is necessary to set the variable or to check the 'typeof' the variable, even if it is not set.

if (typeof x === 'undefined') {
  console.log('x is undefined');
}


//challenge

//function greetUser(name)

function greetUser (name) {
  if (typeof name === 'undefined') {
    console.log('Hello World');
  } else {
    console.log('Hello ' + name + '!');
  }
}

greetUser('Leticia');
greetUser();