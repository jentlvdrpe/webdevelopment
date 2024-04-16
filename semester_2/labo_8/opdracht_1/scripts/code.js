const setup = () => {
    let dob = new Date(2003, 7, 18);
    let currentDate = new Date();

    console.log(Math.floor((currentDate-dob)/(1000*3600*24)));
}
window.addEventListener("load", setup);