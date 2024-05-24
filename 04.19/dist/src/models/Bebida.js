"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bebida {
    constructor(codigo, cor, temperatura, quantidade, nome, teorAlcool) {
        this._codigo = 0;
        this._cor = "";
        this._temperatura = 0;
        this._quantidade = "";
        this._nome = "";
        this._teorAlcool = 0;
        if (codigo !== undefined) {
            this.codigo = codigo;
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
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (teorAlcool !== undefined) {
            this.teorAlcool = teorAlcool;
        }
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
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
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get teorAlcool() {
        return this._teorAlcool;
    }
    set teorAlcool(value) {
        this._teorAlcool = value;
    }
    //* ---------------------------------- //*
    imprimeAtributos() {
        console.log(`Codigo: ${this._codigo}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`cor: ${this._cor}`);
        console.log(`temperatura: ${this._temperatura}`);
        console.log(`quantidade: ${this._quantidade}`);
        console.log(`teorAlcool: ${this._teorAlcool}`);
        console.log(` `);
    }
}
exports.default = Bebida;
