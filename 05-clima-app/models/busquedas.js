const axios = require('axios');

class Busquedas {
  historial = ['Madrid', 'Bilbao', 'Sevilla'];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      language: 'es',
      access_token:
        'pk.eyJ1IjoibGFtZW50ZW9jdXBhZGEiLCJhIjoiY2t5dWhvY25nMW9kdzJxcHQ3Z2t6aTdxZSJ9.dWtN5thVHVIHXwoesGYz-Q',
      limit: 5,
    };
  }

  async ciudad(lugar = '') {
    try {
      //peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();
      console.log(resp.data);
      return []; //retornar los lugares que coincidan con la busqueda en curso
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
