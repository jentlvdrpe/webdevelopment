let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAART_ACHTERKANT: 'kaart_achterkant.png',
    PATH_PREFIX: '../images/',
    IMAGES: ['kaart1.png', 'kaart2.png', 'kaart3.png', 'kaart4.png', 'kaart5.png', 'kaart6.png']
};

const setup = () => {
    createGameboard();
}

const createGameboard = () => {
    let gameboard = document.querySelector('#game-board');

    let dubbeleArray = [...global.IMAGES, ...global.IMAGES];
    dubbeleArray.sort(() => Math.random() - 0.5);

    let index = 0;
    for(let i= 0; i < global.AANTAL_HORIZONTAAL; ++i){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < global.AANTAL_VERTICAAL; ++j){
            let kaart = document.createElement('div');
            kaart.classList.add('kaart');
            kaart.style.backgroundImage = "url('../images/kaart_achterkant.png')";
            kaart.setAttribute('data-kaart', dubbeleArray[index]);
            kaart.setAttribute('data-turned', false.toString());
            kaart.addEventListener('click', kaartDraaien);
            row.appendChild(kaart)
            ++index;
        }
        gameboard.appendChild(row);
    }
}

const kaartDraaien = (event) => {
    let kaart = event.currentTarget;
    let getKaart = kaart.getAttribute('data-kaart');
    if(kaart.getAttribute('data-turned') === 'false'){
        kaart.style.backgroundImage = `url("${global.PATH_PREFIX}${getKaart}")`;
    }
}
window.addEventListener("load", setup);