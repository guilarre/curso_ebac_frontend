$(document).ready(() => {
    $('header button').click(() => {
        $('form').slideDown();
    });
    
    $('#botao-cancelar').click(() => {
        $('form').slideUp();
    });

    $('form').submit((e) => {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-imagem-nova').val('');
    });
});