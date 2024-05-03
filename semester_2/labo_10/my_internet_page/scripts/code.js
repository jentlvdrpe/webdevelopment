let global = {
    history: []
}
const setup = () => {
    let goBtn = document.querySelector('#submit');
    goBtn.addEventListener("click", validate);
    initialize();
}
const initialize = () => {
    let history = localStorage.getItem('history');
    if(!history) return;

    console.log(global.history);
    JSON.parse(history).forEach(card => {
        console.log(card)
        global.history.push(card);
        makeCard(card);
    })
}
const validate = () => {
    let zoekopdracht = document.querySelector('#zoekopdracht');
    let array = zoekopdracht.value.trim().split(' ');
    // CHECK
    let site = array.shift();
    if(site.length < 2) return;
    if(site.substring(0,1) !== '/') return alert('Invalid command');
    if(array.length < 1) return alert('Invalid command');
    // CARD
    let card = {
        title: '',
        text: array.join(' '),
        url: ''
    }
    // URL
    let search = array.join('+');
    // CASE
    switch (site){
        case '/g':
            card.url = `https://www.google.com/search?q=${search}`;
            card.title = 'Google';
            break;
        case '/y':
            card.url =`http://www.youtube.com/results?search_query=${search}`;
            card.title = 'Youtube';
            break;
        case '/x':
            card.url = `https://twitter.com/hashtag/${search}`;
            card.title = 'X';
            break;
        case '/i':
            card.url = `http://www.instagram.com/explore/tags/${search}/`;
            card.title = 'Instagram';
            break;
        default:
            return alert('Unknown command prefix');
    }
    window.open(card.url);
    zoekopdracht.value = '';
    global.history.push(card);
    console.log(global.history);
    localStorage.setItem('history', JSON.stringify(global.history));
    makeCard(card);
}
const makeCard = (card) =>{
    let site = card.title.toLowerCase();

    let container = document.createElement('div');
    container.classList.add(`${site}`)
    container.classList.add('col-4');
    container.classList.add('card');

    let body = document.createElement('div');
    body.classList.add('card-body');

    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = card.title;
    body.appendChild(title);

    let text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = card.text;
    body.appendChild(text);

    let url = document.createElement('a');
    url.classList.add(`${site}-btn`);
    url.classList.add('btn');
    url.setAttribute('href', card.url);
    url.setAttribute('target', '_blank');
    url.textContent = 'Go!'
    body.appendChild(url);

    container.appendChild(body);
    let historyRow = document.querySelector('.history-row');
    historyRow.appendChild(container);
}
window.addEventListener("load", setup);