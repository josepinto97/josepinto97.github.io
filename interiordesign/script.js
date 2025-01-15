/*----- VARIABILI GLOBALI -----*/

let sottomenu_aperto = false;


/*----- GESTIONE APERTURA SOTTOMENU -----*/

function apri_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');

    if (!sottomenu_aperto) {
        sottomenu.style.left = '0';
        sottomenu_aperto = true;
    }

}

function chiudi_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');

    if (sottomenu_aperto) {
        sottomenu.style.left = '99%';
        sottomenu_aperto = false;
    }

}