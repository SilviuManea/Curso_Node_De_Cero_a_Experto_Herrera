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
    const googleUser = await googleVerify(id_token);
    console.log(googleUser);

    res.json({
      msg: 'Todo bien!',
      id_token,
    });
  } catch (error) {
    json.status(400).json({
      ok: false,
      msg: 'El token no se pudo verificar',
    });
  }
};

module.exports = {
  login,
  googleSignIn,
};
