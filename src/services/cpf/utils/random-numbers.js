/**
 * Gera um número aleatório entre um valor mínimo e máximo inclusivos.
 *
 * @param {number} min - Valor mínimo do intervalo.
 * @param {number} max - Valor máximo do intervalo.
 * @returns {number} - Um número aleatório dentro do intervalo [min, max].
 */

async function randomNumbers(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporta a função como padrão
export default randomNumbers;
