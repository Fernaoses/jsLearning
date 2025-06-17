(() => {
    'use strict';
    
    let deck = [];

    const   tipos       = ['C', 'D', 'H', 'S'],
            especiales  = ['A', 'J', 'Q', 'K'];
    
    // Referencias del HTML
    
    const   btnIniciar              = document.querySelector('#btnIniciarJuego'),
            btnPedir                = document.querySelector('#btnPedirCarta'),
            btnPlantarse            = document.querySelector('#btnPlantarse');
            
    const   puntosHTML              = document.querySelectorAll('small'),
            divCartasJugadores      = document.querySelectorAll('.divCartas'),
            divCartasComputadora    = document.querySelectorAll('.divCartas');

    let puntosJugadores = [];
    
    // Funcion para incializar el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnPlantarse.disabled = false;

    };

    // Esta función crea un nuevo deck
    const crearDeck = () => {

        deck = [];
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
    
        return _.shuffle(deck);
    }
    
    // Esta función permite tomar una carta del deck
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
    
        return deck.pop();
    }
    
    // Esta función determina el valor de la carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
    
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : parseInt(valor);
        }
                
    // Esta función acumula los puntos del jugador
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    // Funcion para crear las cartas del jugador y la computadora
    const crearCartas = (carta, turno) => {
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do { 
            const carta = pedirCarta();

            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCartas(carta, puntosJugadores.length - 1);
            console.log("COPUTADORA PIDE pJugadores", puntosJugadores);
            console.log("COPUTADORA PIDE pMinimo", puntosMinimos);
            console.log("COPUTADORA PIDE pComputadora", puntosComputadora);
            
        } while (
            (puntosComputadora < puntosJugadores) 
            && puntosJugadores <= 21
            
        );
        return puntosComputadora;
    }
    
    // Evento para el botón de iniciar juego
    btnIniciar.addEventListener('click', () => {
    
        inicializarJuego();

    });
    
    // Evento para el botón de pedir carta
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCartas(carta, 0);
    
        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnPlantarse.disabled = true;
            turnoComputadora(puntosJugadores);
            resultado();
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnPlantarse.disabled = true;
            turnoComputadora(puntosJugadores);
            resultado();
        }  

        console.log("PIDO CARTA", puntosJugadores);
    })
    
    // Evento para el botón de plantarse
    btnPlantarse.addEventListener('click', () => {
    
        btnPedir.disabled = true;
        btnPlantarse.disabled = true;
    
        turnoComputadora(puntosJugadores);
        resultado();
    });
    
    // Esta función determina el resultado del juego
    const resultado = () => {

        const [puntosJugador, puntosComputadora] = puntosJugadores;

        if (puntosComputadora === puntosJugador) {
            alert('Nadie gana');
        } else if (puntosJugador > 21) {
            alert('Perdiste');
        } else if (puntosComputadora > 21) {
            alert('Ganaste');
        } else if (puntosJugador > puntosComputadora) {
            alert('Ganaste');
        } else {
            alert('Perdiste');
        }
    }
    



}) ();
