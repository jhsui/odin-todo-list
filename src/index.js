import { newTodoUIFactory, listOpenerPopulater } from "./ui/ui";
import {
  todoSubmitButtonFunction,
  listOpenerFunction,
  deleteButtonFunction,
  editButtonFunction,
} from "./logic/event";

const todoInputContainer = document.querySelector("#todo-input-container");
//put the todo submission form inside the container
todoInputContainer.appendChild(newTodoUIFactory());
// add submit button function
todoSubmitButtonFunction();

// show all the lists
listOpenerPopulater();
// add function for each list opener
listOpenerFunction();

// add delete button function
deleteButtonFunction();
editButtonFunction();
