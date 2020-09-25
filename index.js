// creates a user and keeps track of their balance
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  
  get balance() {
    let balance = 0;
    this.transactions.forEach((t) => balance += t.value);
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// creates a transaction
class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  // finalize and apply the transaction to the account's balance
  commit() {
    // check if transaction is allowed
    if (this.isAllowed(this.account.balance, this.amount)) {
      // Keep track of the time of the transaction
      this.time = new Date();
      // Add the transaction to the account
      this.account.addTransaction(this);
    } else {
      return console.log(`Oh no, Insufficient balance!`);
    }
  }

}

// allow a user to withdraw money from their balance
class Withdrawal extends Transaction {

  // returns value of change to the balance
  get value() {
    return -this.amount;
  }

  // only allow withdraw if balance is greater than the amount
  isAllowed(balance, amount) {
    return balance >= amount ? true : false;
  }

}

// allow a user to deposit money to their balance
class Deposit extends Transaction {

  // returns value of change to the balance
  get value() {
    return this.amount;
  }

  // always allow deposits
  isAllowed() {
    return true;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

const t1 = new Deposit(500.00, myAccount);
t1.commit();
console.log('Transaction 1:', `$${t1.amount}`);

const t2 = new Withdrawal(500.00, myAccount);
t2.commit();
console.log('Transaction 2:', `$${t2.amount}`);

const t3 = new Withdrawal(125.25, myAccount);
t3.commit();
console.log('Transaction 3:', `$${t3.amount}`);

console.log('Balance:', `$${myAccount.balance}`);
