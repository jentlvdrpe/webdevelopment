const setup = () => {
    let list = document.querySelectorAll('li');

    for(let i = 0; i<list.length;++i){
        list.item(i).classList.add('listitem');
    }

    let img = document.createElement('img');
    img.setAttribute('src', 'images/Pasfoto_2023.jpg');
    document.body.appendChild(img);

}
window.addEventListener("load", setup);