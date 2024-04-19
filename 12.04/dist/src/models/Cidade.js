"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cidade {
    constructor(tamanho, prefeito, pais, nome, habitantes, estado) {
        this._tamanho = "";
        this._prefeito = "";
        this._pais = "";
        this._nome = "";
        this._habitantes = 0;
        this._estado = "";
        if (tamanho !== undefined) {
            this.tamanho = tamanho;
        }
        if (prefeito !== undefined) {
            this.prefeito = prefeito;
        }
        if (pais !== undefined) {
            this.pais = pais;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (habitantes !== undefined) {
            this.habitantes = habitantes;
        }
        if (estado !== undefined) {
            this.estado = estado;
        }
    }
    get tamanho() {
        return this._tamanho;
    }
    set tamanho(value) {
        this._tamanho = value;
    }
    get prefeito() {
        return this._prefeito;
    }
    set prefeito(value) {
        this._prefeito = value;
    }
    get pais() {
        return this._pais;
    }
    set pais(value) {
        this._pais = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get habitantes() {
        return this._habitantes;
    }
    set habitantes(value) {
        this._habitantes = value;
    }
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
    //* -----------------métodos para add----------------- //*
    aumentarHabitantes(add) {
        this.habitantes += add;
    }
    diminuirHabitantes(add) {
        this.habitantes -= add;
    }
    editaPrefeito(edita) {
        this.prefeito = edita;
    }
    imprimeAtributos() {
        console.log(`Tamanho: ${this._tamanho}`);
        console.log(`Prefeito: ${this._prefeito}`);
        console.log(`Pais: ${this._pais}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Habitantes: ${this._habitantes}`);
        console.log(`Estado: ${this._estado}`);
        console.log(`--------------------------------`);
    }
}
exports.default = Cidade;
