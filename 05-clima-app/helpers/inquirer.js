const inquirer = require('inquirer');

require('colors');

const preguntas = [
  {
    name: 'opcion',
    message: '¿Que desea hacer?',
    type: 'list',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Buscar ciudad`,
      },
      {
        value: 2,
        name: `${'2.'.green} Historial`,
      },

      {
        value: 0,
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

const inquireMenu = async () => {
  console.clear();
  console.log('========================'.green);
  console.log(' Seleccione una opción  '.white);
  console.log('========================\n'.green);

  const { opcion } = await inquirer.prompt([preguntas[0]]);
  return opcion;
};

//Ejercicio
const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`,
    },
  ];
  console.log(`\n`);
  await inquirer.prompt(question);
};

const leerImput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];
  // {desc} es lo que vamos a guardar en esta variable(porque ya conocemos que tiene una propiedad desc.)
  const { desc } = await inquirer.prompt(question);
  return desc;
};
/**
 * @param {any} lugares
 * Devuelve una lista de lugares
 */
const listarLugares = async (lugares = []) => {
  //Queremos crear tantas choices como elementos haya en el array de lugares
  const choices = lugares.map((lugar, i) => {
    const idx = `${i + 1}.`.green;
    //Al usar map devolveremos un array con value y name para cada lugar
    return {
      value: lugar.id, //el valor a asociar a este elemento será su id
      name: `${idx} ${lugar.nombre}`, //el nombre a asociar a este elemento será su nombre y el idx de lista
    };
  });

  //Añadimos la opción de salir del menú
  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  });

  //Preparamos las preguntar para el inquirer
  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione lugar:',
      choices,
    },
  ];
  //Llamamos al inquirer con las preguntas generadas arriba y devolvemos el id
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

/*
//Función para confirmar el borrado de una tarea
const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];
  // El type confirm de require devolverá un booleano en el ok
  const { ok } = await inquirer.prompt(question);
  return ok;
};
*/

/*
const mostrarListadoChecklist = async (tareas = []) => {
  //Queremos crear tantas choices como elementos haya en el array de tareas
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    //Al usar map devolveremos un array con value y name para cada tarea
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  //Preparamos la pregunta para el inquirer, en este caso será un checlbox
  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices,
    },
  ];
  //Llamamos al inquirer con las preguntas generadas arriba y devolvemos los ids
  const { ids } = await inquirer.prompt(pregunta);
  return ids;
};
*/
module.exports = {
  //exportamos la nueva función para que podamos acceder a ella desde otra clase
  inquireMenu,
  pausa,
  leerImput,
  listarLugares,
};
