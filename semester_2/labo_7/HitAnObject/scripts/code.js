let global = {
    IMAGE_COUNT:5,                  // Aantal figuren
    IMAGE_SIZE: 48,                 // Grootte van de figuren
    IMAGE_PATH_PREFIX: "images/",   // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",      // extensie van de figuren
    MOVE_DELAY: 1500,               // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,                       // aantal hits
    timeoutId: 0                    // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let image = document.querySelector('img');
    let btn = document.querySelector('#startBtn');
    image.addEventListener('click', clicked);
    btn.addEventListener('click', startSpel);
}

const clicked = () => {
    // VALIDATOR
    let img = document.querySelector('img');
    if(img.getAttribute('src') === `${global.IMAGE_PATH_PREFIX}0${global.IMAGE_PATH_SUFFIX}`){
        alert('GAME OVER!!!');
        clearInterval(global.timeoutId);
        return;
    }

    // TIMER
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(update, global.MOVE_DELAY);

    // SCORE
    ++global.score
    let score = document.querySelector('#score');
    score.textContent = global.score.toString();

    update();
}

const update = () => {
    let image= document.querySelector('img');

    // MOVE IMAGE
    let playField=document.querySelector('#playField')
    // Zorg dat hij niet buiten de borders kan
    let maxLeft= playField.clientWidth - image.offsetWidth;
    let maxHeight= playField.clientHeight - image.offsetHeight;
    // Geef nieuwe position
    let left= Math.floor(Math.random()*maxLeft);
    let top= Math.floor(Math.random()*maxHeight);
    image.style.left = `${left}px`;
    image.style.top = `${top}px`;

    // CHANGE IMAGE
    let randImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    image.setAttribute('src', global.IMAGE_PATH_PREFIX + randImg + global.IMAGE_PATH_SUFFIX);
}

const startSpel = () => {
    let  startBtn = document.querySelector('#startBtn');
    startBtn.hidden = true;
    global.timeoutId = setInterval(update, global.MOVE_DELAY);
}

window.addEventListener("load", setup);


