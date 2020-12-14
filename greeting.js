const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings")

const USER = "currentUser";
const SHOWING = "showing";

function saveName(name){
    localStorage.setItem(USER, name);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(name){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${name}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER);
    if(currentUser !== null){
        paintGreeting(currentUser);
    } else {
        askForName();
    }
}

function init(){
    loadName();
}

init();