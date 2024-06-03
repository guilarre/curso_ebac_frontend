$(document).ready(() => {
    $('form').submit(e => {
        e.preventDefault();
        
        const nomeTarefa = $('input').val();
        $(`<li>${nomeTarefa}</li>`).appendTo('ol');
        
        $('li').click(function() {
            $(this).toggleClass('strikethrough');
        });
    });
});