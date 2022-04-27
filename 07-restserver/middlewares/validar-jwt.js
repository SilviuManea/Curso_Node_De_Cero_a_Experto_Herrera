const {response} = require('express')
const jwt = require ('jsonwebtoken');

const validarJWT = (req = request,res = response,next) => {
    // next se usa para indicar que puede seguir con el siguiente middleware
    // o con el controlador
    const token = req.header('x-token');//nombre del header que queremos pillar del front
    if(!token){// Si no hay token
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }
    try {// Si viene token
        // Validar y sacar el uid del payload
        const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        // Colocamos el uid el la request
        req.uid = uid; 
        // console.log(uid)
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Token no válido'
        })
    }
    console.log(token);
    next();
}

module.exports = {validarJWT}