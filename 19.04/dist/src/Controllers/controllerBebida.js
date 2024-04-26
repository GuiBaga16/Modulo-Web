"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class controllerBebida {
    constructor() {
        this._bebida = [];
    }
    salvar(Bebida) {
        this._bebida.push(Bebida);
    }
    recuperarTodos() {
        console.log(this._bebida);
    }
}
exports.default = controllerBebida;
