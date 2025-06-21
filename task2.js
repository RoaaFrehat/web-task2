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