var juan = {
    nombre: 'Juan Manuel',
    Apellido: 'Gaitan',
    edad: 25,
    tecnico: false,
    trabaja: true,
    estudia: true,
    soltero: true,
    buscaDpto: true
    } 


function imprimirParametrosif(persona) {
    console.log(`${persona.nombre} : `)
    if (persona.tecnico)  {
    console.log('trabaja')
    }

    

}


imprimirParametrosif(juan)