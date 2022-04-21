const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  correo: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, 'El rol obligatorio'],
    //enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

// Sobreescribir un método para que haga algo que nosotros queremos(eliminar el password y la versión)
UsuarioSchema.methods.toJSON = function (){ //ojo tiene que ser una función normal , sin flecha, esto es asi porque una funcion de flecha mantiene a lo que apunta el this fuera de la misma y nosotros necesitamos hacer referencia a la instancia creada, por lo que se usa la función normal.
  const {__v,password, ...usuario} = this.toObject(); // esto genera la instancia como objeto literal de javascript. SACA los campos __v y password, y usando el operador rest(...) guarda el resto de campos en la variable usuario.
  return usuario;//devolvemos el objeto menos esos dos campos que acabamos de quitar
}

// Exportamos Usuario que será el nombre que tendrá nuestra coleccion
// Mongoogse le Añade una s al final. Por lo que se llamará Usuarios

module.exports = model('Usuario', UsuarioSchema);
