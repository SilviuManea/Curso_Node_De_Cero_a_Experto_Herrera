const fs = require('fs');

const crearArchivo = (base = 5) => { // si no nos pasan una base por defecto se le va a asignar el 5
    console.clear();
    console.log('===================')
    console.log('   Tabla del:', base)
    console.log('===================')

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += (`${base} x ${i}\n`);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(salida);
    console.log(`tabla-${base}.txt` + ' creada');
}

module.exports = {
    crearArchivo
}

