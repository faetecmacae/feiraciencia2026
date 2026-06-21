//serve para ativar e desativar o menu mobile na navbar
function toggleMenu() {
    document.getElementById("menuMobile").classList.toggle("show");
}

//============================================================================================================

// Serve para fazer o botão de envio do WhatsApp funcionar
document.getElementById("form-contato").addEventListener("submit", enviarWhats);

    function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, vim pelo site da Feira de Ciencias - 2026! Meu nome é ${nome}, meu e-mail é ${email}, ${mensagem}`;

    const numero = "5522998884900";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    // limpa os campos
    document.getElementById("form-contato").reset();
}
