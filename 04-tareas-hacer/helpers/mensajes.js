require('colors');

const mostrarMenu = () => {
  console.clear();
  console.log('====================='.green);
  console.log('Seleccione una opción');
  console.log('====================='.green);
};

//exportamos el módulo para usarlo desde fuera.
module.exports = {
  mostrarMenu,
};
