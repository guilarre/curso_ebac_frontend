const form = document.querySelector('#form-contato');
const inputNome = document.querySelector('#input-nome');
const inputTel = document.querySelector('#input-tel');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizarListaContatos();
});

function adicionarContato() {
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>'
    linhas += linha;
}

function atualizarListaContatos() {
    document.querySelector('tbody').innerHTML = linhas;
    
    inputNome.value = '';
    inputTel.value = '';
}