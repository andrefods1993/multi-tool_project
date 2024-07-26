import chalk from "chalk";
import calculateDigit from "./utils/calculate-digit.js";

/**
 * Valida um CPF verificando se os dígitos verificadores estão corretos.
 *
 * @async
 * @function handleValidate
 * @param {Error} err - Erro ao obter o CPF.
 * @param {Object} result - Resultado do prompt com o CPF.
 */
async function handleValidate(err, result) {
	if (err) {
		// Exibe mensagem de erro se houver um erro ao obter o CPF
		console.log(chalk.red.italic("🚨 Erro ao validar CPF:", err.message));
		return;
	}

	const cpf = result.cpf;

	// Verifica se todos os dígitos do CPF são iguais (caso inválido)
	if (/^(\d)\1{10}$/.test(cpf)) {
		console.log(chalk.red.italic("\n🚨 CPF inválido: Todos os dígitos são iguais.\n"));
		return;
	}

	// Extrai os primeiros 9 dígitos e os dois dígitos verificadores
	const cpfArray = cpf.slice(0, 9).split("").map(Number);
	const firstVerifier = parseInt(cpf[9], 10);
	const secondVerifier = parseInt(cpf[10], 10);

	try {
		// Calcula os dígitos verificadores
		const calculatedFirstVerifier = await calculateDigit(cpfArray, 10);
		const calculatedSecondVerifier = await calculateDigit([...cpfArray, calculatedFirstVerifier], 11);

		// Verifica se os dígitos verificadores calculados coincidem com os fornecidos
		const isValid = calculatedFirstVerifier === firstVerifier && calculatedSecondVerifier === secondVerifier;

		if (isValid) {
			console.log(chalk.green("\n🥳 CPF válido.\n"));
		} else {
			console.log(chalk.redBright("\n😱 CPF inválido: Dígitos verificadores não coincidem.\n"));
		}
	} catch (calculationError) {
		// Exibe mensagem de erro se ocorrer um erro ao calcular os dígitos verificadores
		console.log(chalk.red.italic("🚨 Erro ao calcular dígitos verificadores:", calculationError.message));
	}
}

// Exporta a função handleValidate como padrão
export default handleValidate;
