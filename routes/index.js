import routerx from 'express-promise-router';
import articuloRouter from './articulo';

const router=routerx();

router.use('/articulo', articuloRouter);

export default router;