//1 piedra, 2 papel, 3 tijera
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
    let resultado=""
    if(jugada==1){
        resultado="piedra ✊"
    }else if(jugada==2){
        resultado="papel 📄"
    }else if(jugada==3){
        resultado="tijera ✂️"
    }else resultado="Mala elección"
    return resultado
}
function combate(pc,jugada){
    let resultadoFinal=""
    if(pc==jugada){
        resultadoFinal="EMPATARON"
        ties++
    }else if((jugada==1 && pc==3) || (jugada==2 && pc==1) || (jugada==3 && pc==2) ){
        resultadoFinal="GANASTE"
        userWins++
    }else{
        resultadoFinal="PERDISTE :("
        pcWins++
    }
    return resultadoFinal
}
function showResults(){
    alert("Tienes "+userWins+" victorias. Tienes "+pcWins+" derrotas. Tienes "+ties+" empates.")
    if(userWins==3){
        alert("Ganaste la serie Bo5")
    }
    else if(pcWins==3){
        alert("La computadora ganó la serie Bo5")
    }
    else{
        alert("Ha ocurrido un error, inténtalo de nuevo")
        resetVariables()
    }
}
function resetVariables(){
    let pcWins=0
    let userWins=0
    let ties=0
}
let jugador=0
let pc=0
let pcWins=0
let userWins=0
let ties=0
do{
    jugada=prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    pc=aleatorio(1,3)
    alert("El PC seleccionó "+eleccion(pc))
    alert("Te elegiste "+eleccion(jugada))
    alert(combate(pc,jugada))
}while((pcWins<3) && (userWins<3))
showResults()
alert("Serie Bo5 Finalizada")