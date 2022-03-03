const { response } = require('express');

// Usuario va con mayúsculas porque será una instancia del modelo, por convenio
const Usuario = require('../models/usuario');

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
  // nos guardamos el body que traiga la request
  const body = req.body;
  const usuario = new Usuario(body); // asignamos los campos del body al usuario
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
