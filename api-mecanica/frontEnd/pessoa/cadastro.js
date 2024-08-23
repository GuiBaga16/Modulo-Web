const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const salvar = document.getElementById('salvar');
const nomeCampo = document.getElementById('nome');
const enderecoCampo = document.getElementById('endereco');
const cpfCampo = document.getElementById('cpf');
const emailCampo = document.getElementById('email');
const generoCampo = document.getElementById('genero');


async function buscarDados() {
    let resultado = await fetch(`http://localhost:3000/pessoas/${id}`);
    if (resultado.ok) {
        let pessoa = await resultado.json();
        console.log(pessoa);
        nomeCampo.value = pessoa.nome;
        enderecoCampo.value = pessoa.endereco;
        cpfCampo.value = pessoa.cpf;
        emailCampo.value = pessoa.email;
        generoCampo.value = pessoa.genero;
    } else {
        window.alert('Ops! Algo deu errado!');
    }
}

if (id) {
    buscarDados();
}

async function salvarDados(dados) {
    let url = 'http://localhost:3000/pessoas';
    let metodo = 'POST';
    if (id) { // editando
        url += '/' + id;
        metodo = 'PUT';
        console.log(url);
    }

    const resultado = await fetch(url, {
        method: metodo,
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    if (resultado.ok) {
        window.location.href = 'index.html';
    } else {
        window.alert('Ops! Algo deu errado!');
    }

}

salvar.addEventListener('click', () => {
    const nome = nomeCampo.value;
    const endereco = enderecoCampo.value;
    const cpf = cpfCampo.value;
    const email = emailCampo.value;
    const genero = generoCampo.value;

    const dados = {
        nome: nome,
        endereco: endereco,
        cpf: cpf,
        email: email,
        genero: genero
    }

    salvarDados(dados);
});