import Bebida from "../models/Bebida";


import promptSync from "prompt-sync";
const prompt = promptSync();


export default class BebidaController {


    //! Por enquanto os dados vão ser salvos em um array.


    private _bebidas: Array<Bebida> = [];


    //*metodo de salvar


    public salvar(bebida: Bebida): void {
        this._bebidas.push(bebida);
    }


    //*metodo de imprimir todos atributos


    public imprimeTodos(): void {
        for (let index = 0; index < this._bebidas.length; index++) {
            const element = this._bebidas[index];
            element.imprimeAtributos();
        }
    }


    //*metodo de editar


    public editar(codigo: number): void {
        const id = this._bebidas.findIndex(bebida => bebida.codigo === codigo);
        if (id !== -1) {


            console.log("Informe os novos valores para a bebida:");
            console.log(` `);
            const nome = prompt("Nome: ");
            const cor = prompt("Cor: ");
            const quantidade = prompt("Quantidade: ");
            const temperatura = Number(prompt("Temperatura: "));
            const teorAlcool = Number(prompt("Teor de álcool: "));


            const novaBebida = new Bebida(codigo, cor, temperatura, quantidade, nome, teorAlcool);
            this._bebidas[id] = novaBebida;
            console.log(` `);
            console.log(`** Bebida com código ${codigo} editada com sucesso. **`);
            console.log(` `);


        } else {
            console.log(`! Bebida com código ${codigo} não encontrada. !`);
        }
    }


    //*metodo de excluir


    public excluir(codigo: number): void {


        this._bebidas = this._bebidas.filter(bebida => bebida.codigo !== codigo);
    }
}
