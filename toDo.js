const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const newId = toDos.length + 1;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "🎯";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
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