import { getArray, storageAvailable } from "./storage";
import { todoPopulater } from "../ui/todosPopulate";

// add function for the submit button
const todoSubmitButtonFunction = function () {
  const button = document.getElementById("submit-button");

  button.addEventListener("click", () => {
    if (storageAvailable("localStorage")) {
      console.log("hi im here!");
      //   const currentObject = newTodoObject();
      //   localStorage.setItem(
      //     `${currentObject.title}`.trim(),
      //     JSON.stringify(currentObject)
      //   );
      localStorage.setItem(
        "array",
        JSON.stringify(arrayStorage(newTodoObject()))
      );
      todoPopulater();
    } else {
      console.log("unable to store data");
    }
  });
};

// return the data of the new todo item as an object
const newTodoObject = function () {
  const form = document.getElementById("todo-item");
  const formData = new FormData(form);

  return {
    title: formData.get("todo_title"),
    description: formData.get("description"),
    date: formData.get("date"),
    priority: formData.get("priority"),
  };
};

// return the array with the new value
const arrayStorage = function (todoItem) {
  const array = getArray();

  array.push(todoItem);

  return array;
};

export { todoSubmitButtonFunction };
