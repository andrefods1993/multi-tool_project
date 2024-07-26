import prompt from "prompt";
import promptBarcode from "../../prompts/prompt-barcode.js";
import handleValidate from "./handle-validate.js";

/**
 * Função para validar um código de barras EAN-13.
 * Utiliza o prompt para obter o código de barras e chama a função de validação.
 *
 * @async
 * @function validateBarcode
 * @returns {Promise<void>} - Promessa que é resolvida quando a validação estiver completa.
 */
async function validateBarcode() {
	return new Promise((resolve, reject) => {
		// Inicializa o prompt
		prompt.start();

		// Obtém o código de barras do usuário
		prompt.get(promptBarcode, (err, result) => {
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

// Exporta a função validateBarcode como padrão
export default validateBarcode;
