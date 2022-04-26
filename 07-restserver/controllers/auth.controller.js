const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

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

module.exports = {
  login,
};
