const form = document.getElementById('form-mensagem');
const nomeUsuario = document.getElementById('nome-usuario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

nomeUsuario.addEventListener('keyup', function(e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeUsuario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeUsuario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (formEValido) {
        const nomeCompleto = document.getElementById('nome-usuario');
        const emailUsuario = document.getElementById('email-usuario');
        const telUsuario = document.getElementById('tel-usuario');
        const msgUsuario = document.getElementById('msg-usuario');

        nomeUsuario.value = ''
        emailUsuario.value = ''
        telUsuario.value = ''
        msgUsuario.value = ''

        const mensagemSucesso = `${nomeUsuario.value.split(' ')[0]}, sua mensagem foi enviada com sucesso!`;
        document.querySelector('.mensagem-sucesso').style.display = 'block';
        setTimeout(function() {
            document.querySelector('.mensagem-sucesso').style.display = 'none';
        }, 5000);
    }
});