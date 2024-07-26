import randomNumbers from "./utils/random-numbers.js";
import calculateDigit from "./utils/calculate-digit.js";

/**
 * Gera um código de barras EAN-13.
 *
 * @async
 * @function handleCreate
 * @returns {string} - O código de barras EAN-13 gerado.
 */
async function handleCreate() {
	// Obtém o prefixo da variável de ambiente
	const prefix = process.env.PREFIX;

	// Gera 9 números aleatórios
	const numbers = await randomNumbers(9);

	// Combina o prefixo com os números gerados para formar os primeiros 12 dígitos do EAN-13
	const ean12 = prefix + numbers;

	// Calcula o dígito verificador
	const checkDigit = await calculateDigit(ean12);

	// Retorna o código de barras completo (EAN-13)
	return ean12 + checkDigit;
}

// Exporta a função handleCreate como padrão
export default handleCreate;
