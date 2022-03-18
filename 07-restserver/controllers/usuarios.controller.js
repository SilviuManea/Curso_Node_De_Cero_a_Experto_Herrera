const { response } = require('express');
const bcryptjs = require('bcryptjs');

// Usuario va con mayúsculas porque será una instancia del modelo, por convenio
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

const usuariosGet = (req = request, res = response) => {
  const {
    q,
    nombre = 'No name',
    apikey,
    page = 1,
    limit,
  } = req.query;
  //res.status(404).json({
  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = async (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  // nos guardamos aquellos campos que nos interesa
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol }); // asignamos los campos del body al usuario

  // Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: 'Ese correo ya está registrado',
    });
  }

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync(); // generamos el salt
  usuario.password = bcryptjs.hashSync(password, salt); // encriptamos la pass

  // guardamos el objeto en bd
  await usuario.save();
  res.json({
    msg: 'post API - controlador',
    usuario,
  });
};

const usuariosPut = (req, res = response) => {
  // const id = req.params.id; //Recogiendo solo el id
  const { id } = req.params; // Destructurando todos los params

  res.json({
    msg: 'put API - controlador',
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador',
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador',
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
