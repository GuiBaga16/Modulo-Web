export default class Bebida {
    private _codigo: number = 0;
    private _cor: string = "";
    private _temperatura: number = 0;
    private _quantidade: string = "";
    private _nome: string = "";
    private _teorAlcool: number = 0;


    constructor(codigo?: number,
        cor?: string,
        temperatura?: number,
        quantidade?: string,
        nome?: string,
        teorAlcool?: number
    ) {
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


    public get codigo(): number {
        return this._codigo;
    }


    public set codigo(value: number) {
        this._codigo = value;
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


    public get quantidade(): string {
        return this._quantidade;
    }


    public set quantidade(value: string) {
        this._quantidade = value;
    }


    public get nome(): string {
        return this._nome;
    }


    public set nome(value: string) {
        this._nome = value;
    }


    public get teorAlcool(): number {
        return this._teorAlcool;
    }


    public set teorAlcool(value: number) {
        this._teorAlcool = value;
    }




    //* ---------------------------------- //*




    public imprimeAtributos(): void {


        console.log(`Codigo: ${this._codigo}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`cor: ${this._cor}`);
        console.log(`temperatura: ${this._temperatura}`);
        console.log(`quantidade: ${this._quantidade}`);
        console.log(`teorAlcool: ${this._teorAlcool}`);
        console.log(` `);


    }
}
