const { inquireMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
  //console.log('Hola Mundo');
  let opt = '';

  do {
    opt = await inquireMenu();
    console.log({ opt });

    await pausa();
  } while (opt !== '0');
};

main();
