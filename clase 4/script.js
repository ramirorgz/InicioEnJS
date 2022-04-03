//LA MEJOR MANERA DE PROGRAMAR ES DEFINIR TODAS LAS VARIABLES GLOBALES ARRIBA
/* let precioFinal = 0;
let curso = "javascript"; */

//Funciones anonimas: cambia la manera de escritura. Primero variable y dentro la funcion.
//se puede reemplazar la palabra funcion por "=>" {return}

//FUNCIONES

// notaUsuario ();
/* 
function suma(num1, num2) {
  console.log(num1 + num2);
}

suma(5, 8);
suma(3, 9);

let numero1 = parseInt(prompt("Cual es el primer numero?"));
let numero2 = parseInt(prompt("Cual es el segundo numero?"));

suma(numero1, numero2); */

/* function nombreCompleto(nombre, apellido) {
  console.log(`tu nombre completo es ${nombre} ${apellido}`);
}
let nombreUsuario = prompt("cual es tu nombre?");
let apellidoUsuario = prompt("cual es tu apellido?");

nombreCompleto(nombreUsuario, apellidoUsuario);
 */
/* function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}
console.log(calculadora(10, 5, "*")); //ejemplo

let numero1 = parseInt(prompt("Cual es el primer numero?"));
let numero2 = parseInt(prompt("Cual es el segundo numero?"));
let oper = prompt("que tipo de operacion desea realizar?");

alert(calculadora(numero1, numero2, oper)); */

/* function valorProducto(precio, desc) {
  let precioFinal = precio - (precio * desc) / 100; //local
  return precioFinal;
}

const valorProductos = function (precio, desc) {
  let precioFinal = precio - (precio * desc) / 100; //local
  return precioFinal;
};

const valorProductoFlecha = (precio, desc) => {
  let precioFinal = precio - (precio * desc) / 100; //local
  return precioFinal;
};

let valorVenta = valorProducto(1000, 15);
console.log(valorVenta);

function productoNuevo() {
  let precioLista = parseFloat(prompt("cual es el precio de lista?"));
  let descuento = parseInt(prompt("Cual es el porcentaje de descuento?"));
  let precioFinal = valorProducto(precioLista, descuento);
  return precioFinal;
} */

/* escribir una funcion que acepte un numero y que me diga al final si es un numero primo o no.

un n primo es un primo solo si se divide por si mismo y por 1

1 no es primo!
*/ /* 
function nombreUtil(precio) {
  //snetencias
  let precioDescuento = precio;
  if (precio > 1000) {
    console.log("carisimo!");
    precioDescuento = precio * 0.8;
  } else {
    console.log("barato...");
    precioDescuento = precio * 0.9;
  }
  return precioDescuento;
} */
