import { Request, Response } from 'express';
import CarrosDAO from '../models/DAO/CarrosDAO';
import Carro from '../models/Carros';

export default class CarrosController {
    private _mecanica: CarrosDAO = new CarrosDAO();

    salvar = async (req: Request, res: Response): Promise<Response> => {
        try {
            const carro: Carro = new Carro();
            carro.marca = req.body.marca;
            carro.modelo = req.body.modelo;
            carro.cor = req.body.cor;
            carro.categoria = req.body.categoria;
            carro.dataFabricacao = req.body.dataFabricacao;
            const resultado = await this._mecanica.salvar(carro);
            return res.status(200).json(resultado);
        } catch (err) {
            console.error('Erro ao tentar salvar carro:', err);
            return res.status(500).send({ error: 'Falha ao tentar salvar carro.' });
        }
    };

    recuperarTodos = async (req: Request, res: Response): Promise<Response> => {
        try {
            const carros = await this._mecanica.listarTodos();
            return res.status(200).json(carros);
        } catch (err) {
            console.error('Erro ao tentar consultar carros:', err);
            return res.status(500).send({ error: 'Falha ao tentar consultar carros.' });
        }
    };

    recuperarUm = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = Number(req.params.id);
            const carro: Carro | undefined = await this._mecanica.recuperarUm(id);
            if (carro) {
                return res.status(200).json(carro);
            } else {
                return res.status(404).json({ message: 'carro não encontrado' });
            }
        } catch (err) {
            console.error(`Erro ao tentar consultar carro ${req.params.id}:`, err);
            return res.status(500).send({ error: `Falha ao tentar consultar carro.` });
        }
    };

    apagar = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = Number(req.params.id);
            const carro: Carro | undefined = await this._mecanica.recuperarUm(id);
            if (carro) {
                const resultado = await this._mecanica.excluir(carro);
                if (resultado) {
                    return res.status(200).json({ message: `Carro de ID ${id} removido` });
                } else {
                    return res.status(500).json({ erro: `Carro de ID ${id} não removida, ocorreu um erro` });
                }
            } else {
                return res.status(404).json({ message: 'Carro não encontrado' });
            }
        } catch (err) {
            console.error(`Erro ao tentar apagar carro ${req.params.id}:`, err);
            return res.status(500).send({ error: `Falha ao tentar apagar carro.` });
        }
    };

    editar = async (req: Request, res: Response): Promise<Response> => {
        const id = Number(req.params.id);
        const carro: Carro | undefined = await this._mecanica.recuperarUm(id);
        if (carro) {
            carro.marca = req.body.marca;
            carro.modelo = req.body.modelo;
            carro.cor = req.body.cor;
            carro.categoria = req.body.categoria;
            carro.dataFabricacao = req.body.dataFabricacao;
            const resultado = await this._mecanica.editar(carro);
            if (resultado) {
                return res.status(200).json(Carro);
            } else {
                return res.status(500).json({ erro: `Carro de ID ${id} não editado, ocorreu um erro` });
            }
        } else {
            return res.status(404).json({ message: 'Carro não encontrado' });
        }
    };
}