import chalk from "chalk";
import handleCreate from "./handle-create.js";

/**
 * Função assíncrona para gerar um CNPJ e exibi-lo no console.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 *
 * @async
 * @function createCNPJ
 */
async function createCNPJ() {
	// Gera o CNPJ usando a função handleCreate
	const cnpj = await handleCreate();

	// Exibe o CNPJ gerado no console
	console.log(chalk.green(`\n🏬 CNPJ gerado: ${chalk.white(cnpj)}\n`));
}

// Exporta a função createCNPJ como padrão
export default createCNPJ;
