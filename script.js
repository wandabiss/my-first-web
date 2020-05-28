//  Para que funcione Jquery cuando el navegador haya leido nuestro ducmento
jQuery('document').ready(function($){

    var menuBtn = $('span:even'), // El menú hamburguesa (que está dentro de span) la almaceno en esta variable
        menu = $('.navegacion ul'); // los items de la lista  los almaceno en esta variable

    //Tomamos el elemento menú y le agregamos la clase 'show'. Está clase indica en el style que se muestre la lista. Podria haber usado el metodo Toggler.
    // Si cuando hacemos click en el menu este tiene asignada la clase show (es decir el menu estará desplegado) removemos la clase y el menu se esconderá. De lo contrario -si no la tiene, el menu estará escondido- cuando hagamos click entonces la tendrá y se mostrará la lista.
    menuBtn.click(function(){
        if (menu.hasClass('show') ) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });  
});

$(document).ready(function(){
    $("header").mouseenter(function(){
        $("header").css("background-color", "rgb(182, 150, 144  )");
    });
    $("header").mouseleave(function(){
        $("header").css("background-color", "black");
    });
  });

  $(document).ready(function(){
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });
});