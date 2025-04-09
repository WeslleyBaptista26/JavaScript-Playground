document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.trim() === "") {
        mensagem.textContent = "O campo de e-mail não pode estar vazio.";
        mensagem.className = "erro";
    } else if (!emailRegex.test(email)) {
        mensagem.textContent = "Formato inválido! O e-mail deve conter '@' e um domínio válido, como exemplo@dominio.com.";
        mensagem.className = "erro";
    } else {
        mensagem.textContent = "E-mail válido! Obrigado por enviar.";
        mensagem.className = "sucesso";
    }
});
