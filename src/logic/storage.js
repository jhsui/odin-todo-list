let currentListID;

function getCurrentListID() {
  return currentListID;
}

function setCurrentListID(id) {
  currentListID = id;
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// get the data of lists
const getLists = function () {
  const raw = localStorage.getItem("lists");

  if (raw === null) return new Map();

  try {
    // const parsed = JSON.parse(raw);
    // return parsed instanceof Map ? parsed : new Map();
    const entries = JSON.parse(raw);
    return new Map(entries);
  } catch {
    return new Map();
  }
};

export { storageAvailable, getLists, getCurrentListID, setCurrentListID };
