import chalk from "chalk";

/**
 * Define o prompt para selecionar uma ferramenta.
 * Solicita ao usuário que escolha uma opção entre 1 e 8.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 */

const promptMain = [
	{
		name: "select",
		description:
			chalk.yellow.bold("\n🔸Selecione a ferramenta desejada:\n\n") +
			chalk.yellowBright(
				"1 - Gerador de QR Code \n" +
				"2 - Gerador de Senha \n" +
				"3 - Gerador de CPF \n" +
				"4 - Validador de CPF\n" +
				"5 - Gerador de CNPJ\n" +
				"6 - Validador de CNPJ\n" +
				"7 - Gerador de Código de Barras\n" +
				"8 - Validador de Código de Barras\n"
			),
		pattern: /^[1-8]+$/,
		message: chalk.red.italic("🚨 Opção inválida, digite um número válido.\n"),
		required: true,
	},
];

export default promptMain;
