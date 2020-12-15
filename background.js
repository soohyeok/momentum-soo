const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNum){
    const image = new Image();
    image.src = `./images/${imgNum}.jpg`;
    image.classList.add("background-image");
    body.prepend(image);
}

function generateRand(){
    const number = Math.ceil(Math.random()*3);
    return number
}

function init(){
    const randomNumber = generateRand();
    paintImage(randomNumber);
}

init();