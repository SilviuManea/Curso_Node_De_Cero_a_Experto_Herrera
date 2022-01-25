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
        'https://api.mapbox.com/geocoding/v5/mapbox.places/Zaragoza.json?language=es&access_token=pk.eyJ1IjoibGFtZW50ZW9jdXBhZGEiLCJhIjoiY2t5dWhvY25nMW9kdzJxcHQ3Z2t6aTdxZSJ9.dWtN5thVHVIHXwoesGYz-Q',
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
