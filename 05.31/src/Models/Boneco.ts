export default class Boneco {
    private _id: number = 0;
    private _nome: string = "";
    private _tipo: string = "";
    private _altura: number = 0;
    private _material: string = "";

    constructor(id?: number, nome?: string, tipo?: string, altura?: number, material?: string) {
        if (id !== undefined) {
            this._id = id;
        }
        if (nome !== undefined) {
            this._nome = nome;
        }
        if (tipo !== undefined) {
            this._tipo = tipo;
        }
        if (altura !== undefined) {
            this._altura = altura;
        }
        if (material !== undefined) {
            this._material = material;
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

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(value: string) {
        this._tipo = value;
    }

    public get altura(): number {
        return this._altura;
    }

    public set altura(value: number) {
        this._altura = value;
    }

    public get material(): string {
        return this._material;
    }

    public set material(value: string) {
        this._material = value;
    }

    public imprimeAtributos(): void {
        console.log('Codigo: ${this._id}');
        console.log('Nome: ${this._nome}');
        console.log('Tipo: ${this._tipo}');
        console.log('Altura: ${this._altura}');
        console.log('Material: ${this._material}');
    }
}