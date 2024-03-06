const setup = () => {
    let btn = document.getElementById("submit")
    btn.addEventListener("click", countAlgo)
}

const countAlgo = () => {
    let txtInputZin = document.getElementById("inputZin")
    let txtInputZoek = document.getElementById("inputZoekwoord")
    let txtOutput = document.getElementById("txtOutput")

    let lowerTxtZin = txtInputZin.value.toLowerCase()
    let lowerTxtZoek = txtInputZoek.value.toLowerCase()

    // Check
    if(lowerTxtZin.indexOf(lowerTxtZoek) === -1) return;

    // Met indexOf() moeten we de newIdx - de lengte van de te zoeken tekst doen
    let count = 0
    let newIndex = 0
    do{
        newIndex = lowerTxtZin.indexOf(lowerTxtZoek, newIndex) + lowerTxtZoek.length
        count++
    }while(lowerTxtZin.indexOf(lowerTxtZoek, newIndex) !== -1)

    // Met lastIndexOf() moeten we -1 doen om de index juist te zetten
    // let count = 0
    // let newIndex = lowerTxtZin.length
    // do{
    //     newIndex = lowerTxtZin.lastIndexOf(lowerTxtZoek, newIndex) - 1
    //     count++
    // }while(lowerTxtZin.lastIndexOf(lowerTxtZoek, newIndex) !== -1)

    txtOutput.textContent = count.toString()


}
window.addEventListener("load", setup);