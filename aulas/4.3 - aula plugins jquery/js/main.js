$(document).ready(() => {
    $('#carossel-imgs').slick({
        autoplay: true
    });
    
    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle();
    });

    //0 é pra números e S pra letras
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            veiculo: {
                required: false
            },
            msg: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            tel: 'Por favor, insira o seu telefone',
            veiculo: 'Este campo é obrigatório',
            msg: 'Este campo é obrigatório'
        },
        invalidHandler: (evento, validador) => {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});