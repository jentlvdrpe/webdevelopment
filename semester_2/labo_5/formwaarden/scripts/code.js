const setup = () => {
    let form = document.getElementById('submit')
    form.addEventListener("click", uitvoer)
}

const uitvoer = () => {
    let roker = document.getElementById('roker')
    if(roker.checked){
        console.log("Is een roker")
    } else {
        console.log("Is geen roker")
    }

    let moedertaal = document.getElementsByName('moedertaal')
    let noneChecked = true
    for(let i = 0; i < moedertaal.length; ++i){
        if(moedertaal[i].checked){
            console.log(`Moedertaal is ${moedertaal[i].value}`)
            noneChecked = false
            break;
        }
    }
    //Check
    if(noneChecked) console.log("Geen moedertaal geselecteerd")

    // Geen check nodig, automatisch 1 geselecteerd
    let buurlanden = document.getElementById('buurland').options
    for(let i = 0; i < buurlanden.length; ++i){
        if(buurlanden[i].selected){
            console.log(`Favoriete buurland is ${buurlanden[i].value}`);
            break;
        }
    }

    let bestellingen = document.getElementById('bestelling').options
    let bestelling = ""
    noneChecked = true
    for (let i = 0; i < bestellingen.length; ++i){
        if(bestellingen[i].selected){
            bestelling += `${bestellingen[i].value} `
            noneChecked = false
        }
    }
    if(noneChecked) {
        console.log('Er is geen bestelling')
    } else {
        console.log(`Bestelling bestaat uit ${bestelling.trim()}`)
    }
}
window.addEventListener("load", setup);