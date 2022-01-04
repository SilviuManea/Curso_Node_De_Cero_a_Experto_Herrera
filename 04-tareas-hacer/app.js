const { guardarDB, leerDB } = require('./db/guardarArchivo');
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
  //Leemos desde la BD
  const tareasDB = leerDB();
  if (tareasDB) {
    //cargar las tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

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
    //guardamos la información en la bd
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== '0');
};

main();
