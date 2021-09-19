import routerx from 'express-promise-router';
import articuloController  from '../controllers/ArticuloController';

const router = routerx();

router.get('/list', articuloController.list);

router.get('/query', articuloController.query);

router.post('/add', articuloController.add);


export default router;
