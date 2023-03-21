

/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} Valor de la carta
 */

// Esta función regresa el valor de la carta pedida
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}