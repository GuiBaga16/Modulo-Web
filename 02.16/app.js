"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let continuar = 's';
let nomes = [];
let valores = [];
let total = 0;
while (continuar === 's') {
    const nome = prompt("Digite o nome do pedido: ");
    const valor = parseInt(prompt("Digite o valor da compra: "));
    nomes.push(nome);
    valores.push(valor);
    total += valor;
    continuar = prompt("Deseja continuar? (s/n): ");
}
console.log("Os pedidos são:");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ": R$" + valores[i]);
}
console.log("O valor total é: R$" + total);
