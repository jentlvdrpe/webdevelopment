const setup = () => {
    let student = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z"}')

    console.log(student.voornaam + ", " + student.geboorteDatum);
}
window.addEventListener("load", setup);