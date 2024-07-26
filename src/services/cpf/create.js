import chalk from "chalk";
import handleCreate from "./handle-create.js";

/**
 * Gera um CPF e exibe no console.
 * Usa a biblioteca `chalk` para exibir a mensagem de sucesso.
 *
 * @async
 * @function createCPF
 */
async function createCPF() {
	// Gera o CPF e exibe no console
	const cpf = await handleCreate();
	console.log(chalk.green(`\n🪪 CPF gerado: ${chalk.white(cpf)}\n`));
}

// Exporta a função createCPF como padrão
export default createCPF;
