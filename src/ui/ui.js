import { getLists, getCurrentListID } from "../logic/storage";

// populate current list
const todoPopulater = function () {
  const lists = getLists();
  let array = [];
  if (lists.has(getCurrentListID())) {
    array = lists.get(getCurrentListID()).array;
  } else {
    console.log("you dont have this key in the Map!");
    return;
  }

  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";

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
    editButton.className = "edit-button";
    editButton.type = "button";
    editButton.dataset.index = i;

    todoDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.dataset.index = i;
    todoDiv.appendChild(deleteButton);

    listContainer.appendChild(todoDiv);
  }
};

// display all the lists
const listOpenerPopulater = () => {
  const lists = getLists();
  const listOpener = document.getElementById("list-opener");

  lists.forEach((list, id) => {
    const listButton = document.createElement("button");

    listButton.textContent = list.listName;
    listButton.id = id;
    listButton.type = "button";

    listOpener.appendChild(listButton);
  });
};

// create a form to submit new todo items
const newTodoUIFactory = function () {
  const todoContainer = document.createElement("form");
  todoContainer.id = "todo-item";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  titleLabel.htmlFor = "todo-title";
  const title = document.createElement("input");
  title.id = "todo-title";
  title.name = "todo_title";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.id = "submit-button";
  submitButton.type = "button";

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Due Date:";
  dateLabel.htmlFor = "date";
  const dateField = document.createElement("input");
  dateField.type = "date";
  dateField.id = "date";
  dateField.name = "date";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  descriptionLabel.htmlFor = "description";
  const description = document.createElement("input");
  description.id = "description";
  description.name = "description";

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:";
  priorityLabel.htmlFor = "priority";
  const priority = document.createElement("select");
  priority.name = "priority";
  priority.id = "priority";
  const topPriority = document.createElement("option");
  topPriority.textContent = "Top";
  topPriority.value = "top";
  priority.appendChild(topPriority);
  const mediumPriority = document.createElement("option");
  mediumPriority.textContent = "Medium";
  mediumPriority.value = "medium";
  priority.appendChild(mediumPriority);
  mediumPriority.selected = true;
  const lowPriority = document.createElement("option");
  lowPriority.textContent = "Low";
  lowPriority.value = "low";
  priority.appendChild(lowPriority);

  todoContainer.appendChild(titleLabel);
  todoContainer.appendChild(title);
  todoContainer.appendChild(descriptionLabel);
  todoContainer.appendChild(description);
  todoContainer.appendChild(dateLabel);
  todoContainer.appendChild(dateField);
  todoContainer.appendChild(priorityLabel);
  todoContainer.appendChild(priority);

  todoContainer.appendChild(submitButton);
  return todoContainer;
};

export { todoPopulater, newTodoUIFactory, listOpenerPopulater };
