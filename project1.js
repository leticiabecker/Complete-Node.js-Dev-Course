//Bank account Project

// Object
var account = {
	balance: 0,
};

// function deposit(account, amount)
function deposit (account, amount) {
	account.balance += amount;
	//or account.balance = account.balance + amount;
}


// function withdraw(account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
	//or account.balance = account.balance - amount;
}


// function getBalance(account)
function getBalance (account) {
	return account.balance
}

deposit(account, 1000);
console.log(getBalance(account));

withdraw(account, 121);
console.log(getBalance(account));