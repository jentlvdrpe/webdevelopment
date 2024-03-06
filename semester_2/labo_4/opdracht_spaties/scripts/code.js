const setup = () => {
    let btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", update);
}

const update = () => {
    let txtInput = document.getElementById("tekst");

    // /\s+/g is een reguliere expressie om spaties te verwijderen
    console.log(txtInput.value.replace(/\s+/g, '').split('').join(' '))

    console.log(maakMetSpaties('testen of het werkt'))
}

const maakMetSpaties = (inputTxt) => {
     return inputTxt.replace(/\s+/g, '').split('').join(' ')
}

window.addEventListener("load", setup);