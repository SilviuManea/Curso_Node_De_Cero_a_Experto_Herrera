const { inquireMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
  //console.log('Hola Mundo');
  let opt = '';

  do {
    //opt = await inquireMenu();
    //console.log({ opt });
    const tareas = new Tareas();
    const tarea = new Tarea('Comprar comida');

    //Guardamos en el listado como un objeto con el id de la tarea y una propiedad que es el propio objeto tarea
    tareas._listado[tarea.id] = tarea;
    console.log(tareas);

    await pausa();
  } while (opt !== '0');
};

main();
