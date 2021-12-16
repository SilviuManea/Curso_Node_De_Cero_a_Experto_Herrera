const { error } = require('console');
const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  // si no nos pasan una base por defecto se le va a asignar el 5

  try {
    //console.log(listar);
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      //Mostrar por consola(sin colores)
      salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
      //Guardar en fichero(con colores)
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {
      //console.clear();
      console.log('==================='.green);
      console.log('   Tabla del:'.green, colors.blue(base));
      console.log('==================='.green);
      console.log(consola);
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
