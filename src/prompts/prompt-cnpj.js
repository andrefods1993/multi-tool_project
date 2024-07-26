import chalk from "chalk";

/**
 * Define o prompt para validar um CNPJ.
 * Solicita ao usuário que insira um CNPJ com exatamente 14 dígitos numéricos.
 * Usa a biblioteca `chalk` para exibir mensagens coloridas.
 */
const promptCNPJ = [
	{
		name: "cnpj",
		description: chalk.yellow.bold("\n🔸Digite o CNPJ para validação (somente números): \n\n"),
		pattern: /^\d{14}$/,
		message: chalk.red.italic("🚨 CNPJ inválido, digite um CNPJ com 14 dígitos.\n"),
		required: true,
	},
];

// Exporta a configuração do prompt CNPJ como padrão
export default promptCNPJ;
