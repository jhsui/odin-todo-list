const newTodoUIFactory = function () {
  const todoContainer = document.createElement("div");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  titleLabel.htmlFor = "new-todo";
  const title = document.createElement("input");
  title.id = "new-todo";

  const finishButton = document.createElement("button");
  finishButton.textContent = "finish";

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Due Date:";
  dateLabel.htmlFor = "due-date";
  const dateField = document.createElement("input");
  dateField.type = "date";
  dateField.id = "due-date";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  descriptionLabel.htmlFor = "new-description";
  const description = document.createElement("input");
  description.id = "new-description";

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:";
  priorityLabel.htmlFor = "priority";
  const priority = document.createElement("select");
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

  todoContainer.appendChild(finishButton);
  return todoContainer;
};

export { newTodoUIFactory };
