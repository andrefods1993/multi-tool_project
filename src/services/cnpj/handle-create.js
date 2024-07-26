import randomNumbers from "./utils/random-numbers.js";
import calculateDigit from "./utils/calculate-digit.js";
import { formatCNPJ } from "./utils/cnpj-formatting.js";

/**
 * Gera um CNPJ aleatório e calcula os dígitos verificadores.
 * O CNPJ gerado pode ser formatado ou não, dependendo da variável de ambiente.
 *
 * @async
 * @function handleCreate
 * @returns {Promise<string>} - O CNPJ gerado, formatado ou não, dependendo da variável de ambiente.
 */
async function handleCreate() {
	const cnpj = [];

	// Gera os primeiros 8 dígitos do CNPJ
	for (let i = 0; i < 8; i++) {
		cnpj.push(await randomNumbers(0, 9));
	}

	// Adiciona a sequência fixa "0001" ao CNPJ
	cnpj.push("0", "0", "0", "1");

	// Calcula o primeiro dígito verificador
	const firstDigit = await calculateDigit(cnpj, 12);
	cnpj.push(firstDigit);

	// Calcula o segundo dígito verificador
	const secondDigit = await calculateDigit(cnpj, 13);
	cnpj.push(secondDigit);

	// Retorna o CNPJ formatado ou não, dependendo da variável de ambiente
	if (process.env.FORMAT_CNPJ === "true") {
		return formatCNPJ(cnpj.join(""));
	} else {
		return cnpj.join("");
	}
}

// Exporta a função handleCreate como padrão
export default handleCreate;
