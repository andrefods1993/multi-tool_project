import prompt from "prompt";
import chalk from "chalk";
import promptMain from "../prompts/prompt-main.js";
import promptContinue from "../prompts/prompt-continue.js";

/**
 * Solicita ao usuário uma escolha e resolve a promessa com a escolha feita.
 * Usa a biblioteca `prompt` para obter a entrada e `chalk` para exibir mensagens de erro.
 *
 * @async
 * @function userRequest
 * @returns {Promise<string>} A escolha do usuário.
 */
async function userRequest() {
	return new Promise((resolve, reject) => {
		prompt.get(promptMain, (err, result) => {
			if (err) {
				reject(new Error(chalk.red.italic(`🚨 Erro ao obter entrada do usuário: ${err.message}`)));
			} else {
				resolve(result.select);
			}
		});
	});
}

/**
 * Pergunta ao usuário se deseja continuar e resolve a promessa com a resposta.
 * Usa a biblioteca `prompt` para obter a entrada e `chalk` para exibir mensagens de erro.
 *
 * @async
 * @function askToContinue
 * @returns {Promise<boolean>} `true` se o usuário deseja continuar, `false` caso contrário.
 */
async function askToContinue() {
	return new Promise((resolve, reject) => {
		prompt.get(promptContinue, (err, result) => {
			if (err) {
				reject(new Error(chalk.red.italic(`🚨 Erro ao obter entrada do usuário: ${err.message}`)));
			} else {
				resolve(result.continue.toLowerCase() === "s");
			}
		});
	});
}

export { userRequest, askToContinue };
