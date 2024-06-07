import Boneco from "../Models/Boneco";

export default class BonecoController {
    private bonecos: Boneco[] = [];

    public salvar(boneco: Boneco): void {
        this.bonecos.push(boneco);
        console.log('Boneco salvo com sucesso');
    }

    public listarTodos(): void {
        this.bonecos.forEach(boneco => boneco.imprimeAtributos());
    }

    public recuperarPorId(id: number): Boneco | undefined {
        return this.bonecos.find(boneco => boneco.id === id);
    }

    public editar(id: number, novosDados: Partial<Boneco>): void {
        const boneco = this.recuperarPorId(id);
        if (boneco) {
            if (novosDados.nome) boneco.nome = novosDados.nome;
            if (novosDados.tipo) boneco.tipo = novosDados.tipo;
            if (novosDados.altura) boneco.altura = novosDados.altura;
            if (novosDados.material) boneco.material = novosDados.material;
            console.log('Boneco editado com sucesso');
        } else {
            console.log('Boneco não encontrado');
        }
    }

    public excluir(id: number): void {
        const index = this.bonecos.findIndex(boneco => boneco.id === id);
        if (index !== -1) {
            this.bonecos.splice(index, 1);
            console.log('Boneco excluído com sucesso');
        } else {
            console.log('Boneco não encontrado');
        }
    }
}