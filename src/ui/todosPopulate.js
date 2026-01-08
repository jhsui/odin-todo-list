import { getArray } from "../logic/storage";

const todoPopulater = function (id) {
  const array = getArray(id);

  const list = document.getElementById("list-container");
  list.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const todo = array[i];
    const todoDiv = document.createElement("div");

    const title = document.createElement("span");
    title.textContent = todo.title;
    todoDiv.appendChild(title);

    const description = document.createElement("span");
    description.textContent = todo.description;
    todoDiv.appendChild(description);

    const date = document.createElement("span");
    date.textContent = todo.date;
    todoDiv.appendChild(date);

    const priority = document.createElement("span");
    priority.textContent = todo.priority;
    todoDiv.appendChild(priority);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    todoDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    todoDiv.appendChild(deleteButton);

    list.appendChild(todoDiv);
  }
};

export { todoPopulater };
