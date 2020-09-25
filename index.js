// creates a user and keeps track of their balance
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}

// creates a transaction obj to allow a user to withdraw money from their balance
class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
  }

  //  finalize and apply the transaction to the account's balance
  commit() {
    this.account.balance -= this.amount;
  }

}

// creates a transaction obj to allow a user to deposit money to their balance
class Deposit {

  constructor(amount) {
    this.amount = amount;
  }

  //  finalize and apply the transaction to the account's balance
  commit() {
    this.account.balance += this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', balance);
