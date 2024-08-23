export default class Carro {

    private _id: number = 0;
    private _marca: string = "";
    private _modelo: string = "";
    private _cor: string = "";
    private _categoria: string = "";
    private _dataFabricacao: string = "";
    private _problema: string = "";

    constructor(id?: number,
        marca?: string,
        modelo?: string,
        cor?: string,
        categoria?: string,
        dataFabricacao?: string,
        problema?: string
    ) {
        if (id !== undefined) {
            this.id = id;
        }
        if (marca !== undefined) {
            this._marca = marca;
        }
        if (modelo !== undefined) {
            this._modelo = modelo;
        }
        if (cor !== undefined) {
            this._cor = cor;
        }
        if (categoria !== undefined) {
            this._categoria = categoria;
        }
        if (dataFabricacao !== undefined) {
            this._dataFabricacao = dataFabricacao;
        }

        if (problema !== undefined) {
            this._problema = problema;
        }
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(value: string) {
        this._categoria = value;
    }

    public get dataFabricacao(): string {
        return this._dataFabricacao;
    }

    public set dataFabricacao(value: string) {
        this._dataFabricacao = value;
    }

    public get problema(): string {
        return this._problema;
    }

    public set problema(value: string) {
        this._problema = value;
    }

    public toJSON() {
        return {
            id: this.id,
            marca: this.marca,
            modelo: this.modelo,
            cor: this.cor,
            categoria: this.categoria,
            data_fabricacao: this.dataFabricacao,
            problema: this.problema,
        };
    }
}