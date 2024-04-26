import Bebida from "./src/models/Bebida";
import controllerBebida from "./src/Controllers/controllerBebida";

import promptSync from "prompt-sync";
const prompt = promptSync();

let bebida: controllerBebida = new controllerBebida();

for (let index = 0; index < 3; index++) {

    let drink1: Bebida = new Bebida();

    drink1.nome = prompt("Digite o nome da bebida: ");
    drink1.cor = prompt("Digite a cor da bebida: ");
    drink1.temperatura = Number(prompt("Digite a temperatura: "));
    drink1.quantidade = Number(prompt("Digite a quantidade: "));
    drink1.teorAlcool = prompt("Digite quanto alcool tem: ");
    bebida.salvar(drink1);
}

bebida.recuperarTodos();