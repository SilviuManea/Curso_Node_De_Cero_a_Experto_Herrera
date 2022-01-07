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

  listadoCompleto(tareasArr = []) {
    let tareasCount = 0;
    //let _listadoCompleto = {};
    let nrTarea = 1;

    tareasCount = tareasArr.length;
    //console.log(tareasCount);

    tareasArr.forEach((Tarea) => {
      //Comprobamos si la tarea se ha completado o no (mirando el campo completadoEn)
      if (Tarea.completadoEn == null) {
        console.log(
          `${nrTarea}`.red + '.' + `${Tarea.desc}` + ` :: Pendiente`,
        );
      } else {
        console.log(
          `${nrTarea}`.green +
            '.' +
            `${Tarea.desc}` +
            ` :: Completada`,
        );
      }

      nrTarea++;
    });
    //Ejercicio - El numero tarea En verde o rojo si está completada o no
    //Formato   - 1. Desc tarea :: Completada | Pendiente
  }
}

module.exports = Tareas;
