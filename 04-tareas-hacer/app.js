require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
  console.log('Hola Mundo');

  //La opción que va a elegir el usuario
  let opt = '';

  do {
    //Se guarda la opción del usuario y se coteja si es 0 para salir del bucle.
    opt = await mostrarMenu();
    console.log({ opt });
    if (opt !== '0') await pausa();
  } while (opt !== '0');

  //pausa();
};

main();
