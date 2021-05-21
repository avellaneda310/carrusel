// sintaxis

//var producto = "naranjas"

/* switch (producto) {
    case "papas":
        console.log("las papas estan a $45")
        
        break;
    case "naranjas":
        console.log("las naranjas valen $ 90")
        break; 
    case "duraznos":
        console.log("los duraznos cuestan $ 20")  
        break;
    default:
        console.log("notenemos ese producto")         
} */

// estructura del While

//while ( condicion )

// var contador; 
//while(contador){
    //console.log(contador)
    //contador++




//var contador = 0
//while(contador < 10){
  //  console.log(contador)
  //  contador++
//}

// do....while

/* do {
    console.log(contador)
    contador++ 

}while(contador < 10) */

// bucle for

//for(variable, condicion, contador){

 /* for(let contar = 0; contar < 5; contar++){
    console.log(contar) */

    //ejercicio 4

    let position = 1;

    var clasificacion = ['ana', 'pedro', 'mariano', 'clara', 'axel', 'anton']

    document.write("clasificacion actual: " + "<br>");
// for clasico
    for(let i = 0; i < clasificacion.length; i++){
        document.write(`${position++}º - ${clasificacion[i]} <br> <hr>`)
        
    }
    //forof
    let valor = 1;
    // clara seadelanta a mariano
    clasificacion[2] = "clara"
    clasificacion[3] = "mariano"
    for (const ciclo of clasificacion) {
        document.write(`${valor++}º - ${ciclo} <br> <hr>`)
        
       
    }
    // anton es eliminado
    clasificacion.pop()// esta es la forma de eliminarlo

    // agregamos a Roberto y Analia
    clasificacion.splice(1,0, "Roberto", "Analia") 
    // agregamos a marcela en primer lugar
    clasificacion.unshift("Marcela")// agrega en el primer lugar automaticamente


//foreach
    let otro = 1;
    clasificacion.forEach(element => {
        document.write(`${otro++}º - ${element} <br> <hr>`)
        
    });