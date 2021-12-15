const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.base, argv.listar)
  .then((nombreArchivo) => console.log(nombreArchivo, ' creado'))
  .catch((err) => console.log(err));
