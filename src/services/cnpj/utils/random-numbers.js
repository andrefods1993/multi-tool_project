/**
 * Gera um número aleatório entre um valor mínimo e máximo.
 *
 * @param {number} min - O valor mínimo do intervalo.
 * @param {number} max - O valor máximo do intervalo.
 * @returns {number} - Um número aleatório entre min e max (inclusive).
 */
async function randomNumbers(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporta a função randomNumbers como padrão
export default randomNumbers;
