"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fruta {
    constructor(nome, cor, tamanho) {
        this._nome = "";
        this._cor = "";
        this._tamanho = 100;
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (tamanho !== undefined) {
            this.tamanho = tamanho;
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
    get tamanho() {
        return this._tamanho;
    }
    set tamanho(value) {
        this._tamanho = value;
    }
    //* ---------------------------------- //*
    consumir() {
        this._tamanho -= 20;
    }
    imprimeAtributos() {
        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Tamanho restante: ${this._tamanho}`);
        console.log(`--------------------------------`);
    }
}
exports.default = Fruta;
