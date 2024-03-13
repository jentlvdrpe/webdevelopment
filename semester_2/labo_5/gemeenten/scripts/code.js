const setup = () => {
    gemeenten();
}

const gemeenten = () => {
    let select = document.getElementById("gemeenten")
    let gemeenten = []
    while(1){
        let gemeente = prompt("Geef een gemeente op")
        if(gemeente === 'stop') break;
        gemeenten.push(gemeente)
    }
    gemeenten.sort()

    for(let i = 0; i < gemeenten.length; ++i){
        select.innerHTML += `<option value="${gemeenten[i]}" >${gemeenten[i]}</option>`;
    }
}
window.addEventListener("load", setup);