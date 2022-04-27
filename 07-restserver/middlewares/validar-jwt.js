const {response} = require('express')
const jwt = require ('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = async (req = request,res = response,next) => {
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
        
        const usuario = await Usuario.findById( uid );

        // Verificar si el usuario existe
        console.log(usuario)
        if(!usuario){
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la BD'
            })
        }

        // Verificar si el uid del usuario autenticado tiene estado en true
        if(!usuario.estado){
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado false'
            })
        }
        // Leer el usuario que corresponde al uid y colocarlo en la request
        req.usuario = usuario;
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