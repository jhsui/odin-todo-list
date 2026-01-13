import { newTodoUIFactory, listOpenerPopulater } from "./ui/ui";
import {
  todoSubmitButtonFunction,
  listOpenerFunction,
  createNewListButton,
} from "./logic/event";

const todoInputContainer = document.querySelector("#todo-input-container");
//put the form inside the container
todoInputContainer.appendChild(newTodoUIFactory());
//
todoSubmitButtonFunction();

// create the first list??
// createNewListButton();

listOpenerPopulater();
listOpenerFunction();
