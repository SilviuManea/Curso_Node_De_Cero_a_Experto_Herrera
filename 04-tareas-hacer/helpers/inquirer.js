const inquirer = require('inquirer');

require('colors');

const preguntas = [
  {
    name: 'greeting',
    message: 'What would you like to say?',
    type: 'list',
    choices: ['opt1', 'opt2', 'opt3'],
  },
];

const inquireMenu = async () => {
  //console.clear();
  console.log('========================'.green);
  console.log(' Seleccione una opción  '.green);
  console.log('========================\n'.green);

  const opt = await inquirer.prompt([preguntas[0]]);
  return opt;
};

module.exports = {
  inquireMenu,
};
