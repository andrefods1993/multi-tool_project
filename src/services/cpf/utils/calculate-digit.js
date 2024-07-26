/**
 * Esta função calcula um dígito verificador para um CPF com base em um multiplicador.
 * O dígito é usado para validar CPF em sistemas de verificação.
 *
 * @param {number[]} cpf - Array contendo os números do CPF.
 * @param {number} multiplier - Valor inicial do multiplicador para o cálculo.
 * @returns {number} - O dígito verificador calculado.
 */

async function calculateDigit(cpf, multiplier) {
	let sum = 0;

	// Soma os valores do CPF multiplicados pelo multiplicador
	for (let i = 0; i < cpf.length; i++) {
		sum += cpf[i] * multiplier--;
	}

	// Calcula o resto da divisão por 11 e determina o dígito verificador
	const rest = sum % 11;
	return rest < 2 ? 0 : 11 - rest;
}

// Exporta a função como padrão
export default calculateDigit;
