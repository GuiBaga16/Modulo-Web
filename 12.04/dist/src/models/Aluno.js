"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alunos {
    constructor(nota1, nota2, nota3, nome, escola) {
        this._nota1 = 0;
        this._nota2 = 0;
        this._nota3 = 0;
        this._nome = "";
        this._escola = "";
        this.media = 0;
        if (nota1 !== undefined) {
            this.nota1 = nota1;
        }
        if (nota2 !== undefined) {
            this.nota2 = nota2;
        }
        if (nota3 !== undefined) {
            this.nota3 = nota3;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (escola !== undefined) {
            this.escola = escola;
        }
    }
    get nota1() {
        return this._nota1;
    }
    set nota1(value) {
        this._nota1 = value;
    }
    get nota2() {
        return this._nota2;
    }
    set nota2(value) {
        this._nota2 = value;
    }
    get nota3() {
        return this._nota3;
    }
    set nota3(value) {
        this._nota3 = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get escola() {
        return this._escola;
    }
    set escola(value) {
        this._escola = value;
    }
    //* ---------------------------------- //*
    definirNota1(nota) {
        this.nota1 = nota;
    }
    definirNota2(nota) {
        this.nota2 = nota;
    }
    definirNota3(nota) {
        this.nota3 = nota;
    }
    mediaNotas() {
        this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
    }
    imprimeAtributos() {
        console.log(`Nota1: ${this._nota1}`);
        console.log(`Nota2: ${this._nota2}`);
        console.log(`Nota3: ${this._nota3}`);
        console.log(`Media: ${this.media}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Escola: ${this._escola}`);
        console.log(`--------------------------------`);
    }
}
exports.default = Alunos;
