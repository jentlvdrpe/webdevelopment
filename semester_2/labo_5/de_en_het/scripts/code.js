const setup = () => {
    lidWoorden("de Gisteren zat de jongen op de stoep en at de helft van de appel de")
}

const lidWoorden = (tekst) => {
    let woorden = tekst.toLowerCase().split(' ');
    for(let i = 0; i < woorden.length; ++i){
        if(woorden[i]==='de'){
            woorden[i] = 'het';
        }
    }



    let zin = woorden.join(' ').trim();
    console.log(zin)
}
window.addEventListener("load", setup);