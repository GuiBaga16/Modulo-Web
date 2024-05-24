export default class Fruta {
    private _nome: string = "";
    private _cor: string = "";
    private _tamanho: number = 100;


    constructor(nome?: string,
        cor?: string,
        tamanho?: number,
    ) {

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


    public get tamanho (): number {
        return this._tamanho;
    }


    public set tamanho(value: number) {
        this._tamanho = value;
    }


    //* ---------------------------------- //*

    consumir(): void {
        this._tamanho -= 20 ; 
    }

    public imprimeAtributos(): void {

        console.log(`Nome: ${this._nome}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Tamanho restante: ${this._tamanho}`);
        console.log(`--------------------------------`);
    }
}