// helper.js
const STORAGE_KEY = "todos";
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  }catch(error){
    showAlert("Kaydetme hatası: "+ error.message, "error")
  }
  
}

export function addTodo(input, list, output) {
  const mission = input.value.trim();
  const exist   = list.includes(mission);
  
  if (!mission) {
    showAlert("Boş bırakmayınız","error");
    return;
  }
  
  if (exist) {
    showAlert("Bu görev zaten bulunuyor.","error")
    return;
  }
  try{
      list.push(mission);
      updateState(list, output, "Görev başarıyla eklendi", "success")
      input.value = "";
      input.focus();
  }catch (error){
    showAlert("Kaydetme hatası: "+ error.message, "error" )
  }

}

export function renderTodo(list, output) {
  let todoHTML = "";
  
  if (list.length === 0){
  output.innerHTML = "<p class='empty'>Henüz görev yok.</p>";
  return;
  }
  
  list.forEach((todo, index) => {
    todoHTML += `
      <div class="todo-container">
        <p>${todo}</p>
        <button class="js-remove-button" data-index="${index}">Sil</button>
      </div>
    `;
  });
  output.innerHTML = todoHTML;
}


export function removeTodo (list,index, output) {
    list.splice(index, 1);
    updateState(list,output, "Görev silindi", "success")
    };

export function handleAdd (input, list ,output) {
  addTodo(input, list, output)
}

function updateState (list,output, message = null, type ="success") {
    saveToStorage(STORAGE_KEY,list);
    renderTodo(list, output);
    if (message)showAlert(message, type)
}

function showAlert(message, type = "error"){
  const div = document.querySelector(".js-error");
  clearTimeout(div.timer)
  div.style.opacity = 1;
  div.style.color = type === "error" ? "#dc3545" : "#28a745";
  div.textContent = message;
  div.timer = setTimeout(() => (div.style.opacity = 0), 2000);
}