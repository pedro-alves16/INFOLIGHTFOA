const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById('senha');
const botaoLogin = document.getElementById('login-button');
const loginForm = document.getElementById('formulario-login');
const loginEmail = document.getElementById('email-login');
const loginSenha = document.getElementById('senha-login');


form.addEventListener("submit", function(e){
    e.preventDefault(); 
  
    if (nome.value.trim().length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    telefone.value = telefone.value.replace(/\D/g, "");
    if (telefone.value.length < 11) {
        alert("Digite um telefone válido.");
        return;
    }

    if(senha.value < 4){
        alert('a senha deve conter ao menos 4 digitos');
        return;
    }

    alert('enviado com sucesso!');
});


telefone.addEventListener("input", e => {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.length <= 10 ? valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") : valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    e.target.value = valor;
});

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
