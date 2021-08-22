//import fo from 'fo';
/*let number1, number2, number3;

number1 = prompt("ingrese un numero");
number2 = prompt("ingrese otro numero");
number3 = prompt("ingrese ultimo numero");

number1 = parseInt(number1);
number2 = parseInt(number2);
number3 = parseInt(number3);

if(number1 > number2 && number1 > number3) {
    console.log("Numero 1 es el mayor" + number1);
}else if (number2 > number1 && number2 > number3){
    console.log("Numero 2 es el mayor" + number2)
}else{
    console.log("numero 3 es el mayor" + number3);
};*/

/*const usuario = "matias";
const password = 123456;

let validarUsuario = prompt("Ingrese su Usuario");
let validarPassword = prompt("Ingrese su contraseña");

if(validarUsuario == usuario && validarPassword == password){
    document.write("Bienvenido"+usuario+"al sistema")
}else{
    document.write("Usuario o contraseña incorrectas");
};*/

/*let numero = 50;

resultado = (numero % 2 == 0) ? "es par":"es impar";
console.log(resultado)*/

/*let producto = "orto";

switch(producto){
    case "papas":
        console.log("Papas a $45");
        break;
    case "naranjas":
        console.log("naranjas a $30");
        break;
    case "tomate":
        console.log("tomate a $20");
        break;
    default:
        console.log("No tenemos" ) ;       

}*/

/*var contador = 0;

while (contador > 10) {
    console.log(contador);
};*/

/*for (let contar = 0; contar < 5; contar++) {
    console.log(contar);
};*/

/*var clasificacion = ["Ana", "Pedro", "Mariano", "Clara", "Axel", "Anton"];
let position = 1;

//document.write("clasificacion Actual:" + "<br>")

for (let i = 0; i < clasificacion.length; i++){
    //console.log([i]);
    console.log(`${position++}° - ${clasificacion[i]}°`)
    document.write(`${position++}° - ${clasificacion[i]}°`)
};*/

var clasificacion = ["mato", "flor", "oli", "lola"];
var position = 1;

/*for(let i = 0; i<clasificacion.length; i++){
    console.log(`${position++}° - ${clasificacion[i]}`)
};*/

/*for (const ciclo of clasificacion) {
    console.log(`${position++}° - ${ciclo}`)
    
}*/
/*clasificacion[0] = "flor";
clasificacion[1] = "mato";
clasificacion.pop();
clasificacion.splice(3,"lola")

clasificacion.forEach(element => {
    console.log(`${position++}° - ${element}`)
    
});*/

function calcularPrecioTotal (precio){
    var impuesto = 1.16;
    var gastosEnvio = 10;
    var precioTotal = (precio * impuesto) + gastosEnvio;
    console.log(precioTotal)
};
calcularPrecioTotal(23.34);