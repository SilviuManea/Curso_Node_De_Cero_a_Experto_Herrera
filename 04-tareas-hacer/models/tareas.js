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
    //Solución del tutorial
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn
        ? 'Completada'.green
        : 'Pendiente'.red;
      //Comprobamos si la tarea está completada
      if (completadas) {
        //mostrar completadas
        if (completadoEn) {
          contador += 1;
          console.log(
            `${(contador + '.').green} ${desc} :: ${estado}`,
          );
        }
        //Comprobamos si la tarea está pendiente
      } else {
        //mostrar pendientes
        if (!completadoEn) {
          contador += 1;
          console.log(
            `${(contador + '.').green} ${desc} :: ${estado}`,
          );
        }
      }
    });
  }
}

module.exports = Tareas;
