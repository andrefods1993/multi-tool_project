import chalk from "chalk";
import calculateDigit from "./utils/calculate-digit.js";

/**
 * Valida o CNPJ fornecido verificando se os dígitos verificadores estão corretos.
 *
 * @async
 * @function handleValidate
 * @param {Error} err - Possível erro ocorrido ao obter o CNPJ.
 * @param {Object} result - Objeto contendo o CNPJ a ser validado.
 */
async function handleValidate(err, result) {
	if (err) {
		// Exibe mensagem de erro se houver um erro ao obter o CNPJ
		console.log(chalk.red.italic("🚨 Erro ao validar CNPJ:", err.message));
		return;
	}

	const cnpj = result.cnpj;

	// Verifica se todos os dígitos do CNPJ são iguais (caso inválido)
	if (/^(\d)\1+$/.test(cnpj)) {
		console.log(chalk.red.italic("\n🚨 CNPJ inválido: Todos os dígitos são iguais.\n"));
		return;
	}

	try {
		// Calcula o primeiro dígito verificador
		const firstDigit = await calculateDigit(cnpj.slice(0, 12), 12);

		// Calcula o segundo dígito verificador
		const secondDigit = await calculateDigit(cnpj.slice(0, 12) + firstDigit, 13);

		// Verifica se os dígitos verificadores calculados são iguais aos dígitos do CNPJ
		if (cnpj.slice(12, 14) === `${firstDigit}${secondDigit}`) {
			console.log(chalk.green("\n🥳 CNPJ válido!\n"));
		} else {
			console.log(chalk.redBright("\n😱 CNPJ inválido: Dígitos verificadores não coincidem.\n"));
		}
	} catch (error) {
		// Exibe mensagem de erro se ocorrer um erro ao calcular os dígitos verificadores
		console.log(chalk.red.italic("🚨 Erro ao calcular dígitos verificadores:", error.message));
	}
}

// Exporta a função handleValidate como padrão
export default handleValidate;
