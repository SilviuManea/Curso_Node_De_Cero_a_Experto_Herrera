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

  borrarTarea(id = '') {
    //Comprobamos si existe
    if (this._listado[id]) {
      //Si existe lo borramos del listado
      delete this._listado[id];
    }
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
            `${(contador + '.').green} ${desc} :: ${estado}::${
              completadoEn.green
            }`,
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
  //Función que marca como completadas aquellas tareas cuyo id venga en el array
  toggleCompletadas(ids = []) {
    //DEBUG
    //console.log('Este es _listado', this._listado);
    //console.log('Este es listadoArr', this.listadoArr);

    //para cada id del array marcar como completada
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    //para cada tarea cuyo id no venga en el arreglo de ids, las marcaremos como pendientes
    this.listadoArr.forEach((tarea) => {
      //nos traemos todos los ids de las tareas disponibles
      //comprobamos que el id de la tarea que nos traemos no está en el aray ids[]
      if (!ids.includes(tarea.id)) {
        //conseguimos la tarea que queremos dejar como pendiente y le ponemos la propiedad a null
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
