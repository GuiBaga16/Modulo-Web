import Loja from "../Models/Loja";

export default class LojaController {
    private lojas: Loja[] = [];

    public salvar(loja: Loja): void {
        this.lojas.push(loja);
        console.log('Loja salva com sucesso');
    }

    public listarTodas(): void {
        this.lojas.forEach(loja => loja.imprimeAtributos());
    }

    public recuperarPorId(id: number): Loja | undefined {
        return this.lojas.find(loja => loja.id === id);
    }

    public editar(id: number, novosDados: Partial<Loja>): void {
        const loja = this.recuperarPorId(id);
        if (loja) {
            if (novosDados.nome) loja.nome = novosDados.nome;
            if (novosDados.endereco) loja.endereco = novosDados.endereco;
            if (novosDados.cidade) loja.cidade = novosDados.cidade;
            if (novosDados.telefone) loja.telefone = novosDados.telefone;
            console.log('Loja editada com sucesso');
        } else {
            console.log('Loja não encontrada');
        }
    }

    public excluir(id: number): void {
        const index = this.lojas.findIndex(loja => loja.id === id);
        if (index !== -1) {
            this.lojas.splice(index, 1);
            console.log('Loja excluída com sucesso');
        } else {
            console.log('Loja não encontrada');
        }
    }
}