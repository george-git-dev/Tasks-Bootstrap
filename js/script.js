// ! Variaveis de escopo global
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


// ? validação de nome básica
function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome Válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

// ? Validação de e-mail com indexOf
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

// ? Validação do campo assunto
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML =
            'Texto é muito grande, digite no máximo 100 caracteres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

// ? função de envio básica com validação de preenchimento de campos
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário corretamente antes de enviar...');
    }
}