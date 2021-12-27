const inquirer = require('inquirer');

require('colors');

const preguntas = [
  {
    name: 'opcion',
    message: '¿Que desea hacer?',
    type: 'list',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tareas',
      },

      {
        value: '3',
        name: '3. Listar tareas completadas',
      },

      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },

      {
        value: '5',
        name: '5. Completar tarea(s)',
      },

      {
        value: '6',
        name: '6. Borrar tarea',
      },

      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

const inquireMenu = async () => {
  console.clear();
  console.log('========================'.green);
  console.log(' Seleccione una opción  '.green);
  console.log('========================\n'.green);

  const { opcion } = await inquirer.prompt([preguntas[0]]);
  return opcion;
};

module.exports = {
  inquireMenu,
};
