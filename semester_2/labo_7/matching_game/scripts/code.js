let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    PATH_PREFIX: 'images/',
    KAART_TURNS: 2,
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
            kaart.setAttribute('data-kaart', dubbeleArray[index]);
            kaart.setAttribute('data-turned', 'false');
            kaart.addEventListener('click', kaartDraaien);
            row.appendChild(kaart)
            ++index;
        }
        gameboard.appendChild(row);
    }
}

const kaartDraaien = (event) => {
    let kaart = event.currentTarget;
    // CHECK
    if(kaart.getAttribute('data-turned') === 'true') return;
    if(global.KAART_TURNS === 0) return;

    kaart.style.backgroundImage = `url("${global.PATH_PREFIX}${kaart.getAttribute('data-kaart')}")`;
    kaart.setAttribute('data-turned', 'true');
    console.log(kaart.name+' '+kaart.getAttribute('data-turned'))
    --global.KAART_TURNS;

    // Extra check na onmiddellijke verandering
    if(global.KAART_TURNS === 0) checkKaarten();
}

const checkKaarten = () => {
    let turnedKaarten = document.querySelectorAll('[data-turned="true"]');
    if(turnedKaarten[0].getAttribute('data-kaart') !== turnedKaarten[1].getAttribute('data-kaart')){
        turnedKaarten.forEach( kaart => { kaart.classList.add('border-red') })
        setTimeout(() => {
            turnedKaarten.forEach( kaart => {kaart.classList.remove('border-red')} )
            resetKaarten();
        }, 1000);
    }
    else{
        turnedKaarten.forEach( kaart => { kaart.classList.add('border-green') })
        setTimeout(() => {
            turnedKaarten.forEach( kaart => {
                kaart.classList.remove('border-green');
                kaart.setAttribute('data-turned', 'false');
                kaart.style.visibility = 'hidden';
            })
            global.KAART_TURNS = 2;
        }, 1500)
    }
}

const resetKaarten = () =>{
    let turnedKaarten = document.querySelectorAll('[data-turned="true"]');
    turnedKaarten.forEach( kaart => {
        kaart.style.backgroundImage = `url("${global.PATH_PREFIX}kaart_achterkant.png")`;
        kaart.setAttribute('data-turned', 'false');
    })
    global.KAART_TURNS = 2;
}
window.addEventListener("load", setup);