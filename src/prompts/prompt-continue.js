import chalk from "chalk";

/**
 * Define o prompt para perguntar ao usuário se deseja usar outra ferramenta.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 */

const promptContinue = [
	{
		name: "continue",
		description: chalk.yellow.bold("\n🔸Deseja usar outra ferramenta? (s/n) \n"),
		pattern: /^[snSN]$/,
		message: chalk.red.italic("🚨 Por favor, digite 's' para sim ou 'n' para não.\n"),
		required: true,
	},
];

export default promptContinue;
