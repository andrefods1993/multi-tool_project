import chalk from "chalk";
import permittedCharacters from "./utils/permitted-characters.js";

/**
 * Gera uma senha aleatória com base nas configurações.
 *
 * @async
 * @function handle
 * @returns {Promise<string>} A senha gerada.
 */
async function handle() {
	let characters = [];
	let password = "";

	// Define o comprimento da senha baseado na variável de ambiente ou usa 8 como padrão
	const passwordLength = parseInt(process.env.PASSWORD_LENGTH) || 8;

	// Verifica se o comprimento da senha é válido
	if (isNaN(passwordLength) || passwordLength <= 0) {
		console.log(chalk.red.italic("\n🚨 O comprimento da senha deve ser um número maior que zero.\n"));
		return "";
	}

	// Obtém a lista de caracteres permitidos
	characters = await permittedCharacters();

	// Verifica se a lista de caracteres permitidos está vazia
	if (!characters || characters.length === 0) {
		console.log(chalk.red.italic("\n🚨 Nenhum caractere permitido foi definido.\n"));
		return "";
	}

	// Gera a senha aleatória
	for (let i = 0; i < passwordLength; i++) {
		password += characters[Math.floor(Math.random() * characters.length)];
	}

	return password;
}

// Exporta a função handle como padrão
export default handle;
