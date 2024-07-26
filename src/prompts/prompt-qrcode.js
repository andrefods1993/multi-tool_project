import chalk from "chalk";

/**
 * Define os prompts para gerar um QR Code.
 * Solicita ao usuário a URL para o QR Code e o tipo desejado.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 */

const promptQRCode = [
	{
		name: "url",
		description: chalk.yellow.bold("\n🔸Digite a URL para gerar o QR Code: \n\n"),
	},
	{
		name: "type",
		description:
			chalk.yellow.bold("\n🔸Selecione o tipo de QR Code: \n\n") +
			chalk.yellowBright("1 - Normal \n2 - Terminal\n"),
		pattern: /^[1-2]+$/,
		message: chalk.red.italic("🚨 Opção inválida, digite um número válido.\n"),
		required: true,
	},
];

export default promptQRCode;
