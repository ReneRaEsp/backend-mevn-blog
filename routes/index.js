import routerx from 'express-promise-router';
import articuloRouter from './articulo';
import usuarioRouter from './usuario';

const router=routerx();

router.use('/articulo', articuloRouter);

router.use('/usuario', usuarioRouter);

export default router;
