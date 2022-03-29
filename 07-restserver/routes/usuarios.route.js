//Nos traemos la función Router de express para poder usarla aquí
const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get('/', usuariosGet);

router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check(
      'password',
      'El password debe de ser más de 6 letras',
    ).isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol').custom(async (rol = '') => {
      //rol = '' si rol no viene de bd será un string vacío
      const existeRol = await Role.findOne({ rol }); //si el objeto existe es que el rol está en la bd
      if (!existeRol) {
        //lanzamos un error personalizado que NO debe reventar la aplicación de node.
        throw new Error(`El rol ${rol} no está registrado en la BD`);
      }
      //si no devolvemos ningún error es que la validación ha pasado.
    }),
    validarCampos,
  ],
  usuariosPost,
);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;
