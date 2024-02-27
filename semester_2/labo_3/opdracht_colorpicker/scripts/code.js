const setup = () => {
    let sliderRed = document.getElementById("sliderR");
    let sliderGreen = document.getElementById("sliderG");
    let sliderBlue = document.getElementById("sliderB");

    sliderRed.addEventListener("input", update);
    sliderRed.addEventListener("change", update);
    sliderGreen.addEventListener("input", update);
    sliderGreen.addEventListener("change", update);
    sliderBlue.addEventListener("input", update);
    sliderBlue.addEventListener("change", update);

    update();
}

const update = () => {
    let txtOutputRed = document.getElementById("txtOutputRed");
    let txtOutputGreen= document.getElementById("txtOutputGreen");
    let txtOutputBlue =document.getElementById("txtOutputBlue");
    let sliderRed = document.getElementById("sliderR");
    let sliderGreen = document.getElementById("sliderG");
    let sliderBlue = document.getElementById("sliderB");
    let colorPalette = document.getElementById("colorPalette");

    txtOutputRed.textContent = "Red " + sliderRed.value;
    txtOutputGreen.textContent = "Green " + sliderGreen.value;
    txtOutputBlue.textContent = "Blue " + sliderBlue.value;

    colorPalette.style.backgroundColor = `RGB(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value})`;
}
window.addEventListener("load", setup);