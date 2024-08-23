import { Router } from 'express';
import PessoaController from '../controller/PessoaController';

let router: Router = Router();
let pessoaController: PessoaController = new PessoaController();  

router.get('/pessoas', pessoaController.listarTodos);
router.post('/pessoas', pessoaController.salvar);
router.get('/pessoas/:id', pessoaController.recuperarUm);
router.delete('/pessoas/:id', pessoaController.excluir);
router.put('/pessoas/:id', pessoaController.editar);

export default router;