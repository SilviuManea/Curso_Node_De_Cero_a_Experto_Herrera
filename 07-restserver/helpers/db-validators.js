const Role = require('../models/role');

 const esRoleValido = async (rol = '') => {
    
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
      //lanzamos un error personalizado que NO debe reventar la aplicación de node.
      throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
  }

  module.exports = {
      esRoleValido
  }