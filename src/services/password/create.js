import chalk from "chalk";
import handle from "./handle.js";

/**
 * Gera uma senha e a exibe no console.
 *
 * @async
 * @function createPassword
 */
async function createPassword() {
	// Gera a senha
	const password = await handle();

	// Exibe a senha se for gerada com sucesso
	if (password.length > 0) {
		console.log(chalk.green(`\n🔐 Sua senha é: ${chalk.white(password)}\n`));
	}
}

// Exporta a função createPassword como padrão
export default createPassword;
