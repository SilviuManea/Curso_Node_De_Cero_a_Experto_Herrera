const { guardarDB, leerDB } = require('./db/guardarArchivo');
const {
  inquireMenu,
  pausa,
  leerImput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
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
        tareas.listadoCompleto();
        break;
      case '3':
        //Listar tareas completadas
        tareas.listarPendientesCompletadas(true);
        break;
      case '4':
        //Listar tareas pendientes
        tareas.listarPendientesCompletadas(false);
        break;
      case '5':
        //Completado | pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        //console.log(ids);
        tareas.toggleCompletadas(ids);

        break;
      case '6':
        //Borrar - importante usar el await para que no se solapen los menús
        const id = await listadoTareasBorrar(tareas.listadoArr);
        //Comprobamos que mientras el id sea distinto de 0 borramos la tarea que corresponda
        if (id !== '0') {
          //console.log(id);
          //Confirmación del borrado
          const ok = await confirmar(
            '¿Está seguro que desea borrar la(s) tarea(s)?',
          );
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea(s) borrada(s) correctamente.');
          }
        }
        break;
    }
    //guardamos la información en la bd
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== '0');
};

main();
