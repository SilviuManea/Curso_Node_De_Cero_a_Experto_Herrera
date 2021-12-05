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

const getEmpleado = (id, callback) => {

    //busca un empleado por id
    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

getEmpleado(3, (err, empleado) => {

    if (err) {
        console.log('ERROR!')
        return console.log(err);
    } else {
        console.log('El empleado EXISTE!')
        console.log(empleado);
    }

})
