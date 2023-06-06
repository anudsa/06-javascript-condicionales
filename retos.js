//Reto 1
let edadGato;
function convertirGato(edadGato) 
{
    if(edadGato<=2){
        return  "Tiene 24 años humanos";
    } else {
        let age=24+((edadGato-2)*4);
        return "Tiene "+age+" años humanos";
    }
}
console.log(convertirGato(10));
//Reto 2
//Determinar si un número es par o impar

function verificarPar(Numero){
    if(Numero%2==0){
        return Numero + " es par";
    } else {
        return Numero + " no es par";
    }   
}
console.log(verificarPar(5));

const verificarParFlecha = (NumeroFlecha) => {
    let mensaje;
    (NumeroFlecha%2===0)? mensaje = "El número" + NumeroFlecha + " Es par" : mensaje = "El número " + NumeroFlecha + "No es par";
    return mensaje;
}
console.log(verificarParFlecha(6));
// Reto 3
const hoy = new Date();
let year=hoy.getFullYear();
let month=hoy.getMonth();

function obtenerEdad(año){
    let edad= year-año;
    if (edad>=18){
        return "Es mayor de edad, tiene " + edad+" años";
    } else {
        return "Es menor de edad, tiene "+ edad+" años";
    }
}
console.log(obtenerEdad(2020));
//Reto 4
let seleccion;

function cajero(seleccion){
    let pesos;
    if(seleccion===1){
        return "Su saldo es: $65465468519";
    } else if(seleccion===2){
        return "Gracias por su donación de 10$";
    } else if(seleccion === 3){
        pesos=convertirDivisas(10);
        return "El equivalente es $"+pesos;
    }
}
function convertirDivisas(dolares){
    return dolares*18;
}
console.log(cajero(3));