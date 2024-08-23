import PessoaDAO from "../models/DAO/PessoaDAO";
import Pessoa from "../models/Pessoa";
import { Request, Response } from "express";

export default class PessoaController {

    private _grupo: PessoaDAO = new PessoaDAO();

    salvar = async (req: Request, res: Response): Promise<Response> => {
        try {
            const pessoa: Pessoa = new Pessoa();
            pessoa.nome = req.body.nome;
            pessoa.endereco = req.body.endereco;
            pessoa.cpf = req.body.cpf;
            pessoa.email = req.body.email;
            pessoa.genero = req.body.genero;
            const resultado = await this._grupo.salvar(pessoa);
            return res.status(200).json(resultado);
        } catch (err) {
            console.error('Erro ao tentar salvar pessoa', err);
            return res.status(500).send({ error: 'Falha ao tentar salvar pessoa.' });
        }
    }

    listarTodos = async (req: Request, res: Response): Promise<Response> => {
        try {
            const pessoas = await this._grupo.listarTodos();
            return res.status(200).json(pessoas);
        } catch (err) {
            console.error('Erro ao tentar listar pessoas', err);
            return res.status(500).send({ error: 'Falha ao tentar listar pessoas.' });
        }
    }

    recuperarUm = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = Number(req.params.id);
            const pessoa: Pessoa | undefined = await this._grupo.recuperarUm(id);
            if (pessoa) {
                return res.status(200).json(pessoa);
            } else {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
        } catch (err) {
            console.error(`Erro ao tentar consultar pessoa ${req.params.id}, err`);
            return res.status(500).send({ error: 'Falha ao tentar consultar pessoa.' });
        }
    }

    editar = async (req: Request, res: Response): Promise<Response> => {
        const id = Number(req.params.id);
        const pessoa: Pessoa | undefined = await this._grupo.recuperarUm(id);
        if (pessoa) {
            pessoa.nome = req.body.nome;
            pessoa.endereco = req.body.endereco;
            pessoa.cpf = req.body.cpf;
            pessoa.email = req.body.email;
            pessoa.genero = req.body.genero;
            const resultado = await this._grupo.editar(pessoa);
            if (resultado) {
                return res.status(200).json(pessoa);
            } else {
                return res.status(500).json(`{ erro: Pessoa de ID ${id} não editada, ocorreu um erro }`);
            }
        } else {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }
    }

    excluir = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = Number(req.params.id);
            const pessoa: Pessoa | undefined = await this._grupo.recuperarUm(id);
            if (pessoa) {
                const resultado = await this._grupo.excluir(pessoa);
                if (resultado) {
                    return res.status(200).json(`{ message: Pessoa de ID ${id} removida }`);
                } else {
                    return res.status(500).json(`{ erro: Pessoa de ID ${id} não removida, ocorreu um erro }`);
                }
            } else {
                return res.status(404).json(`{ message: 'Pessoa não encontrada' }`);
            }
        } catch (err) {
            console.error(`Erro ao tentar remover pessoa ${req.params.id}:, err`);
            return res.status(500).send(`{ error: Falha ao tentar remover pessoa. }`);
        }
    }
}