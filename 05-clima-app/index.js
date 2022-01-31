require('dotenv').config();
const { leerImput } = require('./helpers/inquirer');
const {
  inquireMenu,
  pausa,
  listarLugares,
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log(process.env.MAPBOX_KEY);

const main = async () => {
  //Instanciamos busquedas
  const busquedas = new Busquedas();

  let opt = '';

  do {
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        //Mostrar mensaje
        const termino_de_busqueda = await leerImput('Ciudad: ');

        //Buscar los lugares
        const lugares = await busquedas.ciudad(termino_de_busqueda);

        //Seleccionar el lugar
        const idSeleccionado = await listarLugares(lugares);
        //Controlar que el id seleccionado no sea 0 (con 0 se sale de la busqueda de ciudades.)
        if (idSeleccionado === '0') continue; //si el usuario elige cancelar que se salte el código hasta el break

        const lugarSeleccionado = lugares.find(
          (lugar) => lugar.id === idSeleccionado,
        );
        //console.log(lugarSeleccionado);

        //Guardar en DB el lugar seleccionado para la función de Historial
        busquedas.agregarHistorial(lugarSeleccionado.nombre);

        //Clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.lng,
        );
        //console.log(clima);

        //Mostrar resultados
        console.clear();
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', lugarSeleccionado.nombre.green);
        console.log('Lat:', lugarSeleccionado.lat);
        console.log('Lng:', lugarSeleccionado.lng);
        console.log('Temperatura:', clima.temp);
        console.log('Mínima:', clima.min);
        console.log('Máxima:', clima.max);
        console.log('Como está el clima:', clima.desc.green);

        break;
      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;
    }
    await pausa();
  } while (opt !== 0);
};

main();
