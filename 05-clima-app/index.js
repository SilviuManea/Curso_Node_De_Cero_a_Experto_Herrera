require('dotenv').config();
const { leerImput } = require('./helpers/inquirer');
const { inquireMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

console.log(process.env.MAPBOX_KEY);

const main = async () => {
  //Instanciamos busquedas
  const busquedas = new Busquedas();

  let opt = '';

  do {
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        //Mostrar mensaje
        const lugar = await leerImput('Ciudad: ');
        await busquedas.ciudad(lugar);
        //Buscar los lugares

        //Seleccionar el lugar

        //Clima

        //Mostrar resultados

        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:');
        console.log('Lat:');
        console.log('Lng:');
        console.log('Temperatura:');
        console.log('Mínima:');
        console.log('Máxima:');

        break;
      case 2:
        const desc2 = await leerImput('Descripción 2:');
        console.log(desc2);
        break;
    }
    await pausa();
  } while (opt !== 0);
};

//main();
