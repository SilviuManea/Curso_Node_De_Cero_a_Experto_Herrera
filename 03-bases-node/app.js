const { crearArchivo } = require("./helpers/multiplicar");

const base = 5;

//crearArchivo(base);

//Ejercicio - hacer que trabaje como una promesa.

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));