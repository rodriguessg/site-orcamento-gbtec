function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Captura os valores dos campos do formulário e codifica-os para URL
    const name = encodeURIComponent(document.getElementById('nome').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const service = encodeURIComponent(document.getElementById('servico').value);
    const message = encodeURIComponent(document.getElementById('msg').value);

    // Cria a mensagem para o WhatsApp
    const whatsappMessage = `Olá, meu nome é ${name}. Meu e-mail é ${email}. Estou interessado no serviço de ${service}. Mensagem adicional: ${message}`;
    const whatsappLink = `https://wa.me/5521993579144?text=${whatsappMessage}`;

    // Abre o link no WhatsApp Web em uma nova aba
    window.open(whatsappLink, '_blank');

    // Mostra a mensagem de confirmação
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Limpa o formulário
    document.getElementById('form').reset();

    // Aguarda 2000 milissegundos (2 segundos) e depois recarrega a página
    setTimeout(function() {
        document.getElementById('confirmationMessage').classList.add('hidden'); // Esconde a mensagem de confirmação
    }, 4000);
});

