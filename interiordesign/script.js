/*----- VARIABILI GLOBALI -----*/

let sottomenu_aperto = false;


/*----- GESTIONE APERTURA SOTTOMENU -----*/

function apri_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');
    let header = document.getElementById('header');

    if (!sottomenu_aperto) {
        header.style.overflow = 'visible';
        sottomenu.style.left = '0';
        sottomenu_aperto = true;
    }

}

function chiudi_menu() {

    let icona_hamburger = document.getElementById('menu_hamburger');
    let sottomenu = document.getElementById('menu_sottomenu');
    let header = document.getElementById('header');

    if (sottomenu_aperto) {
        sottomenu.style.left = '100%';
        sottomenu_aperto = false;

/*         sottomenu.addEventListener('transitionend', function onTransitionEnd() {
            header.style.overflow = 'hidden';
            sottomenu.removeEventListener('transitionend', onTransitionEnd);
        }); */
    }

}