import randomNumbers from "./utils/random-numbers.js";
import calculateDigit from "./utils/calculate-digit.js";
import { formatCPF } from "./utils/cpf-formatting.js";

/**
 * Gera um CPF com dígitos verificadores e formatação opcional.
 *
 * @async
 * @function handleCreate
 * @returns {Promise<string>} - O CPF gerado, formatado ou não.
 */

async function handleCreate() {
	const cpf = [];

	// Gera os primeiros 9 dígitos aleatórios do CPF
	for (let i = 0; i < 9; i++) {
		cpf.push(await randomNumbers(0, 9));
	}

	// Calcula e adiciona o primeiro dígito verificador
	const firstVerifier = await calculateDigit(cpf, 10);
	cpf.push(firstVerifier);

	// Calcula e adiciona o segundo dígito verificador
	const secondVerifier = await calculateDigit(cpf, 11);
	cpf.push(secondVerifier);

	// Retorna o CPF formatado ou não, dependendo da variável de ambiente
	if (process.env.FORMAT_CPF === "true") {
		return formatCPF(cpf.join(""));
	} else {
		return cpf.join("");
	}
}

// Exporta a função handleCreate como padrão
export default handleCreate;
