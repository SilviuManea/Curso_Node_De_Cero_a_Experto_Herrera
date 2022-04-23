const { response } = require('express');
const bcryptjs = require('bcryptjs');

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
  // nos guardamos aquellos campos que nos interesa
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol }); // asignamos los campos del body al usuario

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

const usuariosPut = async (req, res = response) => {
  // const id = req.params.id; //Recogiendo solo el id
  const { id } = req.params; // Destructurando todos los params
  const { password, google, correo, ...resto } = req.body; // EXTRAEMOS las distintas propiedades del body

  //TODO: validar contra BD
  if (password) {
    //si nos viene la passw es que el user quiere actualizarla
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(); // generamos el salt
    resto.password = bcryptjs.hashSync(password, salt); // encriptamos la pass
  }
  //Update user(con el resto de campos)
  const usuario = await Usuario.findByIdAndUpdate(id, resto); // si encuentra usuario con ese id actualiza el resto de campos que nos vengan en el body

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
