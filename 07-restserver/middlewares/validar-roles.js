const { response } = require('express');

const esAdminRole = (req, res = response, next) => {
  // deberíamos disponer del usuario en la request tras haber validado el jwt
  if (!req.usuario) {
    // si por lo que sea la request no tuviera un usuario
    return res.status(500).json({
      msg: 'Se quiere verificar el role sin validar el token primero.',
    });
  }
  // si la request lo tiene nos los guardamos
  const { rol, nombre } = req.usuario;
  // si no tiene rol admin paramos la ejecución
  if (rol !== 'ADMIN_ROLE') {
    return res.status(401).json({
      msg: `${nombre} no es administrador - No puede hacer esto`,
    });
  }
  // si es admin haz el next y deja seguir la ejecución
  next();
};

module.exports = {
  esAdminRole,
};
