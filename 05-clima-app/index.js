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
        //console.log(idSeleccionado);
        const lugarSeleccionado = lugares.find(
          (lugar) => lugar.id === idSeleccionado,
        );
        //console.log(lugarSeleccionado);

        //Clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.lng,
        );
        //console.log(clima);

        //Mostrar resultados

        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', lugarSeleccionado.nombre);
        console.log('Lat:', lugarSeleccionado.lat);
        console.log('Lng:', lugarSeleccionado.lng);
        console.log('Temperatura:', clima.temp);
        console.log('Mínima:', clima.min);
        console.log('Máxima:', clima.max);
        console.log('Como está el clima:', clima.desc);

        break;
      case 2:
        const desc2 = await leerImput('Descripción 2:');
        console.log(desc2);
        break;
    }
    await pausa();
  } while (opt !== 0);
};

main();
