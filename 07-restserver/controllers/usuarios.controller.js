const { response } = require('express');

const usuariosGet = (req, res = response) => {
  //res.status(404).json({
  res.json({
    msg: 'get API - controlador',
  });
};

const usuariosPost = (req, res = response) => {
  // nos guardamos el body que traiga la request
  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - controlador',
    nombre,
    edad, // lo devolvemos en la respuesta
  });
};

const usuariosPut = (req, res = response) => {
  res.json({
    msg: 'put API - controlador',
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
