console.log("Hoi")

const bekerElement = document.querySelector(".beker")
const buttonEl = document.querySelector(".tapioca")
const pinkpoppingEl = document.querySelector(".pink-popping")
const orangepoppingEl = document.querySelector(".orange-popping")
const yellowpoppingsEl = document.querySelector(".yellow-popping")
const pinkflavorEl = document.querySelector(".pink-flavor")
const orangeflavorEl = document.querySelector(".orange-flavor")
const yellowflavorEl = document.querySelector(".yellow-flavor")
const brownflavorEl = document.querySelector(".brown-flavor")
const Geluid1 = new Audio('audio/pouring-coffee.mp3')
const Geluid2 = new Audio('audio/cafe-music-163375.mp3')
// geluid1 van https://www.youtube.com/watch?v=0GCzNqWMMLM
// geluid2 van https://pixabay.com/music/traditional-jazz-cafe-music-163375/ 
// Adonnah heeft me geholpen met geluid1
console.log(buttonEl)

let a = 0;
let b = 0;

function voegTapiocaToe () {
    Geluid2.play();
    console.log(voegTapiocaToe)
    b = 1
    bekerElement.src = 'images/tapioca-boba.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-tapioca.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-tapioca.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-tapioca.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-tapioca.png';
    }
}
// mijn broer heeft geholpen met ifelse code

buttonEl.addEventListener("click", voegTapiocaToe)

function pinkpopping() {
    Geluid2.play();
    console.log(pinkpopping)
    b = 2
    bekerElement.src = 'images/pink-boba-pearls.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-pink.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-pink.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-pink.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-pink.png';
    }
}

pinkpoppingEl.addEventListener("click", pinkpopping)

function orangepopping() {
    Geluid2.play();
    console.log(orangepopping)
    b = 3 
    bekerElement.src = 'images/orange-boba-pearls.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-orange.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-orange.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-orange.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-orange.png';
    }
}

orangepoppingEl.addEventListener("click", orangepopping)

function yellowpopping() {
    Geluid2.play();
    console.log(yellowpopping)
    b = 4 
    bekerElement.src = 'images/yellow-boba-pearls.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-yellow.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-yellow.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-yellow.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-yellow.png';
    }
}

yellowpoppingsEl.addEventListener("click", yellowpopping)

function pinkflavor() {
    Geluid1.play();
    console.log(pinkflavor)
    bekerElement.src = 'images/pink-boba.png'
    a = 1
    if (b == 1) {
        bekerElement.src = 'images/pink-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/pink-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/pink-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/pink-boba-yellow.png';
    }
}

pinkflavorEl.addEventListener("click", pinkflavor)

function orangeflavor() {
    Geluid1.play();
    console.log(orangeflavor)
    bekerElement.src = 'images/orange-boba.png'
    a = 2
    if (b == 1) {
        bekerElement.src = 'images/orange-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/orange-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/orange-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/orange-boba-yellow.png';
    }
}

orangeflavorEl.addEventListener("click", orangeflavor)

function yellowflavor() {
    Geluid1.play();
    console.log(yellowflavor)
    bekerElement.src = 'images/yellow-boba.png'
    a = 3
    if (b == 1) {
        bekerElement.src = 'images/yellow-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/yellow-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/yellow-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/yellow-boba-yellow.png';
    }
}

yellowflavorEl.addEventListener("click", yellowflavor)

function brownflavor(){
    Geluid1.play();
    console.log(brownflavor)
    bekerElement.src = 'images/brown-boba.png'
    a = 4
    if (b == 1) {
        bekerElement.src = 'images/brown-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/brown-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/brown-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/brown-boba-yellow.png';
    }
}

brownflavorEl.addEventListener("click", brownflavor)

// plaatje van beker: https://www.shutterstock.com/image-vector/transparent-disposable-plastic-cups-different-sizes-1319484767 
// alle poppings en smaken zelf bewerkt op het plaatje

 




