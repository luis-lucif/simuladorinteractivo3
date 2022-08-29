alert ("Bienvenido a Arma tu primer Setup, registrese para continuar");

function registrarse(){
    let usuario = prompt("Ingrese su usuario");
    let password = prompt("Ingrese su contraseña");
    alert("Hola " + usuario + " gracias por registrarse");
}
registrarse();

// TECLADOS
let redDragon = 20000
let hyperX= 35000
let razer = 40000

// MOUSE
let Noga = 3000
let Logitech = 6999
let Genius = 4000

// Joystick
let Playstation5 = 26000
let Xbox = 32000
let Pc = 8000

//VALORES SUBTOTALES Y TOTALES

let subtotal = 0;
let valorTotal = 0;

//FUNCIONES
function sumarProductos (producto) {
  subtotal = producto + subtotal  
 };
 function calcularTotal (total) {
  valorTotal = total ;
 };
 function cuotificar (cuotas) {
    return subtotal / cuotas;
  };

 let comprar = true;
 let carritoFinalizado = false;

 let categorias = prompt (
    "Que estas buscando? \n 1-Teclados \n 2-Mouse \n 3-Joystick"
    
     
);








switch (categorias) {
    case "1":
        alert("seleccionaste Teclados");
        while (comprar) {
 
            let producto = prompt("Ingrese la marca del teclado:\n 1-redDragon $20000\n 2-hyperX $35000\n 3-razer $40000 \n 4-FINALIZAR COMPRA");
           
            if (producto === "4") {
              calcularTotal (subtotal);
              alert("El valor total de la compra es de $" + subtotal);
              comprar = false;
              carritoFinalizado = true;
            }
            else if (producto == "1") {
              sumarProductos (redDragon);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("teclado redDragon fue agregado al carrito");
            }
            else if (producto == "2") {
              sumarProductos (hyperX);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("teclado hyperX fue agregado al carrito");
            }
            else if (producto === "3") {
              sumarProductos (razer);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("teclado razer fue agregado al carrito");
            }
           }
        
        break;

        case "2":
        alert("Seleccionaste Mouse");
        while (comprar) {
 
            let producto = prompt("Ingrese el nombre del Mouse que desea agregar al carrito:\n 1-Noga $3000\n 2-Logitech $6999\n 3-Genius $4000 \n 4-FINALIZAR COMPRA");
           
            if (producto === "4") {
              calcularTotal (subtotal);
              alert("El valor total de la compra es de $" + valorTotal +".");
              comprar = false;
              carritoFinalizado = true;
            }
            else if (producto == "1") {
              sumarProductos (Noga);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Mouse Noga fue agregado al carrito");
            }
            else if (producto == "2") {
              sumarProductos (Logitech);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Mouse Logitech fue agregado al carrito");
            }
            else if (producto == "3") {
              sumarProductos (Genius);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Mouse Genius fue agregado al carrito");
            }
           }
        break;  

        case "3":
        alert("Seleccionaste Joystick");
        while (comprar) {
 
            let producto = prompt("Ingrese el modelo de joystick:\n 1-Playstation5 $26000 \n 2-Xbox $32000 \n 3-Pc $8000 \n 4-FINALIZAR COMPRA");
           
            if (producto === "4") {
              calcularTotal (subtotal);
              alert("El valor total de la compra es de $" + subtotal);
              comprar = false;
              carritoFinalizado = true;
            }
            else if (producto == "1") {
              sumarProductos (Playstation5);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Joystick playstation5 fue agregada al carrito");
            }
            else if (producto == "2") {
              sumarProductos (Xbox);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Joystick Xbox fue agregada al carrito");
            }
            else if (producto === "3") {
              sumarProductos (Pc);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Joystick Pc fue agregada al carrito");
            }
           }
        break;

    default:
        alert("Opcion no valida");
        break;
}


//Finalizar compra
if (carritoFinalizado) {


  let envio = prompt("Agregue su direccion para el envio");
  alert("Se enviara en el horario de 9 am a 4 pm a la direccion de " + envio);
  }






