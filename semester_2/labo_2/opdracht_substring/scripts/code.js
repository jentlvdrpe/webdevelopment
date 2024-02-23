const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring)
}

const substring = () =>{
    let txtOutput = document.getElementById("txtOutput");
    let txtString = document.getElementById("txtString");
    let txtStart = document.getElementById("txtStart");
    let txtEnd = document.getElementById("txtEnd");

    return txtOutput.innerHTML = txtString.value.substring(txtStart.value, txtEnd.value)
}
window.addEventListener("load", setup);