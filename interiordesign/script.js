/*----- VARIABILI GLOBALI -----*/

let sottomenu_aperto = false;


/*----- GESTIONE APERTURA SOTTOMENU -----*/

function apri_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');
    let header = document.getElementById('header');

    if (!sottomenu_aperto) {
/*                 sottomenu.style.top = '100%';
                sottomenu.style.bottom = 'unset';
                sottomenu_aperto = true; */
        sottomenu.classList.add('aperto');
        sottomenu_aperto = true;
    }else{
        sottomenu.classList.remove('aperto');
        sottomenu_aperto = false;
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

images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Ottieni l'elemento <span> che chiude il modal
var span = document.getElementsByClassName("close")[0];

// Quando l'utente clicca su <span> (x), chiudi il modal
span.onclick = function() { 
    modal.style.display = "none";
}