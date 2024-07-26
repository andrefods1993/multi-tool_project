import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

/**
 * Cria um QR Code com base nas informações fornecidas pelo usuário.
 *
 * @async
 * @function createQRCode
 * @returns {Promise<void>} Uma promessa que é resolvida quando o QR Code é gerado.
 */
async function createQRCode() {
	return new Promise((resolve, reject) => {
		// Inicializa o prompt
		prompt.start();

		// Inicia o prompt para obter informações do usuário
		prompt.get(promptQRCode, (err, result) => {
			if (err) {
				reject(new Error(`🚨 Erro na aplicação: ${err}`));
			} else {
				handle(null, result);
				resolve();
			}
		});
	});
}

// Exporta a função createQRCode como padrão
export default createQRCode;
