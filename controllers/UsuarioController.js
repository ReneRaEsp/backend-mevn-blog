import models from '../models/models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
	add:async (req,res,next)=>{
		try {
			req.body.password = await bcrypt.hash(req.body.password, 10);
			const reg = await models.Usuario.create(req.body);
			res.status(200).json(reg);
		}catch(e){
			res.status(500).send({
				message:'Ocurrio un error'
			});
			next(e);
		}
	},

	login: async (req, res, next) =>{
		try {
			const user =  await models.Usuario.findOne({email:req.body.email, estado:1});
			if (user){
				const match = await bcrypt.compare(req.body.password, user.password);
				if (match){
					const tokenReturn = await token.encode(user._id, user.rol, user.email);
					res.status(200).jscon({user, tokenReturn});
				} else {
					res.status(404).send({
						message: 'Password incorrecto'
					})
				}
			}else{
				res.status(404).send({
					message: 'No existe el usuario'
				})
			}
		} catch(e){
			res.status(500).send({
				message: 'Ocurrio un error'
			})
			next(e);
		}
	}
}
