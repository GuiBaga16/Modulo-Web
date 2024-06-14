const pegaTexto = document.getElementById('pega-dados');
const button = document.getElementById('botao');
const lista = document.getElementById('lista');

button.addEventListener('click', function() {
    const texto = pegaTexto.value;
    if (texto.trim() !== "") {
        const novoItem = document.createElement('li');
        novoItem.textContent = texto;
        lista.appendChild(novoItem);
        pegaTexto.value = '';
        pegaTexto.focus();
    }
});

pegaTexto.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        button.click();
    }
});

