import models from '../models/models';

export default {
    list: async (req, res, next) => {
        try {
            const reg = await models.Articulo.find();
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error al intentar listas"
            });
            next(e);
        };
    },
    query: async (req, res, next)=>{
        try {
            const reg = await models.Articulo.findOne({_id:req.query._id});
            !reg ? reg.status(404).send({message:"El registro no existe"}) : res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error al consultar un articulo"
            });
            next(error);
        };
    },
};