export default class Cidade {
    private _tamanho: string = "";
    private _prefeito: string = "";
    private _pais: string = "";
    private _nome: string = "";
    private _habitantes: number = 0;
    private _estado: string = "";


    constructor(tamanho?: string,
        prefeito?: string,
        pais?: string,
        nome?: string,
        habitantes?: number,
        estado?: string
    ) {
        if (tamanho !== undefined) {
            this.tamanho = tamanho;
        }
        if (prefeito !== undefined) {
            this.prefeito = prefeito;
        }
        if (pais !== undefined) {
            this.pais = pais;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (habitantes !== undefined) {
            this.habitantes = habitantes;
        }
        if (estado !== undefined) {
            this.estado = estado;
        }
    }


    public get tamanho(): string {
        return this._tamanho;
    }


    public set tamanho(value: string) {
        this._tamanho = value;
    }


    public get prefeito(): string {
        return this._prefeito;
    }


    public set prefeito(value: string) {
        this._prefeito = value;
    }


    public get pais(): string {
        return this._pais;
    }


    public set pais(value: string) {
        this._pais = value;
    }


    public get nome(): string {
        return this._nome;
    }
    
    public set nome(value: string) {
        this._nome = value;
    }


    public get habitantes(): number {
        return this._habitantes;
    }


    public set habitantes(value: number) {
        this._habitantes = value;
    }


    public get estado(): string {
        return this._estado;
    }


    public set estado(value: string) {
        this._estado = value;
    }


    //* -----------------métodos para add----------------- //*


    aumentarHabitantes(add: number): void {
        this.habitantes += add;
    }


    diminuirHabitantes(add: number): void {
        this.habitantes -= add;
    }


    editaPrefeito(edita: string): void {
        this.prefeito = edita;
    }


    public imprimeAtributos(): void {


        console.log(`Tamanho: ${this._tamanho}`);
        console.log(`Prefeito: ${this._prefeito}`);
        console.log(`Pais: ${this._pais}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Habitantes: ${this._habitantes}`);
        console.log(`Estado: ${this._estado}`);
        console.log(`--------------------------------`);
    }
}
