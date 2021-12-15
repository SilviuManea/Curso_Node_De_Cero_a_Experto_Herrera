const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

crearArchivo(argv.base, argv.listar)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.rainbow, ' creado'),
  )
  .catch((err) => console.log(err));
