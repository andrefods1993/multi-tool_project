import chalk from "chalk";
import calculateDigit from "./utils/calculate-digit.js";

/**
 * Valida um código de barras EAN-13 fornecido.
 *
 * @async
 * @function handleValidate
 * @param {Error} err - Possível erro ocorrido ao obter o código de barras.
 * @param {Object} result - Objeto contendo o código de barras a ser validado.
 */
async function handleValidate(err, result) {
	if (err) {
		// Exibe mensagem de erro se houver um erro ao obter o código de barras
		console.log(chalk.red.italic("🚨 Erro ao validar Código de Barras:", err.message));
		return;
	}

	const barcode = result.barcode;

	try {
		// Extrai os primeiros 12 dígitos do código de barras
		const ean12 = barcode.slice(0, 12);
		// Extrai o dígito verificador do código de barras
		const checkDigit = parseInt(barcode[12]);

		// Compara o dígito verificador calculado com o dígito fornecido
		if (checkDigit === (await calculateDigit(ean12))) {
			console.log(chalk.green("\n🥳 Código de Barras EAN-13 válido!\n"));
		} else {
			console.log(
				chalk.redBright("\n😱 Código de Barras EAN-13 inválido: Dígitos verificadores não coincidem.\n")
			);
		}
	} catch (error) {
		// Exibe mensagem de erro se ocorrer um erro ao calcular os dígitos verificadores
		console.log(chalk.red.italic("🚨 Erro ao calcular dígitos verificadores:", error.message));
	}
}

// Exporta a função handleValidate como padrão
export default handleValidate;
