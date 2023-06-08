//Bucles
//Operadores de incremento ++ y de decremento --
/* For
se repite hasta que la condición se evalúe como falsa. Crea 3 expresionales opcionales. 

Sintaxis:
    for(expresionInicail; expresionCondicional; expresionDeActualizacion){
        //instrucciones
    }
1. Inicialización. Se debe inicializar con una variable que será evaluada en la expresión a comparar. Variable global o local.
2. Condición. Es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina.
3. Pasos a realizar. Son los intervalos que cambiarán la variable inicial mientras sea true.
*/
//Programa para contar los boletos de un concierto con variable local.
for(let boleto=1;boleto<=50;boleto++){
    console.log(`Boleto ${boleto}`);
}

let paletas=1;
for(paletas; paletas<=20;paletas++){
    console.log(`Tengo ${paletas} paletas`);
}

//cuenta regresiva
let cuentaRegresiva=18;

for(cuentaRegresiva;cuentaRegresiva>=0;cuentaRegresiva--){
    console.log(cuentaRegresiva);
}

//recorrer arreglos con for: Se usan índices del arreglo para poder usar bucle, estos índices van desde el 0 hasta n y utilizan la propiedad lenght.
const ch28 = ["Mari", "Andrea", "Pessy", "Ana Fer", "Ingrid", "Blanca", "Pau", "Nancy", "Yare", "Magali"];

for(let i=0; i<ch28.length; i++){
    console.log(ch28[i]);
}

//Variaciones
/* 
for of
for in
*/

let animales = ["perro", "gato","colibri","pantera","grillo","león"];

for(let animal of animales){
    console.log(animal+"perenece al array animales");
}
for(let animal in animales){
    console.log(animal+" indice del array animales");
}
//Sumar del 1 al 100
let suma=0;
for(let i=1; i<=100;i++){
    //suma = suma + i;
    suma+=i;
}
console.log(suma);
//Imprima los números pares del 1 al 20
for(let i=1; i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}
//Imprima la tabla del 5
const multiplicando=5;
for(let i=0;i<=10;i++){
    let resultado = multiplicando*i;
    console.log(`${multiplicando} x ${i} = ${resultado}`)
}

//While(condición){
    //instrucciones
//}
let productos = 5;
while(productos>0){

    console.log(productos+" Productos vendidos")
    productos--;
}

// imprimir números del 1 al 10
let numero1 = 1;
while(numero1<10){
    console.log("El número es "+numero1);
    numero1++;
}
//imprimir elementos array
const frutas = ["Manzana","Plátano","Naranja","Mandarina","Limón"];
let fruta=0;
while(fruta < frutas.length){
    console.log(frutas[fruta])
    fruta++
}

console.log("*")
//Secuencia de asteriscos
let totalAsteriscos = 5;
let iteración = 0;
let texto = "";

while(iteración < totalAsteriscos){
    texto = texto + "*";
    console.log(texto);
    iteración++;
}

//Do while
let numero2 = 1;
do{
    console.log(numero2);
    numero2++;
}while(numero2<6);

//mostrar productos vendidos
let producto = 5;
do{
    console.log(producto+" productos vendidos");
    producto --;
} while(producto>=1);

/*--- Sentencia break. Termina el bucle actual. Permite al programa salir de una sentencia, pero para que se pueda ejecutar necesita estar anidado dentro de la sentencia.

--- Sentencia continue. No termina el bucle, sino que salta a la siguiente iteración.
*/

let num3=0;
while(num3<100){
    num3++;
    console.log(num3);

    if(num3===10){
        break;
    }
}

//Ejemplo de continue
for(let cliente = 1; cliente<=10;cliente++){
    if(cliente==5){
        console.log("Ganaste!");
        continue;
    }
    console.log("Eres el cliente número: "+cliente);
}