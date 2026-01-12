import { newTodoUIFactory } from "./ui/todoUIFactory";
import { todoSubmitButtonFunction } from "./logic/event";
import { todoPopulater } from "./ui/populater";
import { listOpenerFunction } from "./logic/event";
import { createNewListButton } from "./logic/event";

const todoInputContainer = document.querySelector("#todo-input-container");
//put the form inside the container
todoInputContainer.appendChild(newTodoUIFactory());
todoSubmitButtonFunction();
// create the first list??
createNewListButton();
listOpenerFunction();
