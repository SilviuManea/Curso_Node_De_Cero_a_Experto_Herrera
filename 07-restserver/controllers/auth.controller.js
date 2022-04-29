const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) => {
  const { correo, password } = req.body; //capturamos los datos del body de la request

  try {
    // Verificar si el email existe
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - correo',
      });
    }

    // Verificar si el usuario está activo(estado)
    if (!usuario.estado) {
      // si estado === false
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - estado:false',
      });
    }

    // Verificar la contraseña(devuelve true si matchea o false si no.)
    const validPassword = bcryptjs.compareSync(
      password,
      usuario.password,
    );
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - password',
      });
    }

    // Generar el JWT
    const token = await generarJWT(usuario.id); //generarJWT es una función nuestra

    res.json({
      msg: 'Login ok',
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

const googleSignIn = async (req, res = response) => {
  const { id_token } = req.body;

  try {
    const { correo, nombre, img } = await googleVerify(id_token);

    let usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      // Tengo que crearlo pasándole los parámetros que requiere nuestro modelo del usuario
      const data = {
        nombre,
        correo,
        password: ':P',
        img,
        google: true,
        rol: 'USER_ROLE',
        estado: true,
      };
      usuario = new Usuario(data);
      await usuario.save();
      console.log('Nuevo usuario creado');
    }

    // Si el usuario en DB pero estado a false(es que lo hemos dado de baja o está desactivado)
    if (!usuario.estado) {
      console.log('Usuario Bloqueado');
      return res.status(401).json({
        msg: 'Hable con el administrador,usuario bloqueado',
      });
    }

    // Generar el JWT si el usuario existe y está validado(ha pasado los checks anteriores)
    const token = await generarJWT(usuario.id); //generarJWT es una función nuestra
    console.log('Usuario activo');
    res.json({
      msg: 'Todo bien!',
      usuario,
      token, //ojo esto es el token de jwt que se genera en base al id de usuario de mongo que hemos encontrado y está activo y validado
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: 'El token no se pudo verificar',
    });
  }
};

module.exports = {
  login,
  googleSignIn,
};
