let anioNacimiento = prompt("Ingrese su año de nacimiento");
let nombre = prompt("Ingrese su nombre");
let edad = 2022 - parseInt(anioNacimiento);
alert(nombre + "USTED TIENE" + edad + "AÑOS!");
console.log(nombre + "USTED TIENE" + edad + "AÑOS!");

let nota1 = parseInt(prompt("Cual fue su nota en el primer examen?"));
let nota2 = parseInt(prompt("Cual fue su nota en el segundo examen?"));

let promedio = (nota1 + nota2) / 2;
alert(promedio);
