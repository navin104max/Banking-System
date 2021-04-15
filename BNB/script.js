function Account(name, balance) {
    this.name = name;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    if (this._isPositive(amount)) {
        this.balance += amount;
        console.info(`Deposit: Rs{this.name} new balance is Rs{this.balance}`);
        return true;
    }
    return false;
}

Account.prototype.withdraw = function(amount) {
    if (this._isAllowed(amount)) {
        this.balance -= amount;
        console.info(`Withdraw: Rs{this.name} new balance is Rs{this.balance}`);
        return true;
    }
    return false;
}

Account.prototype.transfer = function(amount, account) {
    if (this.withdraw(amount) && account.deposit(amount)) {
        console.info(`Transfer: Rs{amount} has been moved from Rs{this.name} to Rs{account.name}`);
        return true;
    }
    return false;
}


Account.prototype._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
        console.error('Amount must be positive!');
        return false;
    }
    return true;
}

Account.prototype._isAllowed = function(amount) {
    if (!this._isPositive(amount)) return false;

    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
        console.error('You have insufficent funds!');
        return false;
    }
    return true;
}

const a = new Account('a', 100);
const b = new Account('b', 0);


output.innerText += `before:  a: Rs{a.balance}, b: Rs{b.balance}\n`;

a.transfer(100, b);

output.innerText += `after:  a: Rs{a.balance}, b: Rs{b.balance}\n`



function sendMoney() {
    var table = document.getElementById("myTable");
    var transferFrom = document.getElementById("TransferFrom").value;
    var transferTo = document.getElementById("TransferTo").value;
    var amount = document.getElementById("enterAmount").value;
    var row = table.insertRow(1);
    row.classList.add("table-light");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = transferFrom;
    cell2.innerHTML = transferTo;
    cell3.innerHTML = amount;
}