const setup = () => {
    let familieNamen = ['Naam1','Naam2','Naam3','Naam4','Naam5']
    console.log(familieNamen.length)
    console.log(familieNamen[0])
    console.log(familieNamen[2])
    console.log(familieNamen[4])
    familieNamen.push(VoegNaamToe())
    console.log(familieNamen[5])
    let array = familieNamen + ""
    console.log(array)
}

let VoegNaamToe = () =>{
    return prompt("Geef een naam", "Naam")
}
window.addEventListener("load", setup);