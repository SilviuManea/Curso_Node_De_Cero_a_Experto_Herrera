/**
 * //Ejemplo de como vamos a manejar las tareas
 * _listado:
 *        {'uuid-123123123-234234234-2 : { id:2 , desc:asd , completadoEN:992231}},
 */

class Tareas {
  //ojo tareas en plural
  _listado = {};

  constructor() {
    this._listado = {};
  }
}

module.exports = Tareas;
