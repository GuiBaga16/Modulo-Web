async function buscaIsbn(isbn) {

    const response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dados = await response.json();
    const listaDeItens = document.getElementById('lista');

    listaDeItens.innerHTML = '';

    const linha = document.createElement('tr');

    //* Dados que vão ser mostrados na tabela

    //isbn
    const isbnCell = document.createElement('td');
    isbnCell.textContent = dados.isbn;
    linha.appendChild(isbnCell);

    //titulo
    const titleCell = document.createElement('td');
    titleCell.textContent = dados.title;
    linha.appendChild(titleCell);

    //autor
    const authorsCell = document.createElement('td');
    authorsCell.textContent = dados.authors;
    linha.appendChild(authorsCell);

    //editora
    const publisherCell = document.createElement('td');
    publisherCell.textContent = dados.publisher;
    linha.appendChild(publisherCell);

    //dimensoes
    const dimensionsCell = document.createElement('td');
    dimensionsCell.textContent = dados.dimensions;
    linha.appendChild(dimensionsCell);

    //ano
    const yearCell = document.createElement('td');
    yearCell.textContent = dados.year;
    linha.appendChild(yearCell);

    //assunto
    const subjectsCell = document.createElement('td');
    subjectsCell.textContent = dados.subjects;
    linha.appendChild(subjectsCell);

    //preço
    const priceCell = document.createElement('td');
    priceCell.textContent = dados.retail_price;
    linha.appendChild(priceCell);

    // capa URL
    const coverUrlCell = document.createElement('td');
    if (dados.cover_url) {
        const coverImg = document.createElement('img');
        coverImg.src = dados.cover_url;
        coverUrlCell.appendChild(coverImg);
    } else {
        coverUrlCell.textContent = "Capa não disponível";
    }
    linha.appendChild(coverUrlCell);

    //fornecedor
    const providerCell = document.createElement('td');
    providerCell.textContent = dados.provider;
    linha.appendChild(providerCell);

    listaDeItens.appendChild(linha);
}

const botao = document.getElementById('buscar');
const input = document.getElementById('campo');

botao.addEventListener('click', function () {
    const isbn = input.value.trim();
    if (isbn) {
        buscaIsbn(isbn);
    } else {
        alert('Por favor, digite um ISBN válido.');
    }
});
