const { crearArchivo } = require("./helpers/multiplicar");


console.clear();

//Destructuración de un array -> guarda cada elemento del array en una constante
const [, , arg3 = 'base=5'] = process.argv; // los primeros dos elementos no nos interesan, y si no nos dan ningun valor le ponemos 5 por defecto
const [, base] = arg3.split('='); // separamos el string por el = y nos quedamos con el segundo argumento(el número)
//console.log(base);

//crearArchivo(base);
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));