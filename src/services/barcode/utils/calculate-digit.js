/**
 * Calcula o dígito verificador de um código EAN-13.
 *
 * @param {string} ean12 - Os primeiros 12 dígitos do código EAN-13.
 * @returns {number} - O dígito verificador calculado.
 */
async function calculateDigit(ean12) {
	let sum = 0;

	// Calcula a soma ponderada dos 12 primeiros dígitos
	for (let i = 0; i < ean12.length; i++) {
		sum += parseInt(ean12[i]) * (i % 2 == 0 ? 1 : 3);
	}
	let remainder = sum % 10;

	// Calcula o dígito verificador com base no resto da divisão
	return remainder == 0 ? 0 : 10 - remainder;
}

// Exporta a função calculateDigit como padrão
export default calculateDigit;
