require('colors');

const mostrarMenu = () => {
  console.clear();
  console.log('====================='.green);
  console.log('Seleccione una opción');
  console.log('=====================\n'.green);

  console.log(`${'1.'.green} Crear tarea`);
  console.log(`${'2.'.green} Listar tarea`);
  console.log(`${'3.'.green} Listar tareas completadas`);
  console.log(`${'4.'.green} Listar tareas pendientes`);
  console.log(`${'5.'.green} Completar tarea(s)`);
  console.log(`${'6.'.green} Borrar tarea`);
  console.log(`${'0.'.green} Salir \n`);

  //Preparamos la interfaz del usuario.
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Seleccione una opción:', (opt) => {
    //console.log({ opt });
    readline.close();
  });
};

//preparamos el códgo para poner en pausa la aplciación(cuando el usuario está en el menú principal)
const pausa = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    `\nPresione ${'ENTER'.green} para continuar\n`,
    (opt) => {
      //console.log({ opt });
      readline.close();
    },
  );
};

//exportamos el módulo para usarlo desde fuera.
module.exports = {
  mostrarMenu,
  pausa,
};
