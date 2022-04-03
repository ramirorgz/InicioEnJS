/* class CuentaBancaria {
  constructor(nombre, saldo, tipo) {
    (this.nombre = nombre), (this.saldo = saldo), (this.tipo = tipo);
  }

  deposito(ingreso) {
    this.saldo += ingreso; //saldo = saldo + ingreso
  }
  extraer(extraccion) {
    if (this.saldo - extraccion >= 0) {
      this.saldo -= extraccion; //saldo = saldo - extraccion
    } else {
      console.log("No tienes suficiente saldo");
    }
  }
}

const cuentaUsuario1 = new CuentaBancaria(
  "Ramiro Rodriguez",
  0,
  "Caja de ahorro"
);

console.log(cuentaUsuario1.saldo);

cuentaUsuario1.deposito(4000);

console.log(cuentaUsuario1.saldo);

cuentaUsuario1.extraer(4050);

console.log(cuentaUsuario1.saldo);

function crearCuenta(nombre, saldo, tipo) {
  let nombreUsuario = prompt("¿Cual es su nombre?");

  while (nombreUsuario == "" || nombreUsuario == null) {
    nombreUsuario = prompt(
      "El dato que ingreso es incorrecto. Ingrese su nombre"
    );
  }
  let tipoCuenta = prompt("¿Que tipo de cuenta quiere crear?");

  let saldoCuenta = parseInt(prompt("¿Cual es el saldo que desea ingresar?"));
  while (isNaN(saldoCuenta)) {
    saldoCuenta = prompt(
      "El dato ingresado no es correcto. Ingrese saldo en su cuenta:"
    );
  }

  return new CuentaBancaria(nombreUsuario, saldoCuenta, tipoCuenta);
}

const cuentaUsuario2 = crearCuenta();

console.log(cuentaUsuario2);
 */

/* const registroNombre = () => {
  let nombreUsuario = prompt("Ingrese un nombre de usuario:");

  while (
    nombreUsuario == "" ||
    nombreUsuario == null ||
    nombreUsuario.length < 3
  ) {
    nombreUsuario = prompt(
      "Ingresó un valor incorrecto. Por favor, ingrese un nombre valido:"
    );
  }
  return nombreUsuario;
};

const registroContrasena = () => {
  let contrasenaUsuario = prompt(
    "La contraseña debe tener al menos 4 caracteres. Por favor ingrese una contraseña:"
  );

  while (
    contrasenaUsuario == "" ||
    contrasenaUsuario == null ||
    contrasenaUsuario.length < 4
  ) {
    contrasenaUsuario = prompt(
      "Ingresó una contraseña incorrecta. Por favor, ingrese una contraseña:"
    );
  }

  return contrasenaUsuario;
};

let nombreUsuario = registroNombre();
let contrasenaUsuario = registroContrasena();

function incioDeSesion() {
  let nombreInicio = prompt(
    "Bienvenido al inicio de sesion. Ingrese un usuario:"
  );
  while (nombreInicio == "" || nombreInicio == null) {
    nombreInicio = prompt(
      "El usuario ingresado es incorrecto. Ingrese un nombre de usuario."
    );
  }
  let contrasenaInicio = prompt(
    "La contraseña debe tener al menos 4 caracteres. Ingrese su contraseña:"
  );

  while (contrasenaInicio == "" || contrasenaInicio == null) {
    contrasenaInicio = prompt(
      "Ingreso una contraseña incorrecta. Por faavor, ingrese una contraseña"
    );
  }
  if (
    nombreUsuario === nombreInicio &&
    contrasenaUsuario === contrasenaInicio
  ) {
    alert("Bienvenido a la web");
  } else {
    alert("Acceso denegado.");
  }
}

incioDeSesion();
 */
