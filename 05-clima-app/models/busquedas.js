class Busquedas {
  historial = ['Madrid', 'Bilbao', 'Sevilla'];

  constructor() {
    //TODO: leer DB si existe
  }

  async ciudad(lugar = '') {
    //peticion http
    console.log(lugar);

    return []; //retornar los lugares que coincidan con la busqueda en curso
  }
}

module.exports = Busquedas;
