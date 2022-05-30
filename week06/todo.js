const addToDo = document.getElementById("AddTodo");
const newToDo = document.getElementById("newTodo");
const activeToDo = document.getElementById("active");
const allToDo = document.getElementById("all");
const completedToDo = document.getElementById("completed");

// The system needs an array to store a list of new todolist.
let tasks = [];
if (tasks === null) {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
}

function addTask(event) {
  event.preventDefault();
  const task = {
    id: Date.now(),
    text: newToDo.value,
    completed: false,
  };
  tasks.push(task);
  newToDo.value = "";
  populateTasks(tasks);
  writeToLS();
  countTasks(tasks);
}

// populateTasks
function populateTasks(tasks) {
  const taskLists = document.getElementById("list"); // The full todoList
  taskLists.innerHTML = "";
  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <input type="checkbox"   ${
        task.completed === true ? "checked" : ""
      } onclick="updateTask(${task.id})"/>
      <label>${
        task.text
      }</label> <button class="deleteToDo" onclick="removeTask(${
      task.id
    })">x</button>
      `;
    taskLists.appendChild(item);
  });
}

function writeToLS() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  countTasks();
}

function updateTask(id) {
  const toDoIndex = tasks.map((todo) => todo.id);
  const index = toDoIndex.indexOf(id);
  tasks[index].completed = !tasks[index].completed;
  writeToLS();
  populateTasks(tasks);
}

function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  writeToLS();
  populateTasks(tasks);
}

function selectActiveTasks() {
  filteredTasks = tasks.filter((task) => task.completed === false);
  populateTasks(filteredTasks);
}

function CompletedTasks() {
  filteredTasks = tasks.filter((task) => task.completed === true);
  populateTasks(filteredTasks);
}

function selectAll() {
  populateTasks(tasks);
}

function countTasks() {
  document.getElementById("tasksCount").innerText = tasks.filter(
    (task) => task.completed === false
  ).length;
}

addToDo.addEventListener("click", addTask);
activeToDo.addEventListener("click", selectActiveTasks);
allToDo.addEventListener("click", selectAll);
completedToDo.addEventListener("click", CompletedTasks);

populateTasks(tasks);
countTasks(tasks);
