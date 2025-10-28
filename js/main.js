//main.js
import { handleAdd, removeTodo, renderTodo } from "./helper.js";
import { todoList } from "./data.js";

const inputElement = document.querySelector(".js-input");
const addButton    = document.querySelector(".js-add-btn");
let   output       = document.querySelector(".js-output");

addButton.addEventListener("click", () => {
  handleAdd(inputElement, todoList, output)
})

inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleAdd(inputElement, todoList, output)
  }
})

    // 🔧 DÜZELTME: doğru selector
  // Ayrıca kapsamı daraltmak için "document" yerine "output" üzerinden seçiyoruz.
 
    output.addEventListener("click", (event) => {
      if (event.target.classList.contains("js-remove-button")){
          const index = Number(event.target.dataset.index); // Number() opsiyonel
          removeTodo(todoList,index,output);
          
    }
    });
renderTodo(todoList,output)
