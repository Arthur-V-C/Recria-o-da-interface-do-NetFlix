//Carrossel de filmes//

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: -20,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

//Transição da cor de fundo do header//
$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('header').addClass("fixo");
      }
      else{
        $('header').removeClass("fixo");
        $('header').addClass("desfixo");
      }
    });

