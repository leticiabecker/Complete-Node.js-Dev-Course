///////// Bank account Project 2fun

// Accounts array
var accounts = [];

// Account object - properties: balance, username


// 1- function creatAccount(account) to store accounts to an array of accounts
  // push onto accounts array
  // return account

function creatAccount (account) {
  accounts.push(account);
  return account;
}
// var account = {
//   balance: ,
//   username: '',
// };
// We have to add the properties for the new account and save the object as a variable, giving it a name.



// 2- function getAccount(username)
//find matching account using forEach

function getAccount (username) {
  var matchedAccount;

  accounts.forEach(function (account) {
      if (account.username === username) {
        matchedAccount = account;
      }
  });

  return matchedAccount;
}


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

// deposit(account, 1000);
// console.log(getBalance(account));

// withdraw(account, 121);
// console.log(getBalance(account));




// Testing

var leticiasAccount = creatAccount({
  username: 'leticiabecker',
  balance: 0,
});

deposit(leticiasAccount, 200);
console.log(getBalance(leticiasAccount));

withdraw(leticiasAccount, 80);
console.log(getBalance(leticiasAccount));


var existingAccount = getAccount('leticiabecker');
console.log(getBalance(existingAccount));
// In this case, we don't know the name of the account object, but we do know the username. So, we use the getAccount function to find the correspondent account for the user name 'leticiabecker'. Once we find the account, we store it in a variavle and can reach other properties of the object, like the balance.


// Creating other accounts
var jensAccount = creatAccount({
  username: 'jenny',
  balance: 100,
});

//to see what is stored inside de Array accounts
console.log(accounts);

var existingJensAccount = getAccount('jenny');
console.log(existingJensAccount);







