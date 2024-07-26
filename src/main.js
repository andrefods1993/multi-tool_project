/*
 * Este arquivo inicia a aplicação Multi Tool, exibe uma mensagem de boas-vindas
 * e gerencia o loop principal onde o usuário pode selecionar ações e decidir continuar.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas e chama funções para interação com o usuário.
 */

import chalk from "chalk";
import { userRequest, askToContinue } from "./controllers/user-request.js";
import executeAction from "./controllers/execute-action.js";

// Função assíncrona para iniciar a aplicação
(async () => {
	try {
		// Exibe a mensagem de boas-vindas
		console.log(chalk.green.bold("🛠️ Bem-vindo ao Multi Tool! 🛠️\n"));

		let continueApp = true;

		while (continueApp) {
			// Solicita a escolha do usuário e executa a ação correspondente
			const choice = await userRequest();
			await executeAction(choice);

			// Pergunta se o usuário deseja continuar
			continueApp = await askToContinue();
		}

		// Mensagem de agradecimento ao final da aplicação
		console.log(chalk.cyan.bold("\n✨🎊 Obrigado por usar o Multi Tool! Até a próxima. 🎊✨\n"));
	} catch (startupErr) {
		// Captura e exibe erros ocorridos durante a inicialização
		console.log(chalk.red.italic("🚨 Erro ao iniciar a aplicação: ", startupErr.message));
	}
})();
