/*----- VARIABILI GLOBALI -----*/

let sottomenu_aperto = false;


/*----- GESTIONE APERTURA SOTTOMENU -----*/

function apri_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');
    let header = document.getElementById('header');
    let contenitore_header = document.getElementById('contenitore_header');
    let menu_comparsa = document.getElementById('menu_comparsa');

    if (!sottomenu_aperto) {
        sottomenu.classList.add('aperto');
        sottomenu_aperto = true;
        document.body.style.overflow = 'hidden';
    } else {
        sottomenu.classList.remove('aperto');
        sottomenu_aperto = false;
        document.body.style.overflow = 'auto';
        menu_comparsa.style.left = '100%'; // Riporta menu_comparsa a left 100%
    }

}

function toggleMenu() {
    const menuToggle = document.getElementById('menu_hamburger');
    menuToggle.classList.toggle('active'); // Aggiunge o rimuove la classe "active"
}

function chiudi_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');
    let header = document.getElementById('header');

    if (sottomenu_aperto) {
        /*                 sottomenu.style.bottom = '100%';
                        sottomenu.style.top = 'unset';
                        sottomenu.style.position = 'absolute';
                        sottomenu_aperto = false; */
        sottomenu.classList.remove('aperto');
        sottomenu_aperto = false;
    }

}



// Ottieni il modal
var modal = document.getElementById("myModal");

// Ottieni l'immagine e l'elemento modal
var images = document.querySelectorAll("main .macchina-singola .galleria img");
var modalImg = document.getElementById("img01");

images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Ottieni l'elemento <span> che chiude il modal
var span = document.getElementsByClassName("close")[0];

// Quando l'utente clicca su <span> (x), chiudi il modal
if (span) {
    span.onclick = function () {
        modal.style.display = "none";
    }
}

/*----- BLOCCO MENU NELLA PARTE SUPERIORE  E CHIUSURA QUANDO CLICCO FUORI -----*/

document.addEventListener('click', function (event) {
    const sottomenu = document.getElementById('menu_sottomenu');
    const icona_hamburger = document.getElementById('menu_hamburger');

    if (sottomenu_aperto && !sottomenu.contains(event.target) && !icona_hamburger.contains(event.target)) {
        chiudi_menu();
        icona_hamburger.classList.remove('active'); // Rimuove la classe "active" dall'icona hamburger
    }
});


function menu_auto() {
    const menu = document.getElementById('menu_comparsa');
    menu.style.transition = 'left 0.5s ease'; // Aggiunge una transizione per l'animazione
    if (menu.style.left === '0px') {
        menu.style.left = '100%';
    } else {
        menu.style.left = '0';
    }
    console.log('ciao');
}