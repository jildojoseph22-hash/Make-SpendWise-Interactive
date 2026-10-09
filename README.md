# SpendWise - Personal Budget and Expense Tracker

## 1. Project Description

SpendWise is a personal budget and expense tracking application
developed using HTML, CSS, and JavaScript.

The application helps users manage their monthly budgets, record
expenses, calculate total spending, and monitor their remaining
balance.

The goal of SpendWise is to encourage better financial management
and help users make informed budgeting decisions.

## 2. Features Implemented

- Set a monthly budget.
- Add expenses with names, amounts, categories, and dates.
- Display multiple expense records in a table.
- Calculate total expenses automatically.
- Calculate the remaining budget.
- Display warnings when the budget is almost exhausted.
- Notify users when their expenses exceed their budget.
- Delete expense records.
- Update dashboard information dynamically.
- Validate user input.
- Provide a responsive interface for different screen sizes.

## 3. Technologies Used

- HTML5 for the structure of the application.
- CSS3 for styling and responsive design.
- JavaScript for calculations, decision-making, and interactivity.
- Git and GitHub for version control and project submission.

## 4. JavaScript Concepts Implemented

### A. Variables

Variables store the budget and expense information.

Example:

    let budget = 0;
    let expenses = [];

The budget variable stores the user's budget, while the expenses
array stores multiple expense records.

### B. Conditional Statements

The application uses if, else if, and else statements to make
decisions based on the user's financial information.

For example, the application checks whether:

- The user has set a budget.
- Expenses have exceeded the budget.
- The budget has been fully spent.
- At least 80% of the budget has been used.
- The user is still within the budget.

These conditions allow SpendWise to provide appropriate feedback.

### C. Arrays and Objects

The expenses array stores multiple expense records.

Each expense is represented by an object containing:

- Name
- Amount
- Category
- Date

The push() method adds a new expense to the array, while the
splice() method removes an expense when the user clicks Delete.

### D. Loops

For loops process the expense records stored in the array.

The application uses loops to:

- Calculate total expenses.
- Display expense records in the table.

This allows the application to process multiple expenses
without creating separate variables for every record.

### E. DOM Manipulation

DOM manipulation allows JavaScript to update the webpage
dynamically.

The application uses methods and properties such as:

- document.getElementById()
- document.createElement()
- textContent
- appendChild()
- replaceChildren()

These update dashboard figures, display messages, and create
expense table rows.

### F. Event Handling

The application uses addEventListener() to respond to user actions.

Event listeners handle:

- Budget form submissions.
- Expense form submissions.
- Delete button clicks.

The preventDefault() method prevents form submissions from
refreshing the page.

### G. Functions

Reusable functions perform important calculations and updates.

Examples include:

- calculateTotalExpenses()
- calculateBalance()
- formatCurrency()
- updateBudgetMessage()
- updateDashboard()
- displayExpenses()

These functions make the code easier to understand and maintain.

## 5. How the Application Works

1. The user enters a monthly budget.
2. JavaScript validates the budget and updates the dashboard.
3. The user enters an expense name, amount, and category.
4. JavaScript validates the expense information.
5. The expense is stored as an object in the expenses array.
6. The application recalculates total expenses and the remaining
   balance.
7. The expense table and dashboard update automatically.
8. The user can delete an expense, and the calculations update again.
9. Conditional statements provide feedback about the user's budget.

## 6. Challenges Encountered and Solutions

### Challenge 1: Calculating Total Expenses

Solution:
I used a for loop to process the expense records and calculate
the total amount spent.

### Challenge 2: Updating Dashboard Information

Solution:
I used DOM manipulation to display updated totals and remaining
balances directly on the webpage.

### Challenge 3: Handling Invalid Input

Solution:
I used conditional statements to validate budget amounts,
expense names, expense amounts, and categories before accepting
the information.

### Challenge 4: Monitoring the Budget

Solution:
I used conditional statements to compare expenses against the
budget and display suitable messages.

### Challenge 5: Managing Multiple Expenses

Solution:
I used an array of objects to store and manage multiple expense
records.

## 7. Project Files

- index.html: Contains the structure of the SpendWise application.
- style.css: Contains the styling and responsive layout.
- script.js: Contains the JavaScript logic and interactive features.
- README.md: Documents the project, features, and implementation.

## 8. Limitations and Future Improvements

Currently, budget and expense records are stored in JavaScript
variables and arrays. They reset when the page is refreshed.

Future improvements could include:

- Saving data with localStorage.
- Adding expense filtering by category.
- Displaying spending charts.
- Generating monthly financial reports.
- Supporting multiple budgets.

## 9. Conclusion

SpendWise demonstrates how HTML, CSS, and JavaScript can be
combined to create an interactive budgeting application.

The project applies variables, arrays, objects, loops, conditional
statements, functions, DOM manipulation, and event listeners to
solve a practical problem.

The application helps users track spending and monitor their
remaining budget.

## Author

PLP Academy Software Engineering Student