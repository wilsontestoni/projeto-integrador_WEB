//FUNÇÃO PARA FECHAR QUANDO ESTIVER NO MODO CELULAR



$(document).ready(function () {

    $('#navbarToggle').on('click', function () {

        $('#navbarNav').toggleClass('show');

    });



    $('.navbar-nav a').on('click', function () {

        $('#navbarNav').removeClass('show');

    });

});





//FUNÇÃO PARA FAZER UMA ROLAGEM DA PAGINA MAIS SUAVE

$(document).ready(function () {
    $(".navbar-nav a, #scrollCategorias, #scrollSobre, #scrollIntegrantes").on("click", function (e) {
        e.preventDefault();
        var targetId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetId).offset().top
        }, 1000);
    });
});





//FUÇÃO DAS FOTOS DA EQUIPE 



// JavaScript para controlar a navegação da equipe
document.addEventListener('DOMContentLoaded', function () {
    const membrosEquipe = document.querySelectorAll('.equipe-item');

    function exibirMembros() {
        for (let i = 0; i < membrosEquipe.length; i++) {
            membrosEquipe[i].style.display = 'block';
        }
    }

    exibirMembros();
});



$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $(document).on('click', '#matricule-se', function(event) {
        event.preventDefault();

        window.location.href = "http://localhost:3000/cadastro";
    });
});

$(document).ready(function() {
    $(document).on('click', '#login', function(event) {
        event.preventDefault();

        window.location.href = "http://localhost:3000/login";
    });
});

$(document).ready(function () {
   
    $(window).on("scroll", function () {
        $(".fade-in").each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this).addClass("show");
            }
        });
    });
 
   
    $(".fade-in").each(function () {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
            $(this).addClass("show");
        }
    });
});
