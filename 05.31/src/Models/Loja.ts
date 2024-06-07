export default class Loja {
    private _id: number = 0;
    private _nome: string = "";
    private _endereco: string = "";
    private _cidade: string = "";
    private _telefone: string = "";

    constructor(id?: number,
        nome?: string,
        endereco?: string,
        cidade?: string,
        telefone?: string,
    ) {
        if (id !== undefined) {
            this._id = id;
        }
        if (nome !== undefined) {
            this._nome = nome;
        }
        if (endereco !== undefined) {
            this._endereco = endereco;
        }
        if (cidade !== undefined) {
            this._cidade = cidade;
        }
        if (telefone !== undefined) {
            this._telefone = telefone;
        }

    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get endereco(): string {
        return this._endereco;
    }

    public set endereco(value: string) {
        this._endereco = value;
    }

    public get cidade(): string {
        return this._cidade;
    }

    public set cidade(value: string) {
        this._cidade = value;
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(value: string) {
        this._telefone = value;
    }

    public imprimeAtributos(): void {

        console.log('Codigo: ${this._id}');
        console.log('Nome: ${this._nome}');
        console.log('cor: ${this._endereco}');
        console.log('Temperatura: ${this._cidade}');
        console.log('Quantidade: ${this._telefone}');

    }

}