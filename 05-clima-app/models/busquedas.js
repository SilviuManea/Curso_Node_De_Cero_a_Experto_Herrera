const axios = require('axios');

class Busquedas {
  historial = ['Madrid', 'Bilbao', 'Sevilla'];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      language: 'es',
      access_token: process.env.MAPBOX_KEY,
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
      //console.log(resp.data.features);
      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        //longitud es la primera posición del array center(esto en mapbox,en google maps sería al revés)
        lng: lugar.center[0],
        //latitud es la segunda posición del array center(esto en mapbox,en google maps sería al revés)
        lat: lugar.center[1],
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
