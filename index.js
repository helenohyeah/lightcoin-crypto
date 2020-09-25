// creates a user and keeps track of their balance
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
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
    this.account.balance += this.value;
  }
}

// allow a user to withdraw money from their balance
class Withdrawal extends Transaction {

  // returns value of change to the balance
  get value() {
    return -this.amount;
  }

}

// allow a user to deposit money to their balance
class Deposit extends Transaction {

  // returns value of change to the balance
  get value() {
    return this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Deposit(500.00, myAccount);
t1.commit();
console.log('Transaction 1:', `$${t1.amount}`);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', `$${t2.amount}`);

t3 = new Withdrawal(125.25, myAccount);
t3.commit();
console.log('Transaction 3:', `$${t3.amount}`);

console.log('Balance:', `$${myAccount.balance}`);
console.log(myAccount);
