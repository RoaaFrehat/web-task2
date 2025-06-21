const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");
const deleteAllTasksBtn = document.getElementById("deleteAllTasks");
const deleteDoneTasksBtn = document.getElementById("deleteDoneTasks");
const showAllBtn = document.getElementById("showAll");
const showDoneBtn = document.getElementById("showDone");
const showTodoBtn = document.getElementById("showTodo");
const errorMessage = document.getElementById("errorMessage");


window.addEventListener("load", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    const taskRow = createTaskRow(task.text, task.done);
    tasksContainer.appendChild(taskRow);
  });

  updateNoTaskMessage();
  updateDeleteButtonsState();
});

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (!validateTaskInput(taskText)) {
    return;
  }
   const taskRow = createTaskRow(taskText, false);
  tasksContainer.appendChild(taskRow);
   saveTasksToLocalStorage();
  taskInput.value = "";
  errorMessage.style.display = "none";
  updateNoTaskMessage();
  updateDeleteButtonsState();
});
function validateTaskInput(taskText) {
  if (taskText === "") {
    showError("Task cannot be empty!");
    return false;
  }
  if (/^[0-9]/.test(taskText)) {
    showError("Task cannot start with a number!");
    return false;
  }
  if (taskText.length < 5) {
    showError("Task name must be at least 5 characters long!");
    return false;
  }

  return true;
}
function createTaskRow(text, done) {
  const taskRow = document.createElement("div");
  taskRow.classList.add("task-row");
const taskSpan = document.createElement("span");
  taskSpan.textContent = text;
}