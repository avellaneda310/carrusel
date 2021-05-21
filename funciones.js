// esto es una funcion que necesita un parametro o rgumento o info
//function calcularpreciototal(precio){
   // var impuesto = 1.16;
    //var gastosEnvio = 10;
    //var precioTotal = (precio * impuesto) + gastosEnvio;
    //console.log(precioTotal);

//}
//calcularpreciototal(23.34)

//funcion constructora
const user0 = {
  nombre: "Marcelo",
  apellido: "Tinelli",
  edad: 50,
  nacionalidad: "Argentino",
  hijos: ["Maria", "Francisco", "Laura"]

}


//funcion constructora
function Usuarios(nombre, apellido, edad, nacionalidad, hijos){   //parametros o info para la funcion
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
     this.nacionalidad = nacionalidad;
     this.hijos = hijos;
}
// utilizamos la funcion constructorapara crear usuarios
let altauser1 = new Usuarios("Maria", "Lopez", 40, "Argentina", ["Mario", "lisa", "Sandro"]);
let altauser2 = new Usuarios("Flor", "Muscio", 38, "Argentina", ["Clara", "Luna"]);
let altauser3 = new Usuarios("Matias", "Spag", 45, "Argentina", ["Martin", "Lucas"]);
let altauser4 = new Usuarios("Oli", "Gomez", 19, "Argentina", []);
let altauser5 = new Usuarios("Lola", "Sanchez", 25, "Argentina", []);
// crreamos el array para guardar los datos de los usuarios
const personas = [];

//introducimos los datos dentro del array
personas.push(user0);//sube datos en el array
personas.push(altauser1);
personas.push(altauser2);
personas.push(altauser3);
personas.push(altauser4);
personas.push(altauser5);

//imprimir los dato de los usuarios por la pantalla

personas.forEach(Element => {
    document.write(`${Element.nombre}, 
    ${Element.apellido},
    ${Element.edad}, 
    ${Element.nacionalidad}, 
    ${Element.hijos}, 
    <br> <hr>`)
    
});

for (const iterator of personas) {
  document.write(`${personas.nombre}º - ${Element}`)
  
}