import Bebida from "../models/Bebida";

export default class controllerBebida {

    private _bebida: Array<Bebida> = [];

    public salvar(Bebida: Bebida): void {
        this._bebida.push(Bebida);
    }

    public recuperarTodos(): void {
        console.log(this._bebida);
    }
}