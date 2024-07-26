import chalk from "chalk";

/**
 * Define o prompt para validar um CPF.
 * Solicita ao usuário que insira um CPF com exatamente 11 dígitos numéricos.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 */

const promptCPF = [
	{
		name: "cpf",
		description: chalk.yellow.bold("\n🔸Digite o CPF para validação (somente números): \n\n"),
		pattern: /^\d{11}$/,
		message: chalk.red.italic("🚨 CPF inválido, digite um CPF com 11 dígitos.\n"),
		required: true,
	},
];

export default promptCPF;
