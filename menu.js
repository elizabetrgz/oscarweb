$(document).ready(main);
var contador = 1;

function main() {
    $('.menu').click(function(e) {
        e.preventDefault();
        if (contador == 1) {
            $('#navegacion').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('#navegacion').animate({
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

let ubicacion = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacion >= desplazamiento) {
        document.getElementById('navegacion').style.left = '0';

    } else {
        document.getElementById('navegacion').style.left = '-100%';
    }

}