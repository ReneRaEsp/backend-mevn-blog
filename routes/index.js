import routerx from 'express-promise-router';
import articuloRouter from './articulo';

const router=routerx();

router.use('/articulo', articuloRouter);

router.use('/usuario', usuarioRouter);

export default router;
