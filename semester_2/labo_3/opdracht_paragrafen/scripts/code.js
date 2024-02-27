const setup = () => {
    let belangrijkeTekst = document.getElementsByClassName("belangrijk");

    for(let i = 0; i < belangrijkeTekst.length; ++i){
        belangrijkeTekst[i].classList.add('opvallend')
    }
}
window.addEventListener("load", setup);