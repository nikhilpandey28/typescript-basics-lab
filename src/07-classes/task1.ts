class BankAccount {

    readonly accountId: string;
    private balance: number;

    constructor(accountId: string, initialBalance: number) {
        this.accountId = accountId;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }

}

const account = new BankAccount("ACC-101", 1000);

account.deposit(500);

account.withdraw(300);

console.log(account.getBalance());

// Intentional Error
// console.log(account.balance);