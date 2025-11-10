const botaoLogin = document.getElementById('login-button');
const loginForm = document.getElementById('formulario-login');
const loginEmail = document.getElementById('email-login');
const loginSenha = document.getElementById('senha-login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!loginEmail.value.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    // CORREÇÃO AQUI: Use loginSenha.value.length
    if (loginSenha.value.length < 4) { // Note: Deve ser .value.length, não apenas .value
        alert('A senha deve conter ao menos 4 dígitos');
        return;
    }

    alert('Conectado com sucesso!');
});
