import { getArray, storageAvailable } from "./storage";
import { todoPopulater } from "../ui/todosPopulate";

let currentListID;

// let listCounter = 0;
const getListCounter = () => Number(localStorage.getItem("listCounter") ?? "0");
const setListCounter = (n) => localStorage.setItem("listCounter", String(n));

// add function for the submit button
const todoSubmitButtonFunction = function () {
  const button = document.getElementById("submit-button");

  button.addEventListener("click", () => {
    // the defaule id?
    if (!currentListID) {
      console.log("Please select or create a list first.");
      return;
    }

    if (storageAvailable("localStorage")) {
      localStorage.setItem(
        currentListID,
        JSON.stringify(arrayStorage(newTodoObject()))
      );
      todoPopulater(currentListID);
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

const deleteButtonFunction = function () {
  //
};

const listOpenerFunction = function () {
  const listOpener = document.getElementById("list-opener");

  listOpener.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    if (button.id === "new-list") {
      createNewListButton();
      todoPopulater(currentListID);
      return;
    }

    currentListID = button.id;
    todoPopulater(currentListID);
  });
};

// const newListButtonFunction = function () {
//   const newListButton = document.getElementById("new-list");

//   newListButton.addEventListener("click", () => {
//     createNewListButton();
//     todoPopulater(currentListID);
//   });
// };

const createNewListButton = function () {
  const listOpener = document.getElementById("list-opener");

  const newListOpenerButton = document.createElement("button");

  newListOpenerButton.id = crypto.randomUUID();

  currentListID = newListOpenerButton.id;
  //   newListOpenerButton.addEventListener("click", () => {
  //     currentListID = newListOpenerButton.id;
  //   });

  localStorage.setItem(currentListID, JSON.stringify([]));

  let counter = getListCounter();
  newListOpenerButton.textContent = `list-${counter + 1}`;
  setListCounter(counter + 1);
  listOpener.appendChild(newListOpenerButton);
};

export { todoSubmitButtonFunction, createNewListButton, listOpenerFunction };
