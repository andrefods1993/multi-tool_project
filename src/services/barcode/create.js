import chalk from "chalk";
import handleCreate from "./handle-create.js";

/**
 * Gera um código de barras EAN-13 e o exibe no console.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 *
 * @async
 * @function createBarcode
 */
async function createBarcode() {
	// Gera o código de barras usando a função handleCreate
	const barcode = await handleCreate();

	// Exibe o código de barras gerado no console
	console.log(chalk.green(`🏷️ Código de barras EAN-13 gerado: ${chalk.white(barcode)}\n`));
}

// Exporta a função createBarcode como padrão
export default createBarcode;
