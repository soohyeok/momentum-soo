const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";

function paintToDo(text){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "🎯";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const toDo = localStorage.getItem(TODOS);
    if(toDo !== null){
        
    } else {

    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();