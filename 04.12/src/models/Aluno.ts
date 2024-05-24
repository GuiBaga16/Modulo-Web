export default class Alunos {
    private _nota1: number = 0;
    private _nota2: number = 0;
    private _nota3: number = 0;
    private _nome: string = "";
    private _escola: string = "";
    media: number = 0;

    constructor(nota1?: number,
        nota2?: number,
        nota3?: number,
        nome?: string,
        escola?: string
    ) {
        if (nota1 !== undefined) {
            this.nota1 = nota1;
        }
        if (nota2 !== undefined) {
            this.nota2 = nota2;
        }
        if (nota3 !== undefined) {
            this.nota3 = nota3;
        }
        if (nome !== undefined) {
            this.nome = nome;
        }
        if (escola !== undefined) {
            this.escola = escola;
        }

    }


    public get nota1(): number {
        return this._nota1;
    }


    public set nota1(value: number) {
        this._nota1 = value;
    }


    public get nota2(): number {
        return this._nota2;
    }


    public set nota2(value: number) {
        this._nota2 = value;
    }


    public get nota3(): number {
        return this._nota3;
    }


    public set nota3(value: number) {
        this._nota3 = value;
    }


    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }


    public get escola(): string {
        return this._escola;
    }


    public set escola(value: string) {
        this._escola = value;
    }


    //* ---------------------------------- //*


    definirNota1(nota: number): void {
        this.nota1 = nota;
    }

    definirNota2(nota: number): void {
        this.nota2 = nota;
    }

    definirNota3(nota: number): void {
        this.nota3 = nota;
    }


    mediaNotas(): void {
        this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    public imprimeAtributos(): void {
        console.log(`Nota1: ${this._nota1}`);
        console.log(`Nota2: ${this._nota2}`);
        console.log(`Nota3: ${this._nota3}`);
        console.log(`Media: ${this.media}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Escola: ${this._escola}`);
        console.log(`--------------------------------`);
    }
}
