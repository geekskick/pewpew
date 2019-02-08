function about() {
    $("#about").modal();
}

function info(attack){
    console.log("info("+attack+")");
    $(attack).modal();
}
// we need random numbers and also a way to build random ip addresses
function getRandomInt(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}
function getOctet() {return Math.round(Math.random()*255);}
function randomIP () { return(getOctet() + '.' + getOctet() + '.' + getOctet() + '.' + getOctet()); }
function getStroke() {return Math.round(Math.random()*100);}
function getDestination() {return Math.round(Math.random()*100);}


