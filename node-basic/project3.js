///////// Bank account Project 3

// Accounts array
var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	// accounts.forEach(function (account) {
	// 		if (account.username === username) {
	// 			matchedAccount = account;
	// 		}
	// });


	//replace the forEach loop by the for loop or the while loop
	//accounts[1]
	//accounts.length

	for (var i = 0; i < accounts.length; i++) {
			if (accounts[i].username === username) {
				matchedAccount = accounts[i];
			}
	}

	return matchedAccount;
}



// only accept number, use typeof
function deposit (account, amount) {
	if (typeof amount === 'number') {
		account.balance += amount;
	} else {
		console.log('Sorry, deposit failed. Invalid amount.');
	}
}


// only accept number, use typeof
function withdraw (account, amount) {
	if (typeof amount === 'number') {
	account.balance -= amount;
	} else {
		console.log('Sorry, withdraw failed. Invalid amount.');
	}
}


// function getBalance(account)
function getBalance (account) {
	return account.balance
}

// function creatBalanceGetter(account) 
	//return function()
		//account.balance (return it)

function createBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}

var leticia = createAccount({
	username: 'leticiabecker',
	balance: 1000,
})

deposit(leticia, 200);
withdraw(leticia, 'my string');

var leticia2 = getAccount('leticiabecker');
var getLeticia2Balance = createBalanceGetter(leticia2);

console.log(getLeticia2Balance());



