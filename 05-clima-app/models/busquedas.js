const axios = require('axios');

class Busquedas {
  historial = ['Madrid', 'Bilbao', 'Sevilla'];

  constructor() {
    //TODO: leer DB si existe
  }

  async ciudad(lugar = '') {
    try {
      //console.log('Ciudad', lugar);
      //peticion http
      const resp = await axios.get(
        'https://reqres.in/api/users?page=2',
      );
      console.log(resp.data);

      return []; //retornar los lugares que coincidan con la busqueda en curso
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
