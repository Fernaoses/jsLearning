import _ from 'underscore';

// export const miNombre = 'Alex'

/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {array<String>} tiposCarta Ejemplo: ['C','D','H','S'];
 * @param {array<String>} especialesCarta Ejemplo: ['A','J','Q','K'];
 * @returns {array<String>} 
 */
export const crearDeck = ( tiposCarta, especialesCarta) => {

    if ( !tiposCarta || tiposCarta.length === 0 ) 
        throw new Error('Tipos de carta son obligatorios como un arreglo');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of especialesCarta ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck