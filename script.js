// Selectors

const taskInput = document.querySelector(".input-task");
const addButton = document.querySelector(".btn-add");
const taskList = document.querySelector(".task-list");

// Event Listeners

addButton.addEventListener("click", addTask);

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
