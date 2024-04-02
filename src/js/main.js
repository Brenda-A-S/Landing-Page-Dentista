const form = document.getElementById('formulario-contato');
const nome = document.getElementById('nome-usuario');
let formEValido = false;

function validaNome(nome) {
    const nomeComoArray = nome.split(' ');
    return nomeComoArray.length >= 2;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email-usuario');
    const telefone = document.getElementById('telefone-usuario');
    const mensagem = document.getElementById('mensagem-usuario');
    const mensagemSucesso = `<span>${nome.value}</span>,sua mensagem foi enviada!`;

    if (formEValido) {
        const containerMsg = document.querySelector('.success-msg');
        containerMsg.innerHTML = mensagemSucesso;
        containerMsg.style.display = 'block';
        nome.value = '';
        email.value = '';
        telefone.value = '';
        mensagem.value = '';
    } else {
        nome.style.border = '1px solid red';
        document.querySelector('.error-msg').style.display = 'block';
    }
})

nome.addEventListener('keyup', function (e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nome.classList.add('error');
        document.querySelector('.error-msg').style.display = 'block';
    } else {
        nome.classList.remove('error');
        document.querySelector('.error-msg').style.display = 'none';
    }
})