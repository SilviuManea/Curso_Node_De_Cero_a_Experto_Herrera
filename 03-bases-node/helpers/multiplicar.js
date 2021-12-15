const { error } = require('console');
const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {
  // si no nos pasan una base por defecto se le va a asignar el 5

  try {
    //console.log(listar);
    let salida = '';
    for (let i = 1; i <= 10; i++) {
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${
        base * i
      }\n`;
    }

    if (listar) {
      //console.clear();
      console.log('==================='.green);
      console.log('   Tabla del:'.green, colors.blue(base));
      console.log('==================='.green);
      console.log(salida);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    //Ejercicio - devolver ek nombre del archivo si se hizo correctamente
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
