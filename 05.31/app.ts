import Boneco from "./src/Models/Boneco";
import BonecoController from "./src/Controllers/bonecoController";
import Loja from "./src/Models/Loja";
import LojaController from "./src/Controllers/lojaController";

import promptSync from "prompt-sync";
const prompt = promptSync();

let bonecoController: BonecoController = new BonecoController();
let lojaController: LojaController = new LojaController();
let opcao: number = 0;

while (opcao !== 99) {
    console.log(`
    ## Menu ##
    [1] Salvar boneco
    [2] Listar bonecos
    [3] Listar um
    [4] Editar boneco
    [5] Excluir boneco
    [6] Salvar loja
    [7] Listar uma
    [8] Listar lojas
    [9] Editar loja
    [10] Excluir loja
    [99] Sair
    ## Menu ##`);

    opcao = Number(prompt("Digite a opção escolhida: "));

    if (opcao === 1) {
        const id = Number(prompt("Digite o ID do boneco:"));
        const nome = prompt("Digite o nome do boneco:");
        const tipo = prompt("Digite o tipo do boneco:");
        const altura = Number(prompt("Digite a altura do boneco:"));
        const material = prompt("Digite o material do boneco:");

        const boneco = new Boneco(id, nome, tipo, altura, material);
        bonecoController.salvar(boneco);
    } else if (opcao === 2) {
        bonecoController.listarTodos();

    } else if (opcao === 3) {
        const idBoneco = Number(prompt("Digite o ID do boneco que deseja listar: "));
        const boneco = bonecoController.recuperarPorId(idBoneco);
        if (boneco) {
            boneco.imprimeAtributos();
        } else {
            console.log("Boneco com ID ${idBoneco} não encontrado.");
        }

    } else if (opcao === 4) {

        const idBonecoEditar = Number(prompt("Digite o ID do boneco que deseja editar: "));
        const novosDadosBoneco: Partial<Boneco> = {

            nome: prompt("Digite o novo nome do boneco: "),
            tipo: prompt("Digite o novo tipo do boneco: "),
            altura: Number(prompt("Digite a nova altura do boneco: ")),
            material: prompt("Digite o novo material do boneco: ")

        };
        bonecoController.editar(idBonecoEditar, novosDadosBoneco);

    } else if (opcao === 5) {

        const idBonecoExcluir = Number(prompt("Digite o ID do boneco que deseja excluir: "));
        bonecoController.excluir(idBonecoExcluir);

    } else if (opcao === 6) {

        const id = Number(prompt("Digite o ID da loja:"));
        const nome = prompt("Digite o nome da loja:");
        const endereco = prompt("Digite o endereço da loja:");
        const cidade = prompt("Digite a cidade da loja:");
        const telefone = prompt("Digite o telefone da loja:");

        const loja = new Loja(id, nome, endereco, cidade, telefone);
        lojaController.salvar(loja);

    } else if (opcao === 7) {

        lojaController.listarTodas();

    } else if (opcao === 7) {
        const idLoja = Number(prompt("Digite o ID da loja que deseja listar: "));
        const loja = lojaController.recuperarPorId(idLoja);
        if (loja) {
            loja.imprimeAtributos();
        } else {
            console.log("Loja com ID ${idLoja} não encontrada.");
        }

    } else if (opcao === 9) {

        const idLojaEditar = Number(prompt("Digite o ID da loja que deseja editar: "));
        const novosDadosLoja: Partial<Loja> = {
            nome: prompt("Digite o novo nome da loja: "),
            endereco: prompt("Digite o novo endereço da loja: "),
            cidade: prompt("Digite a nova cidade da loja: "),
            telefone: prompt("Digite o novo telefone da loja: ")

        };
        lojaController.editar(idLojaEditar, novosDadosLoja);

    } else if (opcao === 10) {

        const idLojaExcluir = Number(prompt("Digite o ID da loja que deseja excluir: "));
        lojaController.excluir(idLojaExcluir);

    } else if (opcao === 99) {

        console.log("Saindo...");
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}