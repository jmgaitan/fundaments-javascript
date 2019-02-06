var juan = {
    Nombre: `Juan` ,
    apellido: 'Gaitan',
    Edad: 25
}
var emma ={
    nombre: 'Emanuel' ,
    Apellido: 'Jarolaski' ,
    Edad: 24
}

function ImprimirNombreMayusculas({nombre}) {    
    /* las {} sirven para mostrar el atributo que queremos del del objeto que le enviamos
    al llamar al a function. Ya no tenemos que recurrir a usar el (var.atributo)*/
   
    console.log(nombre)
}

imprimirnombreMayusculas(nombreJuan.nombre)
imprimirnombreMayusculas(emma.nombre)
