const empleados = [
    {
        id: 1,
        nombre: 'Silviu'
    },
    {
        id: 2,
        nombre: 'Eduardo'
    },
    {
        id: 3,
        nombre: 'Fernando'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
]



const getEmpleado = (id) => {

    //el callback resolve se llamará cuando devuelva un resultado y el reject cuando ocurra un error
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa busca un empleado por id
        const empleado = empleados.find(e => e.id === id);

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
}

//Tarea - hacer la función getSalario usando promesas

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id);//fundamental poner este punto y coma, o dará error
        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id ${id}`);
    });

}

const id = 3;

// Función asíncrona
const getInfoUsuario = async () => {

    try {
        const empleado = await getEmpleado(id); // Esperamos a que se resuelva la promesa y se realice la asignación
        const salario = await getSalario(id); // devolvemos el objeto empleado
        return `El salario del empleado:${empleado.nombre} es de ${salario.salario}`;

    } catch (error) {
        throw error;
    }

}
// Llamada de la función con el .then
getInfoUsuario()
    .then(msg => {
        console.log(msg)
        console.log('TODO BIEN!')
    })
    .catch(err => {
        console.log(err)
        console.log('TODO MAL!')
    });

