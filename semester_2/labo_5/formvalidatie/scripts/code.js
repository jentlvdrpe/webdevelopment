const setup = () => {
    let btnSubmit = document.getElementById('submit')
    btnSubmit.addEventListener("click", valideer)
}

const valideer = () => {
    let fout = false

    // NAME
    let naam = document.getElementById('name')
    if(naam.value.length > 30){
        naam.className = "error"
        error('name', 'max. 30 karakters')
        fout = true
    } else {
        naam.classList.remove("error")
        error('name', '')
    }

    // SURNAME
    let achternaam = document.getElementById('surname')
    if(achternaam.value.length > 50 || achternaam.value.length < 1) {
        achternaam.className = "error"
        if(achternaam.value.length > 50) error('surname', 'max. 50 karakters')
        else error('surname', 'verplicht veld')
        fout = true
    } else {
        achternaam.classList.remove("error")
        error('surname', '')
    }

    // DATE
    let datum = document.getElementById('date')
    let datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if(datum.value.length < 1) {
        datum.className = "error"
        error('date', 'verplicht veld')
        fout = true
    } else if(!datePattern.test(datum.value)) {
        datum.className = "error"
        error('date', 'formaat is niet jjjj-mm-dd')
        fout = true
    } else {
        datum.classList.remove("error")
        error('date', '')
    }

    // EMAIL
    let email = document.getElementById('email')
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(email.value.length < 1) {
        email.className = "error"
        error('email', 'verplicht veld')
        fout = true
    } else if (!reg.test(email.value)) {
        email.className = "error"
        error('email', 'geen geldig email adres')
        fout = true
    } else {
        email.classList.remove("error")
        error('email', '')
    }

    // AANTAL KINDEREN
    let nrkinderen = document.getElementById('#kinderen')
    let numberReg = /\d/
    if(nrkinderen.value < 0 || nrkinderen.value > 99 || !numberReg.test(nrkinderen.value)){
        nrkinderen.className = "error"
        if(nrkinderen.value < 0) error('#kinderen', 'is geen positief getal')
        else if(nrkinderen.value > 99) error('#kinderen', 'is te vruchtbaar')
        else error('#kinderen', 'is geen decimaal')
        fout = true
    } else {
        nrkinderen.classList.remove("error")
        error('#kinderen', '')
    }

    // PROMPT
    if(!fout) alert("Proficiat!")
}

const error = (id, description) => {
    let error = document.getElementById(`${id}Error`)
    error.innerText = description
}

window.addEventListener("load", setup);