const setup = () => {
    console.log(prompt("Wat is jouw naam?"))
    alert("Dit is een mededeling")
    console.log(confirm("Ben je zeker?"))
}
window.addEventListener("load", setup);