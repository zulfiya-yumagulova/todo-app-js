// Selectors

const taskInput = document.querySelector(".input-task");
const addButton = document.querySelector(".btn-add");
const taskList = document.querySelector(".task-list");

// Event Listeners

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completedTask);

// Functions
function addTask(event) {
  // Prevent form from submiting
  event.preventDefault();
  console.log("hello");
  //   Task Div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  //   Create Li
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task-item");

  taskDiv.appendChild(newTask);

  //   Completed button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("completed-btn");
  taskDiv.appendChild(completedBtn);

  // Creating Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("delete-btn");
  taskDiv.appendChild(deleteBtn);

  //   Appent to list
  taskList.appendChild(taskDiv);

  //   Clear task input value
  taskInput.value = "";
}

// Dlete task function

function deleteTask(event) {
  const item = event.target;
  if (item.classList[0] === "delete-btn") {
    const task = item.parentElement;
    task.remove();
  }
  // Delete
}

// Completed Task function

function completedTask(event) {
  const item = event.target;
  console.log("clicked");
  if (item.classList[0] === "comleted-btn") {
    const task = item.parentElement;
    task.classList.toggle("completed");
  }
}
