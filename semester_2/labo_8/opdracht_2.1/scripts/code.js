const setup = () => {
    let student = {
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31")
    }

    console.log(JSON.stringify(student))
}
window.addEventListener("load", setup);