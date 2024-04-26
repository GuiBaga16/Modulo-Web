"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bebida {
    constructor(nome, cor, temperatura, quantidade, teorAlcool) {
        this._nome = "";
        this._cor = "";
        this._temperatura = 0;
        this._quantidade = 0;
        this._teorAlcool = "";
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (temperatura !== undefined) {
            this.temperatura = temperatura;
        }
        if (quantidade !== undefined) {
            this.quantidade = quantidade;
        }
        if (teorAlcool !== undefined) {
            this.teorAlcool = teorAlcool;
        }
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get cor() {
        return this._cor;
    }
    set cor(value) {
        this._cor = value;
    }
    get temperatura() {
        return this._temperatura;
    }
    set temperatura(value) {
        this._temperatura = value;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(value) {
        this._quantidade = value;
    }
    get teorAlcool() {
        return this._teorAlcool;
    }
    set teorAlcool(value) {
        this._teorAlcool = value;
    }
    imprimeAtributos() {
        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Temperatura: ${this._temperatura}`);
        console.log(`temperatura: ${this._temperatura}`);
        console.log(`Teor alcool: ${this._teorAlcool}`);
        console.log(`--------------------------------`);
    }
}
exports.default = Bebida;
