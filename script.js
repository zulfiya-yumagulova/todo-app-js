// const form = document.querySelector("#new-task");
// const input = document.querySelector(".input-task");
// const addBtn = document.querySelector(".btn-add");
// const tasksList = document.querySelector("#tasks");

// Creating load page
window.addEventListener("load", () => {
  const form = document.querySelector("#new-task");
  const input = document.querySelector(".input-task");
  const addBtn = document.querySelector(".btn-add");
  const tasksList = document.querySelector("#tasks");
  console.log(addBtn);
  // Stop refreshing the page
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    taskElement.appendChild(taskContentEl);

    const inputNewTask = document.createElement("input");
    inputNewTask.classList.add("text");
    inputNewTask.type = "text";
    inputNewTask.value = task;
    inputNewTask.setAttribute("readonly", "readonly");
    taskContentEl.appendChild(inputNewTask);

    tasksList.appendChild(taskElement);
  });
});
