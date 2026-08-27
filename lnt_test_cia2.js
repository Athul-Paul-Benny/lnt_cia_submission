// ======================================
// Task 1: Command-Line Task Logger — Node.js Development Setup & Running Node.js Files
// ======================================
console.log("Task Logger Started");


// ======================================
// Task 2: Command-Line Task Logger — Understanding How Node.js Works & Node.js Architecture
// ======================================
const fs = require("fs");

fs.readFile("tasks.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }

    console.log("Task File Contents:");
    console.log(data);
});

console.log("Reading tasks asynchronously...");


// ======================================
// Task 3: Command-Line Task Logger — NodeJS Resources & Working with NodeJS Examples
// ======================================
fs.readFile("tasks.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("Tasks from tasks.txt:");
    console.log(data);
});


// ======================================
// Task 4: Command-Line Task Logger — NodeJS REPL Introduction
// ======================================
let currentDate = new Date();

console.log("Current Date and Time:", currentDate.toLocaleString());


// ======================================
// Task 5: Command-Line Task Logger — Node Process Object, Command Line & Terminal I/O
// ======================================
let task = process.argv.slice(2).join(" ");

if (task) {
    console.log("Task:", task);

    process.stdout.write("Save task? (y/n): ");

    process.stdin.once("data", input => {
        let answer = input.toString().trim().toLowerCase();

        if (answer === "y") {
            console.log("Task saved!");
        } else {
            console.log("Task not saved.");
        }

        process.stdin.pause();
    });
} else {
    console.log("No task provided.");
}


// ======================================
// Task 6: Command-Line Task Logger — Node Packages – NodeMon & Monitoring Applications
// ======================================
// Install with:
// npm install --save-dev nodemon
// Run with:
// npm run dev

console.log("Nodemon can automatically restart this application when the file changes.");


// ======================================
// Task 7: Command-Line Task Logger — Debugging Node Programs & Debugging Techniques
// ======================================
let debugTask = "Debugging completed";

console.log(debugTask);


// ======================================
// Task 8: Command-Line Task Logger — Asynchronous Programming & Callback Functions
// ======================================
function saveTaskCallback(task, callback) {
    fs.appendFile("tasks.txt", task + "\n", err => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

saveTaskCallback("Complete Node.js assignment", err => {
    if (err) {
        console.log("Failed to save task:", err.message);
    } else {
        console.log("Task saved successfully!");
    }
});


// ======================================
// Task 9: Command-Line Task Logger — Node Timers & Global Objects
// ======================================
setTimeout(() => {
    console.log("Reminder: review your tasks");
}, 5000);

let taskInterval = setInterval(() => {
    fs.readFile("tasks.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Tasks logged: 0");
            return;
        }

        let count = data.trim() === "" ? 0 : data.trim().split("\n").length;

        console.log("Tasks logged:", count);
    });
}, 3000);

setTimeout(() => {
    clearInterval(taskInterval);
    console.log("Task counter stopped.");
}, 15000);


// ======================================
// Task 10: Command-Line Task Logger — JavaScript Promises
// ======================================
function saveTaskPromise(task) {
    return fs.promises.appendFile("tasks.txt", task + "\n");
}

saveTaskPromise("Complete Promise task")
    .then(() => {
        console.log("Task saved successfully using Promise!");
    })
    .catch(err => {
        console.log("Failed to save task:", err.message);
    });