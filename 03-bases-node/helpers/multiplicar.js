const { error } = require('console');
const fs = require('fs');

const crearArchivo = async (base = 5) => { // si no nos pasan una base por defecto se le va a asignar el 5
    console.clear();
    console.log('===================')
    console.log('   Tabla del:', base)
    console.log('===================')

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += (`${base} x ${i}\n`);
    }

    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        //Ejercicio - devolver ek nombre del archivo si se hizo correctamente
        return (`tabla-${base}.txt`);
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}

