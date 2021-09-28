import tokenService from '../services/token';

export default {
	verifyUsuario:async(req,res,next) => {
		if(!req.headers.token){
			return res.status(404).send({
				message: 'no token'
			})
		} else {
			const response = await tokenService.decode(req.headers.token);
			if (response.rol === 'Administrador' || response.rol === 'Editor'){
				next();
			}else {
				return res.status(403).send({
					message: 'No autorizado'
				})
			}
		}
	}
}
