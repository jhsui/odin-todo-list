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

export { newTodoUIFactory };
