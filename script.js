//TODO 📦 Module 3 - Lesson 10: Object Challenges

//TODO Guided Challenges

//* 🧪 Filter by Property and Sort

//? 🔹 Scenario:
//  We have a list of books, and we want to:
//  Only keep the books that are marked as read: true
//  Sort them by year, from most recent to oldest

//? 🔍 Data:

const books = [
    { title: "Eloquent JavaScript", year: 2018, read: true },
    { title: "You Don't Know JS", year: 2015, read: false },
    { title: "JavaScript: The Good Parts", year: 2008, read: true },
    { title: "The Pragmatic Programmer", year: 2019, read: true },
];

//! Solution

const readBooks = books
    .filter(book => book.read === true)
    .sort((a, b) => {
        return b.year - a.year;
    });

console.log(readBooks);

//* 🧪 Find Students Who Passed and Format Their Names

//? 🔹 Scenario:
//  We are given an array of student objects. Each has a name and score:

const students = [
    { name: "Anna", score: 72 },
    { name: "Ben", score: 89 },
    { name: "Clara", score: 95 },
    { name: "Derek", score: 60 },
];

//? 🎯 Task:
//  1. Only include students with a score of 70 or higher
//  2. Format each passing student’s name into a string like:   "Anna passed with 72 points"

//! Solution

const higherScoreStudents = students
    .filter(student => student.score >= 70)
    .map(student => `${student.name} passed with ${student.score} points`);

    console.log(higherScoreStudents);

//* 🧪 Count Items by Category

//?🔹 Scenario:
//  We are managing a warehouse inventory system. Each product has a name and category.

const items = [
    { name: "Desk", category: "furniture" },
    { name: "Chair", category: "furniture" },
    { name: "Monitor", category: "electronics" },
    { name: "Mouse", category: "electronics" },
    { name: "Lamp", category: "furniture" },
];

//? 🎯 Task:
//  Count how many items are in each category.

//! Solution

const counts = {};

for (i = 0; i < items.length; i++) {
    const category = items[i].category;
    if (counts[category]) {
        counts[category] += 1;
    } else {
        counts[category] = 1;
    }
}

console.log(counts);


//TODO 🎯 Object Challenges

//* 🧪 Exercise 1: Filter Active Users
//  We have a list of user accounts. Your job is to return only the names of active users.

const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true },
];

//? 🧠 Task:
//  Return an array that looks like:    ["Alice", "Charlie"]

//! Solution

const activeNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(activeNames);

//* 🧪 Exercise 2: Calculate Total Inventory Value

const inventory = [
    { name: "Laptop", price: 1000, quantity: 3 },
    { name: "Phone", price: 500, quantity: 5 },
    { name: "Tablet", price: 750, quantity: 2 },
];

//? 🧠 Task:
//  Calculate the total value of all items in inventory.
//  The total value is:

//! Solution

const totalValue = inventory
    .reduce((acc, item) => {
        const itemValue = item.price * item.quantity;
        return acc + itemValue;
}, 0);

console.log(totalValue);

//* 🧪 Exercise 3: Find the Most Expensive Item
//  We are managing product listings. Each product has a name and price:

const products = [
    { name: "Desk", price: 300 },
    { name: "Chair", price: 150 },
    { name: "Monitor", price: 400 },
    { name: "Lamp", price: 80 }
];

//? 🧠 Task:
//  Find the name of the most expensive product.

//! Solution

const expensiveProduct = products.reduce((highest, current) => {
    return current.price > highest.price ? current : highest;
});

console.log(expensiveProduct.name);

//* 🧪 Exercise 4: Merge Two Arrays of Objects by ID

//? 🔹 Scenario:
//  We have two arrays. Each contains user data. Some users exist in both arrays (matched by id). Your job is to merge them, combining data from both when IDs match.

//* 📦 Input:

const baseUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

const additionalData = [
    { id: 2, age: 30 },
    { id: 1, age: 25 }
];

//* 🎯 Goal: Produce a single array.

[
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
]

//! Solution

const mergedData = [];

for (const baseUser of baseUsers) {
    const foundAdditionData = additionalData.find(data => data.id === baseUser.id);
    if (foundAdditionData) {
        const combinedData = { ...baseUser, ...foundAdditionData };
        mergedData.push(combinedData);
    } else {
        mergedData.push(baseUser);
    }
};

console.log(mergedData);


//* 🧪 Exercise 5: Add Default Settings to User Profiles

//? 🔹 Scenario:
//  We have a list of user objects. Some users are missing certain profile settings. You want to ensure every user has all required settings, using default values if they are missing.

//* 📦 Input:

const users2 = [
    { id: 1, name: "Alice", theme: "dark" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie", theme: "light" },
];

const defaultSettings = {
    theme: "light",
    notification: true
};

//* 🎯 Goal:    Return a new array where each user has all settings from defaultSettings, but existing values are not overwritten.

//! Solution

const updatedUsers = users2.map(user => {
    const updated = { ...user };
    Object.keys(defaultSettings).forEach(key => {
        if (!(key in updated)) {
            updated[key] = defaultSettings[key];
        }
    });
    return updated;
});

console.log(updatedUsers);

//* 🧪 Exercise 6: Group Items by Category

//? 🔹 Scenario:
//  We have got a product catalog, and we want to organize the items by category into a grouped object.

//* 📦 Input:

const products2 = [
    { name: "Desk", category: "furniture" },
    { name: "Chair", category: "furniture" },
    { name: "Monitor", category: "electronics" },
    { name: "Mouse", category: "electronics" },
    { name: "Lamp", category: "furniture" },
];

//* 🎯 Goal: Group the products by category in an object.

//? {
//      furniture: ["Desk", "Chair", "Lamp"],
//      electronics: ["Monitor", "Mouse"]
//  };

//! Solution

const grouped = {};

for (const product of products2) {
    const category = product.category;

    if (!grouped[category]) {
        grouped[category] = [];
    }

    grouped[category].push(product.name);
};

console.log(grouped);

//* 🧪 Challenge 7: Status Summary Generator

//? 🔹 Scenario:
//  We have a list of tasks, each with a title and a completed status.

//* 📦 Input:

const tasks = [
    { title: "Write proposal", completed: true },
    { title: "Fix bugs", completed: false },
    { title: "Plan meeting", completed: true },
    { title: "Email client", completed: false },
];

//* 🎯 Goal:
//  Generate a new array of strings describing the status of each task.

//? [
//  "Write proposal: ✅ Completed",
//  "Fix bugs: ❌ Not completed",
//  "Plan meeting: ✅ Completed",
//  "Email client: ❌ Not completed"
//  ]

//! Solution

const summaries = [];

for (const task of tasks) {
    if (task.completed) {
        summaries.push(`${task.title}: ✅ Completed`);
    } else {
        summaries.push(`${task.title}: ❌ Not completed`);
    }
};

console.log(summaries);

//* 🧪 Exercise 8: Convert Product Prices with Tax

//? 🔹 Scenario:
//  We have a list of products. Each has a name and price (before tax). Your job is to calculate the total price including tax, and return a new array of objects.

//* 📦 Input:

const products3 = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 400 },
];

const taxRate = 0.2

//* 🎯 Goal:
//  Return a new array.

//? [
//  { name: "Laptop", price: 1000, total: 1200 },
//  { name: "Phone", price: 600, total: 720 },
//  { name: "Tablet", price: 400, total: 480 }
//  ]

//! Solution

const newPrices = products3.map(product => {
    return {
        name: product.name,
        price: product.price,
        total: product.price + product.price * taxRate
    }
});

console.log(newPrices);

//* 🧪 Exercise 9: Find the Top Scoring Student

//? 🔹 Scenario:
//  We have a list of students and their test scores. The goal is to find the student with the highest score and return a sentence describing them.

//* 📦 Input:

const students2 = [
    { name: "Alice", score: 88 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 82 },
];

//* 🎯 Goal:
//  Log the sentence:

//  "Bob scored the highest with 95 points."

//! Solution

let highestScore = 0;

for (let i = 0; i < students2.length; i++) {
    if (!highestScore || students2[i].score > highestScore.score) {
        highestScore = students2[i];
    }
};

console.log(`${highestScore.name} scored the highest with ${highestScore.score} points.`);

//* 🧪 Exercise 10: Generate Discount Messages for Eligible Customers
//? 🔹 Scenario:
//  A store wants to send discounts to the loyal customers — those who have spent $100 or more.

//* 📦 Input:

const customers = [
    { name: "Alice", totalSpent: 120 },
    { name: "Bob", totalSpent: 80 },
    { name: "Charlie", totalSpent: 150 },
    { name: "Diana", totalSpent: 40 }
];

//* 🎯 Goal:
//  Generate an array of messages for eligible customers.

//? [
//  "Alice qualifies for a discount!",
//  "Charlie qualifies for a discount!"
//  ]

//! Solution

const loyalCustomers = customers
    .filter(customer => customer.totalSpent >= 100)
    .map(customer => `${customer.name} qualifies for a discount!`);

console.log(loyalCustomers);
