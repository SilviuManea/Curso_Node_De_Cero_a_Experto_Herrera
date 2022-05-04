import { Request, Response } from 'express';

// Obtener todos los usuarios
export const getUsuarios = (req:Request ,res:Response) =>{

    res.json({
        msg:'getUsuarios'
    })
}
// Obtener usuario por ID
export const getUsuarioById = (req:Request ,res:Response) =>{

    const {id} = req.params;

    res.json({
        msg:'getUsuarioById',
        id
    })
}
// Crear usuario
export const postUsuario = (req:Request ,res:Response) =>{

    const {body} = req;
    console.log(body)

    res.json({
        msg:'postUsuario',
        body,
    })
}
// Actualizar usuario por ID
export const putUsuarioById = (req:Request ,res:Response) =>{

    const {id} = req.params;
    const {body} = req;

    res.json({
        msg:'putUsuario',
        body,
        id
    })
}
// Eliminar un usuario
export const deleteUsuarioById = (req:Request ,res:Response) =>{

    const {id}= req.params;

    res.json({
        msg:'deleteUsuarioById',
        id
    })
}