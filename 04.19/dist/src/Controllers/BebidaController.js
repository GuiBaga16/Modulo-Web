"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bebida_1 = __importDefault(require("../models/Bebida"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class BebidaController {
    constructor() {
        //! Por enquanto os dados vão ser salvos em um array.
        this._bebidas = [];
    }
    //*metodo de salvar
    salvar(bebida) {
        this._bebidas.push(bebida);
    }
    //*metodo de imprimir todos atributos
    imprimeTodos() {
        for (let index = 0; index < this._bebidas.length; index++) {
            const element = this._bebidas[index];
            element.imprimeAtributos();
        }
    }
    listarUm(id) {
        return this._bebidas.find(element => element.codigo === id);
    }
    //*metodo de editar
    editar(codigo) {
        const id = this._bebidas.findIndex(bebida => bebida.codigo === codigo);
        if (id !== -1) {
            console.log("Informe os novos valores para a bebida:");
            console.log(` `);
            const nome = prompt("Nome: ");
            const cor = prompt("Cor: ");
            const quantidade = prompt("Quantidade: ");
            const temperatura = Number(prompt("Temperatura: "));
            const teorAlcool = Number(prompt("Teor de álcool: "));
            const novaBebida = new Bebida_1.default(codigo, cor, temperatura, quantidade, nome, teorAlcool);
            this._bebidas[id] = novaBebida;
            console.log(` `);
            console.log(`** Bebida com código ${codigo} editada com sucesso. **`);
            console.log(` `);
        }
        else {
            console.log(`! Bebida com código ${codigo} não encontrada. !`);
        }
    }
    //*metodo de excluir
    excluir(codigo) {
        this._bebidas = this._bebidas.filter(bebida => bebida.codigo !== codigo);
    }
}
exports.default = BebidaController;
