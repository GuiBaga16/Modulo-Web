async function main() {

    const response = await fetch('https://brasilapi.com.br/api/ddd/v1/55);

    const dados = await response.json();

    const listaDeItens = document.getElementById('lista');

    listaDeItens.innerHTML = '';

    dados.cities.forEach(city => {
        const listaItem = document.createElement('li');
        listaItem.textContent = `${item.state} - ${item.city}`
        listaDeItens.appendChild(listaItem);
    });

}

main();
