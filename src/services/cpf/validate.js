import prompt from "prompt";
import promptCPF from "../../prompts/prompt-cpf.js";
import handleValidate from "./handle-validate.js";

/**
 * Solicita e valida um CPF utilizando o prompt e a função handleValidate.
 *
 * @async
 * @function validateCPF
 * @returns {Promise<void>}
 */
async function validateCPF() {
	return new Promise((resolve, reject) => {
		// Inicializa o prompt
		prompt.start();

		// Obtém o CPF e valida com a função handleValidate
		prompt.get(promptCPF, (err, result) => {
			if (err) {
				reject(new Error(`🚨 Erro na aplicação: ${err}`));
			} else {
				handleValidate(null, result);
				resolve();
			}
		});
	});
}

// Exporta a função validateCPF como padrão
export default validateCPF;
