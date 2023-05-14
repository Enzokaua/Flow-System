var email = document.getElementById("email");
var imagem = document.getElementById("imagem");
var senha = document.getElementById("senha");
var container = document.querySelector("div");

let bd = [{
    email: "enzokauarosantos07@gmail.com",
    senha: "1"
}];
let emailCampo = email.type;
let senhaCampo = senha.type = "text";

function cadastrar(e) {
    bd.push({
        email: email.value,
        senha: senha.value
    });
    localStorage.setItem('email', email.value);
    localStorage.setItem('senha', senha.value);
    alert('Usuário Registrado')
    window.location='/load.html'
}

function login() {
    const emailArmazenado = localStorage.getItem('email');
    const senhaArmazenada = localStorage.getItem('senha');
    const acc = email.value === emailArmazenado && senha.value === senhaArmazenada;
    if (acc) {
        // Faça algo se o login for bem-sucedido
        window.location="/"
        console.log('Login bem-sucedido');
    } else {
        // Faça algo se o login falhar
        alert('Nao válido')
    }
}

const form = document.getElementById('some-form');

form && form.addEventListener('submit', e => {
    e.preventDefault();
    cadastrar();
});

const forms = document.getElementById('load-form');
forms && forms.addEventListener('submit', e => {
    e.preventDefault();
    login();
});

container.classList.toggle('visible');
imagem.addEventListener('click', verSenha());

function depoisCarregar() {
    setTimeout(function () {
        var paginaLoad = window.location.replace("./login.html");
    }, 7000);
}

function verSenha() {
    if (container.classList.toggle('visible')) {
        senhaCampo;
        imagem.src = './assets/iconNaoVerSenha.png';
        senha.type = "text";
    } else {
        senha.type = "password";
        imagem.src = './assets/iconVerSenha.png';
    }
}
