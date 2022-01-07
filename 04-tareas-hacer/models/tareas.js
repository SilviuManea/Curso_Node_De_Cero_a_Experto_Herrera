const Tarea = require('./tarea');

require('colors');
/**
 * //Ejemplo de como vamos a manejar las tareas
 * _listado:
 *        {'uuid-123123123-234234234-2 : { id:2 , desc:asd , completadoEN:992231}},
 */
class Tareas {
  //ojo tareas en plural
  _listado = {};

  get listadoArr() {
    const listado = [];
    //Recorremos las llaves del objeto
    Object.keys(this._listado).forEach((key) => {
      //console.log(key);
      //extraemos la tarea para cada llave
      const tarea = this._listado[key];
      //llenamos el listado con las tareas
      listado.push(tarea);
    });
    //devolvemos el listado
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  //Solución Tutorial
  listadoCompleto() {
    this.listadoArr.forEach((tarea, i) => {
      //Inicializamos el indice a 1
      const idx = `${i + 1}`.green;
      //Sacamos la descripción y cuando se ha completado usando destructuración
      const { desc, completadoEn } = tarea;
      //logica para pintar el estado de verde o rojo según si completadoEn tiene valor nulo o no
      const estado = completadoEn
        ? 'Completada'.green
        : 'Pendiente'.red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas) {
    //Le pasaremos true o false según se queremos mostrar unas u otras
    let tareasCompletadas = [];
    let tareasPendientes = [];
    //Separo las tareas completadas de las pendientes en arrays temporales
    this.listadoArr.forEach((tarea) => {
      //console.log(tarea);
      if (completadas && tarea.completadoEn) {
        //Añadir al array de completadas
        tareasCompletadas.push(tarea);
      } else if (!tarea.completadoEn) {
        //Añadir al array de pendientes
        tareasPendientes.push(tarea);
      }
    });
    //En función del parámetro elegido en el menú muestro unas u otras:
    if (completadas) {
      //console.log(tareasCompletadas);
      tareasCompletadas.forEach((TareaCompletada, i) => {
        const { desc, completadoEn } = TareaCompletada;
        const estado = completadoEn
          ? 'Completada'.green
          : 'Pendiente'.red;
        const idxCompletadas = i + 1;
        console.log(`${idxCompletadas} ${desc} :: ${estado}`);
      });
    } else {
      tareasPendientes.forEach((TareaPendiente, i) => {
        const { desc, completadoEn } = TareaPendiente;
        const estado = completadoEn
          ? 'Completada'.green
          : 'Pendiente'.red;
        const idxPendientes = i + 1;
        console.log(`${idxPendientes} ${desc} :: ${estado}`);
      });
    }
  }
}

module.exports = Tareas;
