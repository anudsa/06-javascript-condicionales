/*
Expresiones condicionales
Conjunto de instrucciones se ejecuten se cumple una 
condición es veradera 
*/ 
let edadDaniel = 7;
if (edadDaniel>=18){
    console.log("Es mayor de edad");
}
else {
    console.log("no es")
}
//Ejemplo comparación entre 2 números  con if else.
let num1 = 89384;
let num2 = 9323555;

if(num1>num2)
{
    console.log(`El número ${num1} es mayor que ${num2}`);
    console.log("el número "+ num1 + " es mayor que " + num2);
} else{
    console.log(`El número ${num2} es mayor que ${num1}`);
    console.log("el número "+ num2 + " es mayor que " + num1);
}
// con option + } = windows + } = `````
let resultado;
if(num1>num2){
    resultado = "El número " + num1 + " es mayor que " + num2;
}
else
resultado = "El número " + num2 + " es mayor que " + num1;
console.log(resultado);

//Determinar si un número es par o impar
let numerito = 18979;
let numerito2 = 189790;

if(numerito%2==0)
{
    console.log(numerito + " es par")
} else {
    console.log(numerito + " no es par")
}
//verisón corta.
//Operador ternario
//sintaxis
/*
    (condición) ? expresion_true : expresion_false;
*/

(numerito2%2==0) ? console.log(numerito + " es par") : console.log(numerito + " no es par");

// Sentencia else if

/*Determinar qué día de la semana corresponde al número, según la siguiente tabla:
    - 1 = Lunes
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes
*/

let dia = 8;
if(dia===1){
    console.log("Lunes");
} else if(dia===2){
    console.log("Martes");

}else if(dia===3){
    console.log("Miercoles");   
}
else if(dia===4){
    console.log("Jueves");
}
else if(dia===5){
    console.log("Viernes");   
}else {
    console.log("Número inválido, intente nuevamente");
}
// Instrucciones
/* Instrucciones: Crea un programa en JavaScript en donde le muestres al usuario si es de mañana, de tarde, de noche o de madrugada.
Requerimientos:
    - La hora almacenada en una variable (let hora)
    - Establecer el formato de 24 horas (0 - 23 horas)
    - Tablita para determinar los horarios correspondientes a mañana, tarde, noche y madrugada:
        * 6 - 12 es de mañana (hora >= 6 && hora <= 12)
        * 13 - 18 es de tarde (hora >= 13 && hora <=18)
        * 19 - 23 de noche (hora >= 19 && hora <= 23)
        * 0 - 5 es de madrugada (hora >= 0 && hora <= 5)
        * Si hora está fuera de los valores 0 a 23, es inválido
 */
let hora = 3;
if (hora>= 6 && hora<=12){
    console.log("es de mañana");
} else if(hora >= 13 && hora <= 18){
    console.log("Es de tade")
}else if(hora >= 19 && hora <= 23){
    console.log("Es de noche")
}
else if(hora >= 0 && hora <= 5){
    console.log("Es madrugada")
}

const today = new Date();
let hour = today.getHours();
console.log(hour);

function greeting(){
    if (hour>= 6 && hour<=12){
        console.log("es de mañana");
    } else if(hour >= 13 && hour <= 18){
        console.log("Es de tade")
    }else if(hour >= 19 && hour <= 23){
        console.log("Es de noche")
    }
    else if(hour >= 0 && hour <= 5){
        console.log("Es madrugada")
    }    
}
greeting();
//
function saludo(){
    let mensaje = "Error";

    if (hour>= 6 && hour<=12){
        mensaje="Buenos días";
    } else if(hour >= 13 && hour <= 18){
        mensaje="Buenas tardes";
    }else if(hour >= 19 && hour <= 23){
        mensaje="Buenas noches";
    } else{
        mensaje="Buenas madrugadas";
    }
    return mensaje;
}
console.log( saludo());
//

const checarDia = (diaDeSemana) =>{
    let finDeSemana = diaDeSemana === "Sábado" || diaDeSemana === "Domingo";

    if(finDeSemana){
        return "Es finde";
    } else{
        return "No es finde";
    }   
}
console.log(checarDia("Sábado"));
// SWITCH
// *Determinar qué día de la semana corresponde al número, según la siguiente tabla:
//     - 1 = Lunes
//     - 2 = Martes
//     - 3 = Miércoles
//     - 4 = Jueves
//     - 5 = Viernes
//     - 6 = Sábado
//     - 7 = Domingo

let diaSemana = 7;

switch(diaSemana){
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;
    default:
        console.log("error");
        break;
    
}
// Programa que muestre el precio del kg de naranja, manzana, mandarinas, plátanos, mangos.
let fruta = "MAndarinas";

switch(fruta.toLowerCase()){
    case "naranjas":
        console.log("las naranjas cuestan $30 el kg");
        break;
    case "manzanas":
        console.log("las naranjas cuestan $60 el kg"); 
        break;
    case "mandarinas":
        console.log("las Mandarinas cuestan $12.5 el kg");
        break;
    case "platano":
        console.log("las naranjas cuestan $20 el kg");
        break;
    case "mangos":
        console.log("las naranjas cuestan $66 el kg");
        break;
    default:
        console.log("No tenemos esa fruta");
    break;
}
//Crear un programa con switch para evaluación de alumnos (las calificaciones aprobatorias van de 5.5 a 10 y deben redondearse al número superior inmediato).

let calificación = 5.5;

switch (Math.round(calificación)){

    case 1:
    console.log("reprobado 1");
    break;

    case 2:
    console.log("reprobado 2");
    break;

    case 3:
    console.log("reprobado 3");
    break;

    case 4:
    console.log("reprobado 4");
    break;

    case 5:
    console.log("reprobado 5");
    break;

    case 6:
    console.log("aprobado 6");
    break;

    case 7:
    console.log("aprobado 7");
    break;

    case 8:
    console.log("aprobado 8");
    break;

    case 9:
    console.log("aprobado 9");
    break;

    case 10:
    console.log("aprobado 10");
    break;

    default:
    console.log("Número inválido");
    break;
}