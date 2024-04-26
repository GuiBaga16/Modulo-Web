export default class Bebida {
    private _nome: string = "";
    private _cor: string = "";
    private _temperatura: number = 0;
    private _quantidade: number = 0;
    private _teorAlcool: string = "";

    constructor(nome?: string,
        cor?: string,
        temperatura?: number,
        quantidade?: number,
        teorAlcool?: string
    ) {
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

    public get temperatura(): number {
        return this._temperatura;
    }

    public set temperatura(value: number) {
        this._temperatura = value;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(value: number) {
        this._quantidade = value;
    }

    public get teorAlcool(): string {
        return this._teorAlcool;
    }

    public set teorAlcool(value: string) {
        this._teorAlcool = value;
    }

    public imprimeAtributos(): void {
        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Temperatura: ${this._temperatura}`);
        console.log(`temperatura: ${this._temperatura}`);
        console.log(`Teor alcool: ${this._teorAlcool}`);
        console.log(`--------------------------------`);
    }
}
