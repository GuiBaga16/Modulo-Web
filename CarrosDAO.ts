import Carro from '../Carros';
import pool from '../../db';

export default class BebidaDAO {

    public async salvar(b: Carro): Promise<Carro> {
        try {
            const query: string = `INSERT INTO carros (marca, modelo, cor, categoria, dataFabricacao) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
            const values = [b.marca, b.modelo, b.cor, b.categoria, b.dataFabricacao];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                b.id = result.rows[0].id;
                return b;
            } else {
                throw new Error('Falha ao inserir o carro');
            }
        } catch (error) {
            console.error('Erro ao tentar salvar carro:', error);
            throw new Error('Operação de inserção falhou.');
        }
    }

    public async listarTodos(): Promise<Carro[]> {
        try {
            const query = `SELECT * FROM carros`;
            const result = await pool.query(query);
            const carros: Array<Carro> = [];
            for (let i = 0; i < result.rows.length; i++) {
                const row = result.rows[i];
                const carro = new Carro();
                carro.id = row.id;
                carro.marca = row.marca;
                carro.modelo = row.modelo;
                carro.cor = row.cor;
                carro.categoria = row.categoria;
                carro.dataFabricacao = row.dataFabricacao;
                carros.push(carro);
            }
            return carros;
        } catch (error) {
            console.error('Erro ao tentar consultar carros:', error);
            throw new Error('Operação de consulta falhou.');
        }
    }

    public async recuperarUm(id: number): Promise<Carro | undefined> {
        try {
            const query = `SELECT * FROM carros WHERE id = $1`;
            const values = [id];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                const carro = new Carro();
                carro.id = result.rows[0].id;
                carro.marca = result.rows[0].marca;
                carro.modelo = result.rows[0].modelo;
                carro.cor = result.rows[0].cor;
                carro.categoria = result.rows[0].categoria;
                carro.dataFabricacao = result.rows[0].dataFabricacao;
                return carro;
            } else {
                return undefined;
            }
        } catch (error) {
            console.error(`Erro ao tentar consultar carro ${id}:`, error);
            throw new Error('Operação de consulta falhou.');
        }
    }

    public async excluir(b: Carro): Promise<boolean> {
        try {
            const query = `DELETE FROM carros WHERE id = $1`;
            const values = [b.id];
            const result = await pool.query(query, values);
            if (result.rowCount) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(`Erro ao tentar remover carro ${b.id}:`, error);
            throw new Error('Operação de remoção falhou.');
        }
    }

    public async editar(b: Carro): Promise<boolean> {
        try {
            const query = `UPDATE carros SET marca = $2, modelo = $3, cor = $4, cateegoria = $5, dataFabricacao = $6 WHERE id = $1`;
            const values = [b.id, b.marca, b.modelo, b.cor, b.categoria, b.dataFabricacao];
            const result = await pool.query(query, values);
            if (result.rowCount) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(`Erro ao tentar atualizar carro ${b.id}:`, error);
            throw new Error('Operação de edição falhou.');
        }
    }
}