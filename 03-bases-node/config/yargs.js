const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number', // tirará NaN si no es un número pero seguirá.
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar.',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number', // tirará NaN si no es un número pero seguirá.
    default: 10,
    describe: 'Este es el numero hasta donde quieres la tabla.',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Muestra la tabla en consola.',
  })
  .check((argv, options) => {
    //validación adicional para que no siga.
    //console.log('yargs', argv)
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true; //si no hay ningún error
  }).argv;

//lo exportamos para poder usarlo en el main
module.exports = argv;
