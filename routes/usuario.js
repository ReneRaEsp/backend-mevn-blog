import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';

const router = routerx();

router.post('/login', usuarioController.login);

router.post('/add', usuarioController.add);

router.get('/list', usuarioController.list);

export default router;
