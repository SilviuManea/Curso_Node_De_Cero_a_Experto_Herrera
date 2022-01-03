const {
  inquireMenu,
  pausa,
  leerImput,
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
  //console.log('Hola Mundo');
  let opt = '';
  //INSTANCIAMOS EL MODELO
  const tareas = new Tareas();
  do {
    opt = await inquireMenu();
    switch (opt) {
      case '1':
        //Crear tarea
        const desc = await leerImput('Descripción:');
        //console.log(desc);
        tareas.crearTarea(desc);
        break;
      case '2':
        //Listar tareas
        console.log(tareas.listadoArr);
        break;
    }
    await pausa();
  } while (opt !== '0');
};

main();
