import Pessoa from "../Pessoa";
import pool from "../../db";

export default class PessoaDAO {

    public async salvar(p: Pessoa): Promise<Pessoa> {
        try {
            const query: string = "INSERT INTO pessoas (nome, endereco, cpf, email, genero) VALUES ($1, $2, $3, $4, $5) RETURNING id";
            const values = [p.nome, p.endereco, p.cpf, p.email, p.genero];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                p.id = result.rows[0].id;
                return p;
            } else {
                throw new Error("Falha ao inserir pessoa!");
            }
        } catch (error) {
            console.error("Erro ao tentar salvar pessoa!", error);
            throw new Error("Operação de inserção falhou!");
        }

    }

    public async recuperarUm(id: number): Promise<Pessoa | undefined> {
        try {
            const query = "SELECT * FROM pessoas WHERE id = $1";
            const values = [id];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                const pessoa = new Pessoa();
                pessoa.id = result.rows[0].id;
                pessoa.nome = result.rows[0].nome;
                pessoa.endereco = result.rows[0].endereco;
                pessoa.cpf = result.rows[0].cpf;
                pessoa.email = result.rows[0].email;
                pessoa.genero = result.rows[0].genero;
                return pessoa;
            } else {
                return undefined;
            }
        } catch (error) {
            console.error("Erro ao tentar consultar pessoa!", error);
            throw new Error("Operação de consulta falhou!");
        }
    }

    public async listarTodos(): Promise<Pessoa[]> {
        try {
            const query = "SELECT * FROM pessoas";
            const result = await pool.query(query);
            const pessoas: Array<Pessoa> = [];

            for (let i = 0; i < result.rows.length; i++) {
                const row = result.rows[i];
                const pessoa = new Pessoa();
                pessoa.id = row.id;
                pessoa.nome = row.nome;
                pessoa.endereco = row.endereco;
                pessoa.cpf = row.cpf;
                pessoa.email = row.email;
                pessoa.genero = row.genero;
                pessoas.push(pessoa);
            }
            return pessoas;
        } catch (error) {
            console.error("Erro ao tentar listar pessoas!", error);
            throw new Error("Operação de listagem falhou!");
        }
    }

    public async editar(p: Pessoa): Promise<boolean> {
        try {
            const query = "UPDATE pessoas SET nome = $2, endereco = $3, cpf = $4, email = $5, genero = $6 WHERE id = $1";
            const values = [p.id, p.nome, p.endereco, p.cpf, p.email, p.genero];
            const result = await pool.query(query, values);
            if (result.rowCount) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Erro ao tentar editar pessoa!", error);
            throw new Error("Operação de edição falhou!");
        }
    }

    public async excluir(p: Pessoa): Promise<boolean> {
        try {
            const query = "DELETE FROM pessoas WHERE id = $1";
            const values = [p.id];
            const result = await pool.query(query, values);

            if (result.rowCount) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Erro ao tentar excluir pessoa!", error);
            throw new Error("Operação de remoção falhou!");
        }
    }
}