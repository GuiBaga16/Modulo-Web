import { Router } from 'express';
import CarroController from '../controller/CarrosController';

let router: Router = Router();
let carroController: CarroController = new CarroController();  

router.get('/carros', carroController.recuperarTodos);
router.post('/carros', carroController.salvar);
router.get('/carros/:id', carroController.recuperarUm);
router.delete('/carros/:id', carroController.apagar);
router.put('/carros/:id', carroController.editar);

export default router;