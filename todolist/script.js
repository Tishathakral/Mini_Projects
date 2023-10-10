function add(todoList, task) {
    todoList.push(task);
}

function remove(todoList, taskIndex) {
    if (taskIndex >= 0 && taskIndex < todoList.length) {
        todoList.splice(taskIndex, 1);
    } else {
        console.log("Invalid task index. Task not removed.");
    }
}

const readlineSync = require("readline-sync");
let todoList = [];

let choice = readlineSync.question("Enter your choice ('add', 'list', 'remove', or 'quit'): ");

while (choice !== "quit") {
    if (choice === "add") {
        let num = parseInt(readlineSync.question("Enter the number of tasks you want to add: "));
        for (let i = 0; i < num; i++) {
            let task = readlineSync.question("Enter the task to be added: ");
            add(todoList, task);
        }
    } else if (choice === "list") {
        console.log("**********");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}: ${todoList[i]}`);
        }
        console.log("**********");
    } else if (choice === "remove") {
        let taskIndex = parseInt(readlineSync.question("Enter the task number to be removed: ")) - 1;
        remove(todoList, taskIndex);
    } else {
        console.log("Invalid choice. Please try again.");
    }

    choice = readlineSync.question("Enter your choice: ");
}
 