/**
 * Gera uma sequência de números aleatórios.
 *
 * @param {number} count - A quantidade de dígitos a serem gerados.
 * @returns {string} - Uma string contendo os números aleatórios gerados.
 */
async function randomNumbers(count) {
	let numbers = "";

	// Gera a sequência de números aleatórios
	for (let i = 0; i < count; i++) {
		numbers += Math.floor(Math.random() * 10);
	}

	return numbers;
}

// Exporta a função randomNumbers como padrão
export default randomNumbers;
