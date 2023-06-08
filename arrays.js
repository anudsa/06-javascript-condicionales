//Matrices y bucles.
// const array_name = [item1, item2, ...];
// Recursividad

function factorial(n){
    if(n===0){
        return 1;
    }
    return n* factorial(n-1);
}
console.log(factorial(5));

// 
const carros=["Nissan","Kia,","Jeep","Mazda","Volkswagen"]
console.log(carros);

const computadoras = [];
console.log(computadoras);

//agregar elementos al arreglo vacío
computadoras[0] = " Dell";
computadoras[1] = "Hp";
computadoras[2] = "Mac";
console.log(computadoras);

const celulares = new Array ("Samsung","Apple","LG");
console.log(celulares);

let longitudCelulares = celulares.length;
console.log(longitudCelulares);

//Acceso a los elementos del array.
console.log(celulares[2]);
console.log(celulares[5]);
let ultimoElementoCel= celulares[celulares.length-1];
console.log(ultimoElementoCel);

//Modificar elementos del array mediante índices.
const listaDeCompras = ["Jamón", "queso", "Yogurt"];
console.log(listaDeCompras);

listaDeCompras[2]="Oikos";
console.log(listaDeCompras);

// Arreglos multidimensionales
const platillos = ["tacos","arepas","sushi","pizza"];
const paises = ["mex","vzl","Italia","japón"];
const menu = [platillos,paises];
console.log(menu[1][0]);

console.log(menu[1][3],menu[0][2]);
//Output: En Japón se come sushi console.log(`En ${menu[1][0]} se come ${menu[0][2]}`);


//Métodos de cola (queue)
//Métodos de pila (stack)
/* ==== Métodos de Arrays ====
-- Métodos de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos del principio del array. Sigue el principio FIFO (First-In-First-Out).
    * push
    * shift
    * unshift

-- Métodos de pila (stack). Implican agregar elementos al inicio del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-In-First-Out).
    * push
    * pop
*/
//Array ch28
const ch28 = ["Mari","Andrea","Pessy","Ana Fer","Ingrid","Blanca","Pau","Nancy","Pessy"];
console.log(ch28);
//indexof
console.log(ch28.indexOf("Pessy"));
console.log(ch28.indexOf("Yare"));
console.log(ch28.indexOf("Pessy",3));

//pop borra último
let popCh28 = ch28.pop();
console.log(ch28);
//push agrega al último
let pushCh28= ch28.push("JuanK");
console.log(ch28);
//splice elimina basado en la posición
let spliceCh28 = ch28.splice(8, 1);
console.log(ch28);
//replaced reemplaza uno o varios elementos a partir de su posición
let replacedCh28= ch28.splice(8,1,"Yare");
console.log(ch28);
//unshift() añade un elemento al inicio
let unshiftCh28 = ch28.unshift("Osvaldo");
console.log(ch28);
//Shift elimina elemento del inicio
let shiftCh28 = ch28.shift();
console.log(ch28);
//Slice elimina elementos anteriores a la posición definida sin modificar el array original
let  sliceCh28 = ch28.slice(7)
console.log(ch28);
console.log(sliceCh28);
//
let agregandoMagali = ch28.unshift("Magali");
console.log(ch28);

//foreach recorre el array
ch28.forEach(elemento => console.log(elemento));
//ordenamiento de A a Z
let sortCh28 = ch28.sort();
console.log(ch28);
//método reverse() invierte el sentido
let reverseCh28 = ch28.reverse();
console.log(ch28);
let reverseCh28b = ch28.reverse();
console.log(ch28);

/***** Objetos
Un automóvil es un objeto de la vida real, ya que tiene propiedades y métodos específicos.

Propiedades: nombre, modelo, peso, color, precio.
Métodos: frenar, avanzar, arrancar.

A pesar de tener propiedades similares, los valores de
dichas propiedades son diferentes entre cada uno.

También los métodos son similares, aunque se van a ejecutar en momentos diferntes.

Todos los objetos poseen propiedades y métodos con valores diferentes.

Sintaxis
    const object= {key1(property1)} : value1, key2(property2): value2,key3(property3): value3};
*/

const auto = {
    marca: "Kia",
    clase: "Forte",
    peso:900,
    color:"Gris",
    modelo: 2022,
    llantas: 4,
    puertas: 4
};
console.log(auto);
//Acceder a las propiedades y valores de un objeto
let marcaAuto = auto.marca;
console.log(marcaAuto); 
//otra
console.log(auto.modelo);