/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui */ \"./src/ui/ui.js\");\n/* harmony import */ var _logic_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/event */ \"./src/logic/event.js\");\n\n\n\nconst todoInputContainer = document.querySelector(\"#todo-input-container\");\n//put the todo submission form inside the container\ntodoInputContainer.appendChild((0,_ui_ui__WEBPACK_IMPORTED_MODULE_0__.newTodoUIFactory)());\n// add submit button function\n(0,_logic_event__WEBPACK_IMPORTED_MODULE_1__.todoSubmitButtonFunction)();\n\n// show all the lists\n(0,_ui_ui__WEBPACK_IMPORTED_MODULE_0__.listOpenerPopulater)();\n// add function for each list opener\n(0,_logic_event__WEBPACK_IMPORTED_MODULE_1__.listOpenerFunction)();\n\n// add delete button function\n(0,_logic_event__WEBPACK_IMPORTED_MODULE_1__.deleteButtonFunction)();\n(0,_logic_event__WEBPACK_IMPORTED_MODULE_1__.editButtonFunction)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/logic/event.js"
/*!****************************!*\
  !*** ./src/logic/event.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewListButton: () => (/* binding */ createNewListButton),\n/* harmony export */   deleteButtonFunction: () => (/* binding */ deleteButtonFunction),\n/* harmony export */   editButtonFunction: () => (/* binding */ editButtonFunction),\n/* harmony export */   listOpenerFunction: () => (/* binding */ listOpenerFunction),\n/* harmony export */   todoSubmitButtonFunction: () => (/* binding */ todoSubmitButtonFunction)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/logic/storage.js\");\n/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui */ \"./src/ui/ui.js\");\n\n\n\nconst getListCounter = () => Number(localStorage.getItem(\"listCounter\") ?? \"0\");\nconst setListCounter = (n) => localStorage.setItem(\"listCounter\", String(n));\n\n// add function of the submit button\n// store all the lists inside the key \"lists\"\nconst todoSubmitButtonFunction = function () {\n  const button = document.getElementById(\"submit-button\");\n\n  button.addEventListener(\"click\", () => {\n    // the defaule id?\n    if (!(0,_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)()) {\n      console.log(\"Please select or create a list first.\");\n      return;\n    }\n\n    if ((0,_storage__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)(\"localStorage\")) {\n      const form = document.getElementById(\"todo-item\");\n\n      const lists = saveTodo(newTodoObject(form));\n      localStorage.setItem(\"lists\", JSON.stringify([...lists]));\n\n      // localStorage.setItem(\"lists\", JSON.stringify(saveTodo(newTodoObject())));\n\n      // update current todo list\n      (0,_ui_ui__WEBPACK_IMPORTED_MODULE_1__.todoPopulater)();\n    } else {\n      console.log(\"unable to store data\");\n    }\n  });\n};\n\n// push todo item into its corresponding list\nconst saveTodo = function (todoItem) {\n  // \"lists\" is a map, key is button id and value is an object which contains the name of the button and an array of its todos\n  const lists = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLists)();\n\n  const id = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)();\n  // currentList is an object with two properties: name of the button and array of its todos\n  const currentList = lists.get(id);\n\n  // if (!currentList) throw new Error(\"Current list not found for currentListID\");\n\n  currentList.array.push(todoItem);\n  lists.set(id, currentList);\n\n  return lists;\n};\n\n// return the data of the new todo item as an object\nconst newTodoObject = function (form) {\n  const formData = new FormData(form);\n\n  return {\n    title: formData.get(\"todo_title\"),\n    description: formData.get(\"description\"),\n    date: formData.get(\"date\"),\n    priority: formData.get(\"priority\"),\n  };\n};\n\n// add function for each list button in the list container\nconst listOpenerFunction = function () {\n  const listOpener = document.getElementById(\"list-opener\");\n\n  listOpener.addEventListener(\"click\", (e) => {\n    const button = e.target.closest(\"button\");\n\n    if (!button) return;\n\n    if (button.id === \"new-list\") {\n      createNewListButton();\n      (0,_ui_ui__WEBPACK_IMPORTED_MODULE_1__.todoPopulater)();\n      return;\n    }\n\n    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setCurrentListID)(button.id);\n    (0,_ui_ui__WEBPACK_IMPORTED_MODULE_1__.todoPopulater)();\n  });\n};\n\n// create a new list button\nconst createNewListButton = function () {\n  const listOpener = document.getElementById(\"list-opener\");\n  const newListOpenerButton = document.createElement(\"button\");\n\n  newListOpenerButton.id = crypto.randomUUID();\n  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setCurrentListID)(newListOpenerButton.id);\n\n  let counter = getListCounter();\n  setListCounter(counter + 1);\n\n  const lists = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLists)();\n  const newList = {\n    listName: `list-${counter + 1}`,\n    array: [],\n  };\n  lists.set(newListOpenerButton.id, newList);\n\n  localStorage.setItem(\"lists\", JSON.stringify([...lists]));\n\n  newListOpenerButton.textContent = `list-${counter + 1}`;\n  listOpener.appendChild(newListOpenerButton);\n};\n\n// the function of delete buttons in ONE list\nconst deleteButtonFunction = () => {\n  //\n  const listContainer = document.getElementById(\"list-container\");\n  // if (deleteButtonList.length > 0) {\n  //   for (let i = 0; i < deleteButtonList.length; i++) {\n  //     deleteButtonList[i].addEventListener(\"click\", () => {\n  //       const index = i;\n  //       list.array.splice(index, 1);\n  //       lists.set(id, list);\n  //       localStorage.setItem(\"lists\", JSON.stringify([...lists]));\n  //       todoPopulater();\n  //     });\n  //   }\n  // }\n  listContainer.addEventListener(\"click\", (e) => {\n    const btn = e.target.closest(\".delete-button\");\n    if (!btn) return;\n\n    const index = Number(btn.dataset.index);\n    if (Number.isNaN(index)) return;\n\n    const lists = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLists)();\n    const id = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)();\n    const list = lists.get(id);\n\n    list.array.splice(index, 1);\n    lists.set(id, list);\n    localStorage.setItem(\"lists\", JSON.stringify([...lists]));\n\n    (0,_ui_ui__WEBPACK_IMPORTED_MODULE_1__.todoPopulater)();\n  });\n};\n\nconst editButtonFunction = () => {\n  const listContainer = document.getElementById(\"list-container\");\n\n  listContainer.addEventListener(\"click\", (e) => {\n    const btn = e.target.closest(\".edit-button\");\n    if (!btn) return;\n\n    const index = Number(btn.dataset.index);\n    if (Number.isNaN(index)) return;\n\n    const parentDiv = btn.parentElement;\n    if (parentDiv.querySelector(\".edit-form\")) {\n      return;\n    }\n\n    const lists = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLists)();\n    const id = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)();\n    const list = lists.get(id);\n\n    const editform = (0,_ui_ui__WEBPACK_IMPORTED_MODULE_1__.newTodoUIFactory)();\n\n    const todoObject = list.array[index];\n\n    editform.elements.todo_title.value = todoObject.title;\n    editform.elements.description.value = todoObject.description;\n    editform.elements.date.value = todoObject.date;\n    editform.elements.priority.value = todoObject.priority;\n\n    const submitButtonOfEdit = editform.querySelector(\"#submit-button\");\n\n    submitButtonOfEdit.addEventListener(\"click\", () => {\n      if (!(0,_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)()) {\n        console.log(\"Please select or create a list first.\");\n        return;\n      }\n\n      if ((0,_storage__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)(\"localStorage\")) {\n        // const lists = saveTodo(newTodoObject(editform));\n        list.array.splice(index, 1, newTodoObject(editform));\n        lists.set(id, list);\n        localStorage.setItem(\"lists\", JSON.stringify([...lists]));\n\n        // update current todo list\n        (0,_ui_ui__WEBPACK_IMPORTED_MODULE_1__.todoPopulater)();\n      } else {\n        console.log(\"unable to store data\");\n      }\n    });\n\n    const cancelButton = document.createElement(\"button\");\n    cancelButton.addEventListener(\"click\", () => {\n      // parentDiv.removeChild(editform);\n      editform.remove();\n    });\n    cancelButton.textContent = \"Cancel\";\n    cancelButton.type = \"button\";\n    editform.appendChild(cancelButton);\n    editform.className = \"edit-form\";\n\n    parentDiv.appendChild(editform);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/event.js?\n}");

/***/ },

/***/ "./src/logic/storage.js"
/*!******************************!*\
  !*** ./src/logic/storage.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentListID: () => (/* binding */ getCurrentListID),\n/* harmony export */   getLists: () => (/* binding */ getLists),\n/* harmony export */   setCurrentListID: () => (/* binding */ setCurrentListID),\n/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)\n/* harmony export */ });\nlet currentListID;\n\nfunction getCurrentListID() {\n  return currentListID;\n}\n\nfunction setCurrentListID(id) {\n  currentListID = id;\n}\n\nfunction storageAvailable(type) {\n  let storage;\n  try {\n    storage = window[type];\n    const x = \"__storage_test__\";\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException &&\n      e.name === \"QuotaExceededError\" &&\n      // acknowledge QuotaExceededError only if there's something already stored\n      storage &&\n      storage.length !== 0\n    );\n  }\n}\n\n// get the data of lists\nconst getLists = function () {\n  const raw = localStorage.getItem(\"lists\");\n\n  if (raw === null) return new Map();\n\n  try {\n    // const parsed = JSON.parse(raw);\n    // return parsed instanceof Map ? parsed : new Map();\n    const entries = JSON.parse(raw);\n    return new Map(entries);\n  } catch {\n    return new Map();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic/storage.js?\n}");

/***/ },

/***/ "./src/ui/ui.js"
/*!**********************!*\
  !*** ./src/ui/ui.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listOpenerPopulater: () => (/* binding */ listOpenerPopulater),\n/* harmony export */   newTodoUIFactory: () => (/* binding */ newTodoUIFactory),\n/* harmony export */   todoPopulater: () => (/* binding */ todoPopulater)\n/* harmony export */ });\n/* harmony import */ var _logic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/storage */ \"./src/logic/storage.js\");\n\n\n// populate current list\nconst todoPopulater = function () {\n  const lists = (0,_logic_storage__WEBPACK_IMPORTED_MODULE_0__.getLists)();\n  let array = [];\n  if (lists.has((0,_logic_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)())) {\n    array = lists.get((0,_logic_storage__WEBPACK_IMPORTED_MODULE_0__.getCurrentListID)()).array;\n  } else {\n    console.log(\"you dont have this key in the Map!\");\n    return;\n  }\n\n  const listContainer = document.getElementById(\"list-container\");\n  listContainer.innerHTML = \"\";\n\n  for (let i = 0; i < array.length; i++) {\n    const todo = array[i];\n    const todoDiv = document.createElement(\"div\");\n\n    const title = document.createElement(\"span\");\n    title.textContent = todo.title;\n    todoDiv.appendChild(title);\n\n    const description = document.createElement(\"span\");\n    description.textContent = todo.description;\n    todoDiv.appendChild(description);\n\n    const date = document.createElement(\"span\");\n    date.textContent = todo.date;\n    todoDiv.appendChild(date);\n\n    const priority = document.createElement(\"span\");\n    priority.textContent = todo.priority;\n    todoDiv.appendChild(priority);\n\n    const editButton = document.createElement(\"button\");\n    editButton.textContent = \"Edit\";\n    editButton.className = \"edit-button\";\n    editButton.type = \"button\";\n    editButton.dataset.index = i;\n\n    todoDiv.appendChild(editButton);\n\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.textContent = \"Delete\";\n    deleteButton.className = \"delete-button\";\n    deleteButton.type = \"button\";\n    deleteButton.dataset.index = i;\n    todoDiv.appendChild(deleteButton);\n\n    listContainer.appendChild(todoDiv);\n  }\n};\n\n// display all the lists\nconst listOpenerPopulater = () => {\n  const lists = (0,_logic_storage__WEBPACK_IMPORTED_MODULE_0__.getLists)();\n  const listOpener = document.getElementById(\"list-opener\");\n\n  lists.forEach((list, id) => {\n    const listButton = document.createElement(\"button\");\n\n    listButton.textContent = list.listName;\n    listButton.id = id;\n    listButton.type = \"button\";\n\n    listOpener.appendChild(listButton);\n  });\n};\n\n// create a form to submit new todo items\nconst newTodoUIFactory = function () {\n  const todoContainer = document.createElement(\"form\");\n  todoContainer.id = \"todo-item\";\n\n  const titleLabel = document.createElement(\"label\");\n  titleLabel.textContent = \"Title:\";\n  titleLabel.htmlFor = \"todo-title\";\n  const title = document.createElement(\"input\");\n  title.id = \"todo-title\";\n  title.name = \"todo_title\";\n\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Submit\";\n  submitButton.id = \"submit-button\";\n  submitButton.type = \"button\";\n\n  const dateLabel = document.createElement(\"label\");\n  dateLabel.textContent = \"Due Date:\";\n  dateLabel.htmlFor = \"date\";\n  const dateField = document.createElement(\"input\");\n  dateField.type = \"date\";\n  dateField.id = \"date\";\n  dateField.name = \"date\";\n\n  const descriptionLabel = document.createElement(\"label\");\n  descriptionLabel.textContent = \"Description:\";\n  descriptionLabel.htmlFor = \"description\";\n  const description = document.createElement(\"input\");\n  description.id = \"description\";\n  description.name = \"description\";\n\n  const priorityLabel = document.createElement(\"label\");\n  priorityLabel.textContent = \"Priority:\";\n  priorityLabel.htmlFor = \"priority\";\n  const priority = document.createElement(\"select\");\n  priority.name = \"priority\";\n  priority.id = \"priority\";\n  const topPriority = document.createElement(\"option\");\n  topPriority.textContent = \"Top\";\n  topPriority.value = \"top\";\n  priority.appendChild(topPriority);\n  const mediumPriority = document.createElement(\"option\");\n  mediumPriority.textContent = \"Medium\";\n  mediumPriority.value = \"medium\";\n  priority.appendChild(mediumPriority);\n  mediumPriority.selected = true;\n  const lowPriority = document.createElement(\"option\");\n  lowPriority.textContent = \"Low\";\n  lowPriority.value = \"low\";\n  priority.appendChild(lowPriority);\n\n  todoContainer.appendChild(titleLabel);\n  todoContainer.appendChild(title);\n  todoContainer.appendChild(descriptionLabel);\n  todoContainer.appendChild(description);\n  todoContainer.appendChild(dateLabel);\n  todoContainer.appendChild(dateField);\n  todoContainer.appendChild(priorityLabel);\n  todoContainer.appendChild(priority);\n\n  todoContainer.appendChild(submitButton);\n  return todoContainer;\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/ui/ui.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;