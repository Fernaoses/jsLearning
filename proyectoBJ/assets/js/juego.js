
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Referencias del HTML
const btnIniciar = document.querySelector('#btnIniciarJuego');
const btnPedir = document.querySelector('#btnPedirCarta');
const btnPlantarse = document.querySelector('#btnPlantarse');
let puntosJugador = 0,
    puntosComputadora = 0;

const puntosHTML = document.querySelectorAll('small');
const cartasJugador = document.querySelector('#jugador-cartas');
const cartasComputadora = document.querySelector('#computadora-cartas');


// Esta función crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);    
    return deck;
}

crearDeck();

// Esta función permite tomar una carta del deck
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    
    return carta;
}


const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : parseInt(valor);
}


// Turno de la computadora

turnoComputadora = (puntosMinimos) => {
    
    
    do { 
        const carta = pedirCarta();
        console.log(`Carta pedida: ${carta}`);

        puntosComputadora = puntosComputadora + valorCarta(carta); 
        console.log(`Puntos de la computadora: ${puntosComputadora}`); 

        puntosHTML[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png" alt=""></img>
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        cartasComputadora.append(imgCarta);
    } while (
        puntosComputadora < puntosMinimos 
        && puntosJugador <= 21
    );
}

// Evento para el botón de iniciar juego
btnIniciar.addEventListener('click', () => {

    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    cartasJugador.innerHTML = '';
    cartasComputadora.innerHTML = '';

    btnPedir.disabled = false;
    btnPlantarse.disabled = false;

    console.clear();

});

// Evento para el botón de pedir carta

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    console.log(`Carta pedida: ${carta}`);

    puntosJugador = puntosJugador + valorCarta(carta); 
    console.log(`Puntos del jugador: ${puntosJugador}`); 

    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/2C.png" alt=""></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    cartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('Ganaste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    }  
})

// Evento para el botón de plantarse

btnPlantarse.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnPlantarse.disabled = true;

    turnoComputadora(puntosJugador);

    if (puntosComputadora === puntosJugador) {
        console.warn('Nadie gana');
    } else if (puntosJugador > 21) {
        console.warn('Perdiste');
    } else if (puntosComputadora > 21) {
        console.warn('Ganaste');
    } else if (puntosJugador > puntosComputadora) {
        console.warn('Ganaste');
    } else {
        console.warn('Perdiste');
    }

});