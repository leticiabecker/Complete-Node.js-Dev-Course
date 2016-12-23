console.log('starting password manager');

// Require: built-in node js function, to access a installed module

//to access everything the 'node-persist' gives us:
var storage = require ('node-persist');

//to get my computer ready to start writing and saving variables (anything! arrays, strings, numbers, etc):
storage.initSync();

//Save a new variable to my machine:
// storage.setItemSync('name', 'Leticia');


// var name = storage.getItemSync('name');
// console.log('Saved name is ' + name);
// as the variable was saved once, it will be able to access it, even if it is not written on the file code here. (in this case, the function is commented)

// Saving an array of objects:
// storage.setItemSync('accounts', [{
//   username: 'Leticia',
//   balance: 0,
// }]);

// Testing if the array was stored:
var accounts = storage.getItemSync('accounts');

/////////// Challenge:

// 1- push on a new account
accounts.push({
  username: 'Lucas',
  balance: 100
});

// 2- save using setItemSync (accounts variable = accounts array)
storage.setItemSync('accounts', accounts);

// 3- comment all code

// 4- run the test
console.log(accounts);