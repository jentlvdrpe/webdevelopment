const setup = () => {
    let status = document.getElementById('dropdown');
    let txtInvoer = document.getElementById('txtInvoer');
    status.addEventListener('click', updateKip);
    status.addEventListener('input', updateKip);
    txtInvoer.addEventListener('input', updateKip);

}

const updateKip= () => {
    let status = document.getElementById('dropdown');
    let image = document.getElementById('img');
    let note = document.getElementById('note');
    let txtInvoer = document.getElementById('txtInvoer');

    let string = `Hierboven, een kip ${status.value.toLowerCase()}`;
    let count = 0
    let newIndex = 0
    while(string.indexOf(txtInvoer.value[0], newIndex) !== -1){
        newIndex = string.indexOf(txtInvoer.value[0], newIndex) + txtInvoer.value[0].length
        count++
    }

    if(txtInvoer.value.length > 0){
        console.log('true')
    }

    switch(status.value){
        case 'Kies':
            image.className = 'hidden';
            note.innerHTML = '';
            break;
        case 'Met een ei':
            image.className = 'with-egg';
            if(txtInvoer.value.length > 0){
                note.innerHTML = `${string} </br> Letter '${txtInvoer.value[0]}' komt ${count} voor in bovenstaande zin.`
            }else{
                note.innerHTML = `${string}`;
            }
            break;
        case 'Zonder een ei':
            image.className = '';
            if(txtInvoer.value.length > 0){
                note.innerHTML = `${string}</br> Letter '${txtInvoer.value[0]}' komt ${count} voor in bovenstaande zin.`
            } else {
                note.innerHTML = `${string}`;
            }
            break;
    }
}
window.addEventListener("load", setup);