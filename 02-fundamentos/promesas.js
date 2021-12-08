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
        const empleado = empleados.find(e => e.id === id)

            (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
}
const id = 8;
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));