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

const id = 3;

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

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

// PROMESAS EN CADENA - Lanzar la petición del empleado y si existe entonces lanzar la petición del salario

getEmpleado(id)
    .then(empleado => {

        getSalario(id)
            .then(salario => {
                console.log('El empleado', empleado.nombre, 'tiene un salario de ', salario.salario);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))