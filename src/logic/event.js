import {
  getLists,
  storageAvailable,
  getCurrentListID,
  setCurrentListID,
} from "./storage";
import { todoPopulater } from "../ui/ui";

const getListCounter = () => Number(localStorage.getItem("listCounter") ?? "0");
const setListCounter = (n) => localStorage.setItem("listCounter", String(n));

// add function of the submit button
// store all the lists inside the key "lists"
const todoSubmitButtonFunction = function () {
  const button = document.getElementById("submit-button");

  button.addEventListener("click", () => {
    // the defaule id?
    if (!getCurrentListID()) {
      console.log("Please select or create a list first.");
      return;
    }

    if (storageAvailable("localStorage")) {
      const lists = saveTodo(newTodoObject());
      localStorage.setItem("lists", JSON.stringify([...lists]));

      // localStorage.setItem("lists", JSON.stringify(saveTodo(newTodoObject())));

      // update current todo list
      todoPopulater();
    } else {
      console.log("unable to store data");
    }
  });
};

// push todo item into its corresponding list
const saveTodo = function (todoItem) {
  // "lists" is a map, key is button id and value is an object which contains the name of the button and an array of its todos
  const lists = getLists();

  const id = getCurrentListID();
  // currentList is an object with two properties: name of the button and array of its todos
  const currentList = lists.get(id);

  // if (!currentList) throw new Error("Current list not found for currentListID");

  currentList.array.push(todoItem);
  lists.set(id, currentList);

  return lists;
};

// return the data of the new todo item as an object
const newTodoObject = function () {
  const form = document.getElementById("todo-item");
  const formData = new FormData(form);

  return {
    title: formData.get("todo_title") + " ",
    description: formData.get("description") + " ",
    date: formData.get("date") + " ",
    priority: formData.get("priority") + " ",
  };
};

/// need to deal with new created buttons issues
// the function of delete buttons in ONE list
const deleteButtonFunction = function () {
  //
  const listContainer = document.getElementById("list-container");
  // if (deleteButtonList.length > 0) {
  //   for (let i = 0; i < deleteButtonList.length; i++) {
  //     deleteButtonList[i].addEventListener("click", () => {
  //       const index = i;
  //       list.array.splice(index, 1);
  //       lists.set(id, list);
  //       localStorage.setItem("lists", JSON.stringify([...lists]));
  //       todoPopulater();
  //     });
  //   }
  // }
  listContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete-button");
    if (!btn) return;

    const index = Number(btn.dataset.index);
    if (Number.isNaN(index)) return;

    const lists = getLists();
    const id = getCurrentListID();
    const list = lists.get(id);

    list.array.splice(index, 1);
    lists.set(id, list);
    localStorage.setItem("lists", JSON.stringify([...lists]));

    todoPopulater();
  });
};

// add function for each list button in the list container
const listOpenerFunction = function () {
  const listOpener = document.getElementById("list-opener");

  listOpener.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    if (button.id === "new-list") {
      createNewListButton();
      todoPopulater();
      return;
    }

    setCurrentListID(button.id);
    todoPopulater();
  });
};

// create a new list button
const createNewListButton = function () {
  const listOpener = document.getElementById("list-opener");
  const newListOpenerButton = document.createElement("button");

  newListOpenerButton.id = crypto.randomUUID();
  setCurrentListID(newListOpenerButton.id);

  let counter = getListCounter();
  setListCounter(counter + 1);

  const lists = getLists();
  const newList = {
    buttonName: `list-${counter + 1}`,
    array: [],
  };
  lists.set(newListOpenerButton.id, newList);

  localStorage.setItem("lists", JSON.stringify([...lists]));

  newListOpenerButton.textContent = `list-${counter + 1}`;
  listOpener.appendChild(newListOpenerButton);
};

export {
  todoSubmitButtonFunction,
  createNewListButton,
  listOpenerFunction,
  deleteButtonFunction,
};
