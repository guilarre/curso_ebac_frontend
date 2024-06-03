const form = document.querySelector('form');
const campoA = document.querySelector('#campo-a');
const campoB = document.querySelector('#campo-b');

const mensagemSucesso = document.querySelector('#mensagem-sucesso');
const mensagemErro = document.querySelector('#mensagem-erro');

function validaForm(a, b) {
    return b > a;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let formEValido = false;
    formEValido = validaForm(campoA.valueAsNumber, campoB.valueAsNumber);

    if (formEValido) {
        mensagemErro.classList.remove('show');
        mensagemSucesso.classList.add('show');
    } else {
        mensagemSucesso.classList.remove('show');
        mensagemErro.classList.add('show');
    }
});