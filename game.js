

///////////////////////////////////////////////////////////////////////////
//////////////////// INSTANCIAS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


const contenedor = document.querySelector('.contenedor')
const botonR = document.querySelector('.botonR')
const BotonL = document.querySelector('.BotonL')
const level = document.querySelector('.level')


//Definicion de medidas
const altoTablero = 300
const anchoTablero = 570
const altoBloque = 20
const anchoBloque = 100

//definir posicion Usuario
const posicionInicialUsuario = [230,10]
let posicionActualUsuario = posicionInicialUsuario
//Definir posicion de la bola
const posicionInicialBola = [270,40]
let posicionActualBola = posicionInicialBola
//definicion particularidad de la bola
let xDireccionBola = 2
let yDireccionBola = 2
let diametro = 20
//definir timer
let timerID
//Definicion de la clase bloque
class Bloque{
    constructor(ejeX, ejeY){
        this.bottomLeft = [ejeX, ejeY]
        this.bottomRigth = [ejeX + anchoBloque, ejeY]
        this.topLeft = [ejeX, ejeY + altoBloque]
        this.topRigth = [ejeX + anchoBloque, ejeY + altoBloque]

    }
}
//Definir todos los bloques que
const bloques  = [
    new Bloque(10, 250),
    new Bloque(120, 250),
    new Bloque(230, 250),
    new Bloque(340, 250),
    new Bloque(450, 250),
    new Bloque(10, 220),
    new Bloque(120, 220),
    new Bloque(230, 220),
    new Bloque(340, 220),
    new Bloque(450, 220),
    new Bloque(10, 190),
    new Bloque(120, 190),
    new Bloque(230, 190),
    new Bloque(340, 190),
    new Bloque(450, 190),
    new Bloque(10, 160),
    new Bloque(120, 160),
    new Bloque(230, 160),
    new Bloque(340, 160),
    new Bloque(450, 160),
]

const bloques2  = [
    new Bloque(10, 250),
    new Bloque(120, 250),
    new Bloque(230, 250),
    new Bloque(340, 250),
    new Bloque(450, 250),
    new Bloque(10, 220),
    new Bloque(120, 220),
    new Bloque(230, 220),
    new Bloque(340, 220),
    new Bloque(450, 220),
    new Bloque(10, 190),
    new Bloque(120, 190),
    new Bloque(230, 190),
    new Bloque(340, 190),
    new Bloque(450, 190),
    new Bloque(10, 160),
    new Bloque(120, 160),
    new Bloque(230, 160),
    new Bloque(340, 160),
    new Bloque(450, 160),
]


///////////////////////////////////////////////////////////////////////////
////////////////////  FUNCIONES ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


//Funcion añadir bloques que
function addBloques(){
    for(let i = 0; i < bloques.length; i++){
        const bloque = document.createElement('div')
        bloque.classList.add('bloque')
        bloque.style.left = bloques[i].bottomLeft[0] + 'px'
        bloque.style.bottom = bloques[i].bottomLeft[1] + 'px'
        contenedor.appendChild(bloque)   
    }
}



//Definir Usuario
function dibujarUsuario(){
    usuario.style.left = posicionActualUsuario[0] + 'px'
    usuario.style.bottom = posicionActualUsuario[1] + 'px'
    

}

//Mover al usuario por el tablero
function moverUsuario(e){
    switch(e.key){
        case 'ArrowLeft':
            if(posicionActualUsuario[0] > 0){
                posicionActualUsuario[0] -= 30
                dibujarUsuario()
            }
            break
        case 'ArrowRight':
            if(posicionActualUsuario[0] < (anchoTablero - anchoBloque)){
                posicionActualUsuario[0] += 30
                dibujarUsuario()
            }
            break
    }

}

// para botones 
function moverRboton() {
        if(posicionActualUsuario[0] < (anchoTablero - anchoBloque)){
            posicionActualUsuario[0] += 30
            dibujarUsuario()
        }
    }
 function   moverLboton () {
    if(posicionActualUsuario[0] > 0){
        posicionActualUsuario[0] -= 30
        dibujarUsuario()
    }
}

    



//dibujar la bolas
function dibujarBola(){
    bola.style.left = posicionActualBola[0]+ 'px'
    bola.style.bottom = posicionActualBola[1]+ 'px'
}




     // nivel2
     function nivel2() {
    
        const nivel = 2;
        level.innerHTML = `<p>>GAME "BLOQUES" by Gque®   LEVEL : ${nivel}</p>`
        for(let i = 0; i < bloques2.length; i++){
        bloques[i] = bloques2[i]
        }
        timerId = setInterval(moverBola, 30)
        
         //Añadir los bloques al juego
         addBloques()

        
         // CAMBIAR LOS BLoqUES EN COLOR AMARILLo !!!!!!!!!!
         
            // const todosLosBloques =  Array.from(document.querySelectorAll('.bloque'))
            // todosLosBloques[i].classList.remove('bloque')
            for (let i = 0; i < bloques.length; i++){
            // console.log(todosLosBloques)
            // bloques[i]..style.backgroundColor = 'yellow !important';
            // todosLosBloques.style.backgroundColor = 'yellow !important';
            // todosLosBloques.setBackgroundColor(Color.parseColor("#FFFFFF"));
    
            // contenedor.appendChild(todosLosBloques )
         } 
        //  const todosLosBloques =  Array.from(document.querySelectorAll('.bloque'))

        //  todosLosBloques.classList.add('bloque2')
        //            // bloques.style.background-color = black;
        
        // const cambiocolor = document.querySelectorAll('.bloque')
        // console.log(cambiocolor)
        
        // cambiocolor.classList.add('.bloque2')




        contenedor.appendChild(level)
    posicionActualBola[0] += xDireccionBola
    posicionActualBola[1] += yDireccionBola
    dibujarBola()
        revisarColisiones()

    gameOver()
       
    }
    
       

//Definir la funcion que revia las colisiones
function revisarColisiones(){

    //Colision con bloques
    for (let i = 0; i < bloques.length; i++){
        if( (posicionActualBola[0] > bloques[i].bottomLeft[0] && posicionActualBola[0] < bloques[i].bottomRigth[0]) &&
            ((posicionActualBola[1]  + diametro) > bloques[i].bottomLeft[1] && posicionActualBola[1] < bloques[i].topLeft[1])
        ){
            const todosLosBloques = Array.from(document.querySelectorAll('.bloque'))
            todosLosBloques[i].classList.remove('bloque')
           
            bloques.splice(i,1)
            cambiarDireccion()
          
    }

    }

    
    //Colisiones con las paredes (que llegue al limite)
    if(
        posicionActualBola[0] >= (anchoTablero - diametro) ||
        posicionActualBola[1] >= (altoTablero - diametro) ||
        posicionActualBola[0] <= 0 ||
        posicionActualBola[1] <= 0
    ){
        cambiarDireccion()
    }



    //revision colision con usuario ( que este entre medido del usuario)
    if((posicionActualBola[0] > posicionActualUsuario[0] && posicionActualBola[0] < posicionActualUsuario[0] + anchoBloque) && 
    (posicionActualBola[1] > posicionActualUsuario[1] && posicionActualBola[1] < posicionActualUsuario[1] + altoBloque)
    ){
        cambiarDireccion()
    }
    








}







//funcion que termina el juego si la bola toca suelo.
function gameOver(){
    if(posicionActualBola[1] <= 0){
        clearInterval(timerId)  
        document.removeEventListener('keydown',moverUsuario)
        alert("Game Over")
        posicionActualBola[0] = xDireccionBola
        posicionActualBola[1] = yDireccionBola
        dibujarBola() 

    }   
}

//Funcion de cambiar la dirección.
function cambiarDireccion(){
    if(xDireccionBola === 2 && yDireccionBola === 2){
        yDireccionBola = -2
        return
    }
    if(xDireccionBola === 2 && yDireccionBola === -2){
        xDireccionBola = -2
        return
    }
    if(xDireccionBola === -2 && yDireccionBola === -2){
        yDireccionBola = 2
        return
    }
    if(xDireccionBola === -2 && yDireccionBola === 2){
        xDireccionBola = 2
        return
    }
}








///////////////////////////////////////////////////////////////////////////
////////////////////  INICIO DEL JUEGO ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


console.log(level)

//Definir level  ////////////////////////////////////
const nivel = 1;
level.innerHTML = `<p>>GAME "BLOQUES" by Gque®   LEVEL : ${nivel}</p>`
contenedor.appendChild(level)


//Añadir los bloques al juego   ////////////////////////////////////
addBloques()


//Añadir Usuario   ////////////////////////////////////
const usuario = document.createElement('div')
usuario.classList.add('usuario')
contenedor.appendChild(usuario)
dibujarUsuario()


//Añadir evento escuchador para el documento de
document.addEventListener('keydown', moverUsuario)


//Añadi botones para su uso en movil.


//Añadir la bola al tablero
const bola = document.createElement('div')
bola.classList.add('bola')
contenedor.appendChild(bola)
dibujarBola()


// Intervalo que se ejecuta cada 20 milisegundos PRINCIPAL DE EL JUEGO (velocidad)
function nivel1(){
    alert("Welcome")
    timerId =  setInterval(moverBola, 30)
}

// ARRANCA EL JUEGO
// Despues de 1 segundos se ejecuta funcion nivel 1
setTimeout(nivel1, 1000);



//Funcion que ejecuta el JUEGO
function moverBola(){
    posicionActualBola[0] += xDireccionBola
    posicionActualBola[1] += yDireccionBola
    dibujarBola()
    revisarColisiones()
    if( bloques.length === 0) {
        
        // alert("GANASTE , welcome to nivel 2")
        // bloques = bloques2
        nivel2()
    }
    gameOver()
    //Todas las funciones
}

// chequar nivel2 ?
