const setup = () => {
    let sliders = document.querySelectorAll('.slider')
    for(let i=0; i<sliders.length;++i){
        sliders.item(i).addEventListener('input', update);
        sliders.item(i).addEventListener('change', update);
    }
    let saveButton = document.querySelector("#save-button")
    saveButton.addEventListener('click', saveColor);

    initializeColor();
}
const initializeColor = () => {
    // We stellen de start value van elke slider in
    let value = 127;

    let colorPalette = document.querySelector("#colorPalette");
    let sliders = document.querySelectorAll('.slider');
    let text = document.querySelectorAll(`.color-text`);

    colorPalette.style.backgroundColor = `RGB(${value}, ${value}, ${value})`;
    for(let i=0; i<sliders.length;++i){
        text[i].textContent = `${value}`;
        sliders[i].value = value;
    }
}
const update = (event) => {
    let colorPalette = document.querySelector("#colorPalette");
    let text = document.querySelectorAll(`.color-text`)

    // Haal alle opeenvolgende getallen uit RGB(255, 255, 255)
    let rgb = colorPalette.style.backgroundColor.match(/\d+/g);
    let targetValue = event.currentTarget.value;

    switch (event.currentTarget.id){
        case 'Red':
            colorPalette.style.backgroundColor = `RGB(${targetValue}, ${rgb[1]}, ${rgb[2]})`;
            text[0].textContent = targetValue;
            break;
        case 'Green':
            colorPalette.style.backgroundColor = `RGB(${rgb[0]}, ${targetValue}, ${rgb[2]})`;
            text[1].textContent = targetValue;
            break;
        case 'Blue':
            colorPalette.style.backgroundColor = `RGB(${rgb[0]}, ${rgb[1]}, ${targetValue})`;
            text[2].textContent = targetValue;
            break;
    }
}
const saveColor = () => {
    let colorBlock = document.createElement('div');
    colorBlock.className = "color-block";
    //COLOR
    let colorPalette = document.querySelector("#colorPalette");
    let rgb = colorPalette.style.backgroundColor.match(/\d+/g);
    colorBlock.style.backgroundColor = `RGB(${rgb[0]},${rgb[1]},${rgb[2]})`;
    // When clicked on the color, the palette changes
    colorBlock.addEventListener("click", setColor);
    // DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener("click", deleteColor);
    colorBlock.appendChild(deleteButton);

    let saveColors = document.querySelector('#saved-colors');
    saveColors.appendChild(colorBlock);
}
const setColor = (event) => {
    let colorBlock = event.currentTarget;
    let colorPalette = document.querySelector("#colorPalette");
    colorPalette.style.backgroundColor = colorBlock.style.backgroundColor;

    let sliders = document.querySelectorAll('.slider');
    let rgb = colorPalette.style.backgroundColor.match(/\d+/g);
    let text = document.querySelectorAll(`.color-text`)
    for(let i=0; i<sliders.length;++i){
        sliders[i].value = rgb[i];
        text[i].textContent = `${rgb[i]}`;
    }
}
const deleteColor = (event) => {
    // Voorkom dat het event wordt doorgegeven aan de parent
    event.stopPropagation();

    const colorBlock = event.currentTarget.parentNode;
    let saveColors = document.querySelector('#saved-colors');
    saveColors.removeChild(colorBlock);
}
window.addEventListener("load", setup);