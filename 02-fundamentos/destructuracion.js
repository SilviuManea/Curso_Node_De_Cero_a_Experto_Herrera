const deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//console.log(deadpool.getNombre());

// Sacar los valores de Manera manual
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// Destructurar dentro de la función
function imprimeHeroe(heroe) {

    // Sacar los valores usando destructuración
    const { nombre, apellido, poder, edad = 0 } = deadpool;
    console.log(nombre, apellido, poder, edad);

}
imprimeHeroe(deadpool);



