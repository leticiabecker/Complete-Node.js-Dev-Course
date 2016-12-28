console.log('starting password manager');

// Require: built-in node js function, to access a installed module

//to access everything the 'node-persist' gives us:
var storage = require('node-persist');

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
// var accounts = storage.getItemSync('accounts');

/////////// Challenge:

// 1- push on a new account
// accounts.push({
//   username: 'Lucas',
//   balance: 100
// });

// 2- save using setItemSync (accounts variable = accounts array)
// storage.setItemSync('accounts', accounts);

// // 3- comment all code

// // 4- run the test
// console.log(accounts);


/////////// Password Manager Project: /////////////

/* Accounts attributes:
account.name Facebook
account.username User12!
account.password Password123!
*/

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	// if accounts wasn't created before, it is undefined (use typeof)
	//  in this case, set accounts = []
	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	// push on new account
	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	// return account
	return account;
}

function getAccount (accountName) {
	// var accounts, use getItemSync
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	// iterate over array (loop), return matching account, else undefined
	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

// Testing the Project:

//1- create account
createAccount({
	name: 'Facebook',
	username: 'someemail@gmail.com',
	password: 'Password123!'
});

//2- comment the 1st step

//3- call getAccount function

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);

//4- run npm start on Terminal