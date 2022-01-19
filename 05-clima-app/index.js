const { leerImput } = require('./helpers/inquirer');
const { inquireMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
  //console.log('Hola Mundo');
  let opt = '';

  do {
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        const desc1 = await leerImput('Descripción 1:');
        console.log(desc1);
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
