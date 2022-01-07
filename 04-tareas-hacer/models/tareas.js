const Tarea = require('./tarea');

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

  listadoCompleto() {
    //Ejercicio - El numero tarea En verde o rojo si está completada o no
    //Formato   - 1. Desc tarea :: Completada | Pendiente
    //2.
  }
}

module.exports = Tareas;
