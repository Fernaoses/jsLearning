let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];



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

    const carta = deck.pop();

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    
    console.log(carta);
    console.log(deck);
    return carta;
}

pedirCarta();