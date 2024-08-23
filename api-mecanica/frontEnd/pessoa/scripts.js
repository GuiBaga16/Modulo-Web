async function excluir(id) {
    await fetch(`http://localhost:3000/pessoas/${id}`, { 
        method: 'DELETE' 
    });
    window.location.reload();
}

async function listarPessoas() {
    const response = await fetch(`http://localhost:3000/pessoas`);
    const dados = await response.json();
    const corpoTabela = document.getElementById('corpo-tabela');
    
    dados.forEach(item => {
        const linha = document.createElement('tr');
        
        const tdId = document.createElement('td');
        tdId.textContent = item.id;
        linha.appendChild(tdId);

        const tdNome = document.createElement('td');
        tdNome.textContent = item.nome;
        linha.appendChild(tdNome);

        const tdEndereco = document.createElement('td');
        tdEndereco.textContent = item.endereco;
        linha.appendChild(tdEndereco);

        const tdCpf = document.createElement('td');
        tdCpf.textContent = item.cpf;
        linha.appendChild(tdCpf);
        
        const tdEmail = document.createElement('td');
        tdEmail.textContent = item.email;
        linha.appendChild(tdEmail);
        
        const tdGenero = document.createElement('td');
        tdGenero.textContent = item.genero;
        linha.appendChild(tdGenero);

        const tdAcoes = document.createElement('td');
        tdAcoes.classList.add("acoes");
        tdAcoes.innerHTML = `<button  class="botaoeditar"><a href="cadastro.html?id=${item.id}">Editar</a></button>
      <button onclick="excluir(${item.id})">Excluir</button>`;
        linha.appendChild(tdAcoes);

        corpoTabela.appendChild(linha);
    });
}

listarPessoas();
