import chalk from "chalk";
import qr from "qrcode-terminal";

/**
 * Gera e exibe um QR Code com base nas informações fornecidas.
 *
 * @async
 * @function handle
 * @param {Error} err - Erro encontrado durante a execução.
 * @param {Object} result - Dados fornecidos pelo usuário, incluindo URL e tipo de QR Code.
 */
async function handle(err, result) {
	if (err) {
		console.log(chalk.red.italic(`🚨 Erro na aplicação: ${err}`));
		return;
	}

	// Determina se o QR Code deve ser pequeno com base no tipo fornecido
	const isSmall = result.type === "2";

	// Gera e exibe o QR Code
	qr.generate(result.url, { small: isSmall }, (qrcode) => {
		console.log(chalk.green("\n🚀 QR Code gerado com sucesso: \n"));
		console.log(qrcode);
	});
}

// Exporta a função handle como padrão
export default handle;
