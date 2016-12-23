var person = {};

person.firstName = 'Leticia';
//or person['firstName'] = 'Leticia';
person.lastName = 'Becker';
person.age = 24;

//to delete a property of an object:
delete person.age;

function greetUser (person) {
  console.log('Hello ' + person.firstName + ' ' + person['lastName']);
}

greetUser(person);

// another way:

var person = {
  gender: 'male',
  'eyeColor': 'brown'
};


//challenge
var pet = {
  name: 'Patches',
  type: 'Dog',
};

function printPet (pet) {
  console.log('Your ' + pet.type + ' is named ' + pet.name);
}

printPet(pet);