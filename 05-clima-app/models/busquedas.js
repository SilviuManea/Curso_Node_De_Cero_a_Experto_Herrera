const fs = require('fs');

const axios = require('axios');

class Busquedas {
  historial = [];
  dbPath = './db/database.json';

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

  // parámetros para openweather
  get paramsOpenweather() {
    return {
      lang: 'es',
      appid: process.env.OPENWEATHER_KEY,
      units: 'metric',
    };
  }

  async climaLugar(lat, lon) {
    try {
      // instancia de axios
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        //mandamos las propiedades adicionales usando destructuración
        params: { ...this.paramsOpenweather, lat, lon },
      });
      // resp.data
      const resp = await instance.get();
      const { weather, main } = resp.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  agregarHistorial(lugar = '') {
    //Prevenir duplicados

    //Si ya existe el lugar
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return; //no hacemos nada porque ya existe
    }
    //Si no existe el lugar, lo añadimos en minúsculas.
    this.historial.unshift(lugar.toLocaleLowerCase());

    // Grabar en DB
    this.guardarDB();
  }

  guardarDB() {
    const payload = {
      historial: this.historial,
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {}
}

module.exports = Busquedas;
