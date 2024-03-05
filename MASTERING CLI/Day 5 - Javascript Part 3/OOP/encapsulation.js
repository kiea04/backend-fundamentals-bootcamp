// Encapsulation 

class bankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdrawl(amount) {
    if (this.balance >= amount){
        this.balance -= amount;
    } else {        console.log('Insufficient balance!');
    }
}

getAccountInfo() {
    return `your account number is ${this.accountNumber}, your balance is ${this.balance}`
}
}

const myAccount = new bankAccount("123456789", 1000);
const regelAccount = new bankAccount('987654321', 6000);

regelAccount.deposit(500);
console.log(regelAccount.getAccountInfo());

regelAccount.withdrawl(6501);
console.log(regelAccount.getAccountInfo());

regelAccount.withdrawl(501);
console.log(regelAccount.getAccountInfo());

myAccount.deposit(10000);
console.log(myAccount.getAccountInfo());