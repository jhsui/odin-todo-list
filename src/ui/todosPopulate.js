import { getArray } from "../logic/storage";

const todoPopulater = function () {
  const array = getArray();

  const container = document.querySelector("#container");
  container.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const p = document.createElement("p");
    p.textContent = JSON.stringify(array[i]);
    // p.textContent = array[i];
    container.appendChild(p);
  }
};

export { todoPopulater };
