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
function imprimeHeroe(nombre, apellido, poder, edad = 0) {

    // Sacar los valores usando destructuración
    nombre = 'Silviu';
    console.log(nombre, apellido, poder, edad);
}
// ImprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// Extraer y crear variables de un array de forma manual
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Extraer y crear variables de un array usando destructuración
const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);



