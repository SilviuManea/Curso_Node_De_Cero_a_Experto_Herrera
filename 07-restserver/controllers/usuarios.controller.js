const { response } = require('express');
const bcryptjs = require('bcryptjs');

// Usuario va con mayúsculas porque será una instancia del modelo, por convenio
const Usuario = require('../models/usuario');

const usuariosGet = async (req = request, res = response) => {
  /*
  const {q,nombre = 'No name',apikey,page = 1,limit,} = req.query;
  */
  const { limite = 5, desde = 0 } = req.query; // esto extrae el valor del limite de la request si viene, y si no será 5 por defecto
  const query = {estado:true};

// const usuarios = await Usuario.find( query ) // de aquellos usuarios cuyo estado sea true
// .skip(Number(desde))
// .limit(Number(limite));
// const total = await Usuario.countDocuments( query );

// Usando promise al
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments( query ),
    Usuario.find( query )
    .skip(Number(desde))
    .limit(Number(limite))
  ]);

  res.json({total,usuarios});
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
  const { _id, password, google, correo, ...resto } = req.body; // EXTRAEMOS las distintas propiedades del body

  //TODO: validar contra BD
  if (password) {
    //si nos viene la passw es que el user quiere actualizarla
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(); // generamos el salt
    resto.password = bcryptjs.hashSync(password, salt); // encriptamos la pass
  }
  //Update user(con el resto de campos)
  const usuario = await Usuario.findByIdAndUpdate(id, resto); // si encuentra usuario con ese id actualiza el resto de campos que nos vengan en el body

  res.json(usuario);
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador',
  });
};

const usuariosDelete = async (req, res = response) => {

  const { id } = req.params;
  // console.log(id);

  const uid = req.uid;

  // Con esto lo borramos de la BD ( el objeto )
  // const usuario = await Usuario.findByIdAndDelete(id);

  // Con esto lo actualizamos.
  const usuario = await Usuario.findByIdAndUpdate( id, { estado:false } );
  res.json({usuario,uid}); // <--UID Lo sacamos de la request
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
