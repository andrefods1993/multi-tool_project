import prompt from "prompt";
import promptCNPJ from "../../prompts/prompt-cnpj.js";
import handleValidate from "./handle-validate.js";

/**
 * Solicita ao usuário um CNPJ e valida o CNPJ fornecido.
 *
 * @async
 * @function validateCNPJ
 * @returns {Promise<void>}
 */
async function validateCNPJ() {
	return new Promise((resolve, reject) => {
		// Inicializa o prompt
		prompt.start();

		// Obtém o CNPJ e valida com a função handleValidate
		prompt.get(promptCNPJ, (err, result) => {
			if (err) {
				// Rejeita a promessa com uma mensagem de erro se ocorrer um problema
				reject(new Error(`🚨 Erro na aplicação: ${err.message}`));
			} else {
				// Chama a função de validação e resolve a promessa quando a validação estiver completa
				handleValidate(null, result);
				resolve();
			}
		});
	});
}

// Exporta a função validateCNPJ como padrão
export default validateCNPJ;
