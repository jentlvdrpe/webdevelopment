let personen = [];

const bewaarBewerktePersoon = () => {
    valideer();
    if(document.querySelectorAll('.invalid').length > 0) return;

    let select = document.querySelector('#lstPersonen');
    let persoon = {
        voornaam: document.querySelector('#txtVoornaam').value,
        familienaam: document.querySelector('#txtFamilienaam').value,
        geboorteDatum: document.querySelector('#txtGeboorteDatum').value,
        email: document.querySelector('#txtEmail').value,
        kinderen: document.querySelector('#txtAantalKinderen').value
    };

    let index = select.selectedIndex;
    if(index < 0){
        personen.push(persoon);
        index = personen.length - 1;
        select.innerHTML += `<option id="${index}">${personen[index].voornaam} ${personen[index].familienaam}</option>`
    } else {
        personen[index] = persoon;
        select.options[index].textContent = `${personen[index].voornaam} ${personen[index].familienaam}`;
    }
};

const bewerkNieuwePersoon = () => {
    document.querySelector('#lstPersonen').selectedIndex = -1;
    let texts = document.querySelectorAll('input[type="text"]');
    texts.forEach(text => { text.value = ""; })
};

const zetWaarden = (event) => {
    let id = event.currentTarget.selectedIndex;
    document.querySelector('#txtVoornaam').value = personen[id].voornaam;
    document.querySelector('#txtFamilienaam').value = personen[id].familienaam;
    document.querySelector('#txtGeboorteDatum').value = personen[id].geboorteDatum;
    document.querySelector('#txtEmail').value = personen[id].email;
    document.querySelector('#txtAantalKinderen').value = personen[id].kinderen;
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener('change', zetWaarden);
};

window.addEventListener("load", setup);