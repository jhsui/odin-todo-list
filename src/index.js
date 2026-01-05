import { newTodoUIFactory } from "./ui/todoUIFactory";
import { todoSubmitButtonFunction } from "./logic/event";

const todoInputContainer = document.querySelector("#todo-input-container");
todoInputContainer.appendChild(newTodoUIFactory());
todoSubmitButtonFunction();

// const container = document.querySelector("#container");
// todoPopulater();
