// data.js
export let todoList = (() => {
  try {
    const raw = localStorage.getItem("todos");
    return raw ? JSON.parse(raw) : ["Make Dinner", "Wash Dishes"];
  } catch {
    return ["Make Dinner", "Wash Dishes"];
  }
})();