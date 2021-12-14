const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number', // tirará NaN si no es un número pero seguirá.
        demandOption: true
    }).
    check((argv, options) => {//validación adicional para que no siga.
        //console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;//si no hay ningún error
    })
    .argv;

//Ejercicio:
//option('l')
//listar
//boolean


console.clear();

//console.log(process.argv);
console.log(argv);

//crearArchivo(base);
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));