const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = taskText;

  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = "";
  input.focus();

  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = ""; 
  });
});