const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataquesJugador")
const ataquesEnemigo = document.getElementById("ataquesEnemigo")

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let botonFuego
let botonAgua
let botonTierra
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida,) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", './assets/Hipodoge.png', 5)

let capipepo = new Mokepon("Capipepo", './assets/Capipepo.png', 5)

let ratigueya = new Mokepon("Ratigueya", './assets/Ratigueya.png', 5)

hipodoge.ataques.push(
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🔥", id: "boton-fuego" },
)

capipepo.ataques.push(
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
)

ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {//Botones  
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre}>
    <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
    }
    )

    sectionReiniciar.style.display = "none"
    //Selección mascota
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    //Selección reiniciar juego
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Seleccionaste la violencia👹, vuelve y selecciona una mascota")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')


    botonFuego.addEventListener('click', ataqueFuego)

    botonAgua.addEventListener('click', ataqueAgua)

    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueEnemigoSeleccionado()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueEnemigoSeleccionado()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueEnemigoSeleccionado()
}

function ataqueEnemigoSeleccionado() {
    let ataqueEnemigoRandom = aleatorio(1, 3)
    if (ataqueEnemigoRandom == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueEnemigoRandom == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueEnemigoRandom == 3) {
        ataqueEnemigo = "TIERRA"
    }
    definirGanador()
}

function definirGanador() {

    if ((ataqueJugador == "FUEGO") && (ataqueEnemigo == "AGUA") || (ataqueJugador == "AGUA") && (ataqueEnemigo == "TIERRA") || (ataqueJugador == "TIERRA") && (ataqueEnemigo == "FUEGO")) {
        crearMensaje("perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } else if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("empataron")
    } else {
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        //alert("El enemigo perdió, GANASTE")
        crearMensajeFinal("Felicidades, el enemigo ya no tiene vidas. GANASTE")
    } else if (vidasJugador == 0) {
        //alert("Perdiste :(")
        crearMensajeFinal("El enemigo, terminó con tus vidas. PERDISTE")
    }
}

function crearMensaje(resultado) {
    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    //let parrafo = document.createElement("p")
    //parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo, atacó con " + ataqueEnemigo + ". " + resultado
    sectionMensajes.appendChild(notificacion)
    ataquesJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionReiniciar.style.display = "block"
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)//Cuando cargue TODO el navegador (Window), cargará la función iniciar juego