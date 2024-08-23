const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const salvar = document.getElementById('salvar');
const modeloCampo = document.getElementById('modelo');
const marcaCampo = document.getElementById('marca');
const corCampo = document.getElementById('cor');
const categoriaCampo = document.getElementById('categoria');
const dataFabricacaoCampo = document.getElementById('dataFabricacao');
const problemaCampo = document.getElementById('problema');

async function buscarDados() {
    let resultado = await fetch(`http://localhost:3000/carros/${id}`);
    if (resultado.ok) {
        let carro = await resultado.json();
        console.log(carro);
        modeloCampo.value = carro.modelo;
        marcaCampo.value = carro.marca;
        corCampo.value = carro.cor;
        categoriaCampo.value = carro.categoria;
        dataFabricacaoCampo.value = carro.data_fabricacao;
        problemaCampo.value = carro.problema;
    } else {
        window.alert('Ops! Algo deu errado!');
    }
}

// Está editando, preenche os dados
if (id) {
    buscarDados();
}


async function salvarDados(dados) {
    let url = 'http://localhost:3000/carros';
    let metodo = 'POST';
    if (id) { // editando
        url += '/' + id;
        metodo = 'PUT';
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
    const modelo = modeloCampo.value;
    const marca = marcaCampo.value;
    const cor = corCampo.value;
    const categoria = categoriaCampo.value;
    const dataFabricacao = dataFabricacaoCampo.value;
    const problema = problemaCampo.value;

    const dados = {
        modelo: modelo,
        cor: cor,
        marca: marca,
        categoria: categoria,
        dataFabricacao: dataFabricacao,
        problema: problema
    }

    salvarDados(dados);
});