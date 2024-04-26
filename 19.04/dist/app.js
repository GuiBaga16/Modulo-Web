"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bebida_1 = __importDefault(require("./src/models/Bebida"));
const controllerBebida_1 = __importDefault(require("./src/Controllers/controllerBebida"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let bebida = new controllerBebida_1.default();
for (let index = 0; index < 3; index++) {
    let drink1 = new Bebida_1.default();
    drink1.nome = prompt("Digite o nome da bebida: ");
    drink1.cor = prompt("Digite a cor da bebida: ");
    drink1.temperatura = Number(prompt("Digite a temperatura: "));
    drink1.quantidade = Number(prompt("Digite a quantidade: "));
    drink1.teorAlcool = prompt("Digite quanto alcool tem: ");
    bebida.salvar(drink1);
}
bebida.recuperarTodos();
