//  Para que funcione Jquery cuando el navegador haya leido nuestro ducmento
jQuery('document').ready(function($){

    var menuBtn = $('span'), // El menú hamburguesa (que está dentro de span) la almaceno en esta variable
        menu = $('.navegacion ul'); // los items de la lista  los almaceno en esta variable

    //Tomamos el elemento menú y le agregamos la clase 'show'. Está clase indica en el style que se muestre la lista.
    // Si cuando hacemos click en el menu este tiene asignada la clase show (es decir el menu estará desplegado) removemos la clase y el menu se esconderá. De lo contrario -si no la tiene, el menu estará escondido- cuando hagamos click entonces la tendrá y se mostrará la lista.
    menuBtn.click(function(){
        if (menu.hasClass('show') ) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });   
});