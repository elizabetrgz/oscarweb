$(document).ready(main);
var contador = 1;

function main() {
    $('.menu').click(function(e) {
        e.preventDefault();
        if (contador == 1) {
            $('.navegacion').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.navegacion').animate({
                left: '-100%'
            });
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});