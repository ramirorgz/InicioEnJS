// JS CHELSEA
//CREO PRODUCTO+PRECIO CON CLASE
/* const mostrador1 = new Producto("Chester", 111, "descuento");
const mostrador2 = new Producto("ChesterGold", 222, "descuento");
const mostrador3 = new Producto("Berlin", 333, "descuento");
const mostrador4 = new Producto("Chelsea", 444, "descuento");
//VARIABLES GLOBALES
const desc1 = (precio * 15) / 100;
const desc2 = (precio * 10) / 100;

function desc1 (precio, descuento) {
  let precioFinal= precio - (precio * descuento /100);

    (this.nombre = mostrador1), (this.precio = precio), (this.desc = descuento);
  }
}
 */

/* //SE MUESTRA LA LISTA
let mostradoresLista = [mostrador1, mostrador2, mostrador3, mostrador4];
console.log(mostradoresLista);
//EL USUARIO NOS DA EL NOMBRE

let cualMostrador = prompt(
  "Hola! Bienvenidx a Chelsea, por favor indicanos el nombre del mostrador que deseas."
);
if (cualMostrador == mostrador1) {
  console.log(
    `Has elegido ${mostrador1}, el precio de este producto con el descuento aplicado es de ${precioFinal}`
  );
} */
let producto = prompt("Cual es el nombre del producto?");
let precio = parseFloat(prompt("Cual es el precio del producto?"));

const desc1 = (precio * 15) / 100;
const desc2 = (precio * 10) / 100;

//NOS INDICA EL METODO DE PAGO
/* let metodoPago = prompt(
  "Le calcularemos su descuento segun su metodo de pago. Ingrese aqui su metodo de pago: (efectivo, transferencia, tarjeta de credito)"
).toLowerCase();
 */
//LE INDICAMOS EL PRECIO CON EL DESCUENTO APLICADO
/* const precioFinal = () => {
  if (metodoPago === "efectivo") {
    precio = desc1;
  } else if (metodoPago === "transferencia") {
    precio = desc2;
  } else if (metodoPago === "tarjeta de credito") {
    precio = precio;
  } else {
    console.log("No trabajamos ese metodo de pago! Lo sentimos.");
    alert("No trabajamos ese metodo de pago! Lo sentimos.");
  }
  return metodoPago;
};
precioFinal(); */

console.log(`El precio final es de ${precio - desc1}, por pago en efectivo`);
console.log(
  `El precio final es de ${precio - desc2}, por pago en transferencia`
);
console.log(`El precio es ${precio} y puedes pagar hasta en 6 cuotas`);

//BORRADOR CHELSEA

/*   //CREAR EL PRODUCT0+PRECIO CON VARIABLES CONSTANTES
const mostrador1 = {
    nombre: "chester".toLowerCase(),
    precio: "$111",
  };
  
  const mostrador2 = {
    nombre: "chesterGold".toLowerCase(),
    precio: "$222",
  };
  
  const mostrador3 = {
    nombre: "berlin".toLowerCase(),
    precio: "$333",
  };
  
  const mostrador4 = {
    nombre: "chelsea".toLowerCase(),
    precio: "$444",
  };
  //SE MUESTRA LA LISTA
  let mostradoresLista = [mostrador1, mostrador2, mostrador3, mostrador4];
  console.log(mostradoresLista);
  
  class Producto {
    constructor(nombre, precio) {
      this.nombre = mostrador1;
      this.precio = precio;
    }
  } */

/* let listaNombres =[];
let cantidad = 5;

do{
  let nombreNuevo = prompt("dame un nombre");
  listaNombres.push(nombreNuevo);
  console.log(listaNombres.length);

} while (listaNombres.length != cantidad);

//funcion
const eliminar = (item) => {
  let index = listaNombres.indexOf(item); 
//si existe lo borramos
if (index!=-1) {
  listaNombres.splice(index,1);
}
} */

/* switch (metodoPago) {
  case "Efectivo".toLowerCase:
    console.log("Su descuento sería del 15%!");
    break;
  case "Transferencia".toLowerCase:
    console.log("Su descuento sería del 10%!");
    break;
  case "Tarjeta de credito".toLowerCase:
    console.log("Tiene hasta 6 cuotas!");
    break;
  default:
    console.log("No trabajamos con ese metodo de pago!");
    break;
}
 */
/* const tipoDescuento = () => {
  do {
    alert("No trabajamos ese metodo de pago!");
  } while (
    metodoPago != "efectivo" ||
    metodoPago != "transferencia" ||
    metodoPago != "tarjeta de credito"
  );
}; */

/*   while (
    formaDePago === "Efectivo" ||
    formaDePago === "Transferencia" ||
    formaDePago === "Tarjeta de credito"
  ) {
    console.log(descuento) 
*/
