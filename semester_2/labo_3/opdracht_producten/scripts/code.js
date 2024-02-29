const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", updateTabel);
}

const updateTabel = () => {
    let parameters = document.getElementsByClassName("parameter");
    let txtOutputs = document.getElementsByClassName("txtOutput");
    let valutas = document.getElementsByClassName("valuta");
    let BTWs = document.getElementsByClassName("BTW");

    let totaal  = 0;
    for(let i = 0; i < parameters.length; ++i){
        let subtotaal = parseFloat(valutas[i].textContent) * parameters[i].value;
        let BTW = subtotaal * (parseFloat(BTWs[i].textContent) / 100);
        let subtotaalBTW = subtotaal + BTW;
        txtOutputs[i].textContent = `${subtotaalBTW.toFixed(2)} EURO`;

        totaal += subtotaalBTW;
    }
    // Totaal zal altijd de laatste output zijn in dit geval.
    // Oplossing bij meerdere kan zijn => className = "totaal"
    txtOutputs[txtOutputs.length-1].textContent = `${totaal.toFixed(2)} EURO`;
}
window.addEventListener("load", setup);