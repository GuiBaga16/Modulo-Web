export default class Fruta {
    private _nome: string = "";
    private _cor: string = "";
    private _consumir: number = 0;


    constructor(nome?: string,
        cor?: string,
        consumir?: number,
    ) {

        if (nome !== undefined) {
            this.nome = nome;
        }
        if (cor !== undefined) {
            this.cor = cor;
        }
        if (consumir !== undefined) {
            this.consumir = consumir;
        }
    }

    public get nome(): string {
        return this._nome;
    }


    public set nome(value: string) {
        this._nome = value;
    }


    public get cor(): string {
        return this._cor;
    }


    public set cor(value: string) {
        this._cor = value;
    }


    public get consumir(): number {
        return this._consumir;
    }


    public set consumir(value: number) {
        this._consumir = value;
    }


    //* ---------------------------------- //*

    public imprimeAtributos(): void {

        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Consumida: ${this._consumir}`);
    }
}