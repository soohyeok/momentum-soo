const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo)=>{
        return toDo.id != parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const newId = toDos.length + 1;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "🎯";
    deleteButton.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text: text
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDo = localStorage.getItem(TODOS);
    if(loadedToDo !== null){
        const parsedToDos = JSON.parse(loadedToDo);
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text);
        });
    } else {

    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();