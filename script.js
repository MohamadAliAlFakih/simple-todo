const addButton = document.getElementById("add-button");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");


function addTask() {
    const task = inputTask.value.trim();
    if (task == "") {
        return
    }

    const newTask = document.createElement("li");
    const span = document.createElement("span");

    taskList.appendChild(newTask);
    newTask.appendChild(span);
    span.textContent = task;

    inputTask.value = "";
}

function completeTask(event) {
  if (event.target.tagName == "SPAN") {
    event.target.parentElement.classList.toggle("completed");
    }
}

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", completeTask);