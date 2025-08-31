// ====== Initialize balance and transactions ======
let availableBalance = 0;
let transactions = [];

// ====== Helper Functions ======

// Update balance display
function updateBalance() {
    document.getElementById("available-balance").innerText = availableBalance;
}

// Add transaction to history
function addTransaction(type, amount) {
    const date = new Date().toLocaleString();
    transactions.push({ type, amount, balance: availableBalance, date });
    updateTransactionHistory();
}

// Show only selected form and hide others
function showForm(formId) {
    const forms = [
        "send-money-form",
        "mobile-recharge-form",
        "cash-out-form",
        "add-money-form",
        "pay-bill-form",
        "loan-form"
    ];
    forms.forEach(f => {
        document.getElementById(f).style.display = (f === formId) ? "block" : "none";
    });
}

// Update transaction history DOM
function updateTransactionHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    if (transactions.length === 0) {
        historyList.innerHTML = '<p class="text-muted">No transactions yet.</p>';
    } else {
        transactions.forEach(t => {
            const div = document.createElement("div");
            div.className = "list-group-item";
            div.textContent = `${t.date} - ${t.type}: $${t.amount} | Balance: $${t.balance}`;
            historyList.appendChild(div);
        });
    }
}

// ====== Button Event Listeners for Forms ======
document.getElementById("send-money-btn").addEventListener("click", () => showForm("send-money-form"));
document.getElementById("mobile-recharge-btn").addEventListener("click", () => showForm("mobile-recharge-form"));
document.getElementById("cash-out-btn").addEventListener("click", () => showForm("cash-out-form"));
document.getElementById("add-money-btn").addEventListener("click", () => showForm("add-money-form"));
document.getElementById("pay-bill-btn").addEventListener("click", () => showForm("pay-bill-form"));
document.getElementById("loan-btn").addEventListener("click", () => showForm("loan-form"));

// ====== Form Submission ======

// Send Money
document.querySelector("#send-money-form form").addEventListener("submit", function(e){
    e.preventDefault();
    const bank = this.querySelector("select").value;
    const account = this.querySelectorAll("input")[0].value;
    const amount = parseInt(this.querySelectorAll("input")[1].value);
    const pin = parseInt(this.querySelectorAll("input")[2].value);

    if(account.length !== 11) return alert("Invalid account number!");
    if(pin !== 143) return alert("Wrong PIN!");
    if(amount > availableBalance) return alert("Insufficient balance!");

    availableBalance -= amount;
    updateBalance();
    addTransaction("Send Money", amount);
    alert("Money Sent Successfully!");
});

// Mobile Recharge
document.querySelector("#mobile-recharge-form form").addEventListener("submit", function(e){
    e.preventDefault();
    const operator = this.querySelector("select").value;
    const phone = this.querySelectorAll("input")[0].value;
    const amount = parseInt(this.querySelectorAll("input")[1].value);
    const pin = parseInt(this.querySelectorAll("input")[2].value);

    if(phone.length !== 11) return alert("Invalid phone number!");
    if(pin !== 143) return alert("Wrong PIN!");
    if(amount > availableBalance) return alert("Insufficient balance!");

    availableBalance -= amount;
    updateBalance();
    addTransaction("Mobile Recharge", amount);
    alert("Recharge Successful!");
});

// Cash Out
document.querySelector("#cash-out-form form").addEventListener("submit", function(e){
    e.preventDefault();
    const agent = this.querySelectorAll("input")[0].value;
    const amount = parseInt(this.querySelectorAll("input")[1].value);
    const pin = parseInt(this.querySelectorAll("input")[2].value);

    if(agent.length !== 11) return alert("Invalid agent number!");
    if(pin !== 143) return alert("Wrong PIN!");
    if(amount > availableBalance) return alert("Insufficient balance!");

    availableBalance -= amount;
    updateBalance();
    addTransaction("Cash Out", amount);
    alert("Cash Out Successful!");
});

// Add Money
document.querySelector("#add-money-form form").addEventListener("submit", function(e){
    e.preventDefault();
    const account = this.querySelectorAll("input")[0].value;
    const amount = parseInt(this.querySelectorAll("input")[1].value);
    const pin = parseInt(this.querySelectorAll("input")[2].value);

    if(account.length !== 11) return alert("Invalid account number!");
    if(pin !== 143) return alert("Wrong PIN!");

    availableBalance += amount;
    updateBalance();
    addTransaction("Add Money", amount);
    alert("Money Added Successfully!");
});

// Pay Bill
document.querySelector("#pay-bill-form form").addEventListener("submit", function(e){
    e.preventDefault();
    const billType = this.querySelector("select").value;
    const account = this.querySelectorAll("input")[0].value;
    const amount = parseInt(this.querySelectorAll("input")[1].value);
    const pin = parseInt(this.querySelectorAll("input")[2].value);

    if(account.length !== 11) return alert("Invalid account number!");
    if(pin !== 143) return alert("Wrong PIN!");
    if(amount > availableBalance) return alert("Insufficient balance!");

    availableBalance -= amount;
    updateBalance();
    addTransaction(`Pay ${billType} Bill`, amount);
    alert("Bill Paid Successfully!");
});

// Loan
document.querySelector("#loan-form form").addEventListener("submit", function(e){
    e.preventDefault();
    const loanType = this.querySelector("select").value;
    const amount = parseInt(this.querySelectorAll("input")[1].value);
    const pin = parseInt(this.querySelectorAll("input")[2].value);

    if(pin !== 143) return alert("Wrong PIN!");

    availableBalance += amount; // Assuming loan adds balance
    updateBalance();
    addTransaction(`Loan Received: ${loanType}`, amount);
    alert("Loan Applied Successfully!");
});
