/**
 * Calcula um dígito verificador do CNPJ.
 *
 * @param {string} cnpj - Parte do CNPJ para cálculo.
 * @param {number} digit - Índice do dígito a ser calculado.
 * @returns {Promise<number>} - Dígito verificador calculado.
 */
async function calculateDigit(cnpj, digit) {
	let weight = digit === 12 ? 5 : 6;
	let sum = 0;

	for (let i = 0; i < digit; i++) {
		sum += parseInt(cnpj[i]) * weight;
		weight = weight === 2 ? 9 : weight - 1;
	}

	const remainder = sum % 11;
	return remainder < 2 ? 0 : 11 - remainder;
}

// Exporta a função calculateDigit como padrão
export default calculateDigit;
