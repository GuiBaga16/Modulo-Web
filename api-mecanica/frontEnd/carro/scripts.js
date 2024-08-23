async function excluir(id) {
    await fetch(`http://localhost:3000/carros/${id}`, { 
        method: 'DELETE' 
    });
    window.location.reload();
}

async function listarCarros() {
    const response = await fetch('http://localhost:3000/carros');
    const dados = await response.json();
    const corpoTabela = document.getElementById('corpo-tabela');
    
    dados.forEach(item => {
        const linha = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.textContent = item.id;
        linha.appendChild(tdId);

        const tdModelo = document.createElement('td');
        tdModelo.textContent = item.modelo;
        linha.appendChild(tdModelo);

        const tdMarca = document.createElement('td');
        tdMarca.textContent = item.marca;
        linha.appendChild(tdMarca);

        const tdCor = document.createElement('td');
        tdCor.textContent = item.cor;
        linha.appendChild(tdCor);
        
        const tdCategoria = document.createElement('td');
        tdCategoria.textContent = item.categoria;
        linha.appendChild(tdCategoria);
        
        const tdDataFabricacao = document.createElement('td');
        tdDataFabricacao.textContent = item.data_fabricacao;
        linha.appendChild(tdDataFabricacao);

        const tdProblema = document.createElement('td');
        tdProblema.textContent = item.problema;
        linha.appendChild(tdProblema);

        const tdAcoes = document.createElement('td');
        tdAcoes.classList.add("acoes");
        tdAcoes.innerHTML = `<button  class="botaoeditar"><a href="cadastro.html?id=${item.id}">Editar</a></button>
      <button onclick="excluir(${item.id})">Excluir</button>`;
        linha.appendChild(tdAcoes);

        corpoTabela.appendChild(linha);
    });
}

listarCarros();
