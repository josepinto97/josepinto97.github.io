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
    }

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