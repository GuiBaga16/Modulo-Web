export default class Pessoa {

    private _id: number = 0;
    private _nome: string = "";
    private _endereco: string = "";
    private _cpf: string = "";
    private _email: string = "";
    private _genero: string = "";

    constructor(id?: number, nome?: string, endereco?: string, cpf?: string, email?: string, genero?: string) {
        if (id !== undefined) {
            this.id = id;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (endereco !== undefined) {
            this.endereco = endereco;
        }
        if (cpf !== undefined) {
            this.cpf = cpf;
        }
        if (email !== undefined) {
            this.email = email;
        }
        if (genero !== undefined) {
            this.genero = genero;
        }
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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
    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get genero(): string {
        return this._genero;
    }
    public set genero(value: string) {
        this._genero = value;
    }

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            endereco: this.endereco,
            cpf: this.cpf,
            email: this.email,
            genero: this.genero
        }
    }
}