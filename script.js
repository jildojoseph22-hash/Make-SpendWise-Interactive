// =====================================
// 1. VARIABLES
// =====================================

let budget = 0;

// Store expenses in an array.
let expenses = [];


// =====================================
// 2. SELECT HTML ELEMENTS
// =====================================

const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");

const budgetInput = document.getElementById("budgetAmount");
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseCategoryInput = document.getElementById("expenseCategory");

const totalBudgetElement = document.getElementById("totalBudget");
const totalExpensesElement = document.getElementById("totalExpenses");
const remainingBalanceElement = document.getElementById("remainingBalance");

const budgetMessage = document.getElementById("budgetMessage");
const expenseList = document.getElementById("expenseList");
const emptyMessage = document.getElementById("emptyMessage");


// =====================================
// 3. CALCULATE TOTAL EXPENSES
// =====================================

function calculateTotalExpenses() {
    let total = 0;

    // Loop through the expenses array.
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// =====================================
// 4. CALCULATE REMAINING BALANCE
// =====================================

function calculateBalance() {
    return budget - calculateTotalExpenses();
}


// =====================================
// 5. FORMAT KENYAN CURRENCY
// =====================================

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES"
    }).format(amount);
}


// =====================================
// 6. DISPLAY BUDGET FEEDBACK
// =====================================

function updateBudgetMessage() {
    const total = calculateTotalExpenses();
    const balance = calculateBalance();

    if (budget <= 0) {
        budgetMessage.textContent =
            "Please set a budget to get started.";

    } else if (balance < 0) {
        budgetMessage.textContent =
            "Warning! You have exceeded your budget by " +
            formatCurrency(Math.abs(balance)) + ".";

    } else if (balance === 0) {
        budgetMessage.textContent =
            "Your budget has been fully spent.";

    } else if (total >= budget * 0.8) {
        budgetMessage.textContent =
            "Careful! You have used at least 80% of your budget.";

    } else {
        budgetMessage.textContent =
            "Great! You are within your budget. Keep it up!";
    }
}


// =====================================
// 7. UPDATE THE DASHBOARD
// =====================================

function updateDashboard() {
    const total = calculateTotalExpenses();
    const balance = calculateBalance();

    totalBudgetElement.textContent = formatCurrency(budget);
    totalExpensesElement.textContent = formatCurrency(total);
    remainingBalanceElement.textContent = formatCurrency(balance);

    // Change the balance color based on the budget.
    if (balance < 0) {
        remainingBalanceElement.style.color = "#c0392b";
    } else {
        remainingBalanceElement.style.color = "#176b45";
    }

    updateBudgetMessage();
}


// =====================================
// 8. DISPLAY EXPENSES
// =====================================

function displayExpenses() {
    // Clear the old table contents.
    expenseList.replaceChildren();

    // Display a message if there are no expenses.
    if (expenses.length === 0) {
        emptyMessage.textContent = "No expenses added yet.";
    } else {
        emptyMessage.textContent = "";
    }

    // Loop through the array.
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatCurrency(expense.amount);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;

        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.dataset.index = i;

        actionCell.appendChild(deleteButton);

        row.append(
            nameCell,
            amountCell,
            categoryCell,
            dateCell,
            actionCell
        );

        expenseList.appendChild(row);
    }
}


// =====================================
// 9. HANDLE THE BUDGET FORM
// =====================================

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        alert("Please enter a budget greater than zero.");
        return;
    }

    // Warn if the new budget is below existing expenses.
    const total = calculateTotalExpenses();

    if (enteredBudget < total) {
        const confirmed = confirm(
            "Your budget is lower than your current expenses. Continue?"
        );

        if (!confirmed) {
            return;
        }
    }

    budget = enteredBudget;

    updateDashboard();

    budgetForm.reset();

    alert("Your budget has been updated successfully!");
});


// =====================================
// 10. HANDLE THE EXPENSE FORM
// =====================================

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    // Validate the expense name.
    if (name === "") {
        alert("Please enter an expense name.");
        return;
    }

    // Validate the expense amount.
    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Please enter an amount greater than zero.");
        return;
    }

    // Validate the category.
    if (category === "") {
        alert("Please select a category.");
        return;
    }

    // Create a new expense record.
    const newExpense = {
        name: name,
        amount: amount,
        category: category,
        date: new Date().toLocaleDateString("en-KE")
    };

    // Add the expense to the array.
    expenses.push(newExpense);

    // Refresh the dashboard and table.
    displayExpenses();
    updateDashboard();

    // Clear the form.
    expenseForm.reset();
});


// =====================================
// 11. DELETE EXPENSES
// =====================================

expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const index = Number(event.target.dataset.index);

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < expenses.length
        ) {
            expenses.splice(index, 1);

            displayExpenses();
            updateDashboard();
        }
    }
});


// =====================================
// 12. START THE APPLICATION
// =====================================

updateDashboard();
displayExpenses();