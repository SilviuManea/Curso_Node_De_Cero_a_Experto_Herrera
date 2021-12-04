const deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}

console.log ( deadpool.getNombre() );

// Sacar los valores de Manera manual
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// Sacar los valores usando destructuración
const {nombre , apellido , poder, edad = 0} = deadpool;// si edad tiene un valor inicial se le asigna ese valor(50) y si no, el valor por defecto 0
console.log(nombre, apellido, poder,edad);

    