document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.textContent = taskValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.onclick = function() {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.textContent.replace("delete", "").trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    storedTasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.onclick = function() {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}