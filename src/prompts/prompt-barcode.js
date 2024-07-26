import chalk from "chalk";

/**
 * Definição do prompt para validação do Código de Barras EAN-13
 * Solicita ao usuário que insira um Código de Barras EAN-13 com exatamente 13 dígitos numéricos.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 */
const promptBarcode = [
	{
		name: "barcode",
		description: chalk.yellow.bold("\n🔸 Digite o Código de Barras EAN-13 (13 dígitos): \n"),
		pattern: /^\d{13}$/,
		message: chalk.red.italic("🚨 Código inválido. Deve ter 13 dígitos numéricos.\n"),
		required: true,
	},
];

// Exporta a configuração do prompt Barcode como padrão
export default promptBarcode;
