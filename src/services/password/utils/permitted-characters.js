/**
 * Retorna uma lista de caracteres permitidos com base nas variáveis de ambiente.
 *
 * @async
 * @function permittedCharacters
 * @returns {Promise<string[]>} - Lista de caracteres permitidos.
 */
async function permittedCharacters() {
	// Inicializa um array vazio para os caracteres permitidos
	const permittedCharacters = [];

	// Adiciona letras maiúsculas se UPPERCASE_LETTERS for "true"
	if (process.env.UPPERCASE_LETTERS === "true") {
		permittedCharacters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	}

	// Adiciona letras minúsculas se LOWERCASE_LETTERS for "true"
	if (process.env.LOWERCASE_LETTERS === "true") {
		permittedCharacters.push(..."abcdefghijklmnopqrstuvwxyz");
	}

	// Adiciona números se NUMBERS for "true"
	if (process.env.NUMBERS === "true") {
		permittedCharacters.push(..."0123456789");
	}

	// Adiciona caracteres especiais se SPECIAL_CHARACTERS for "true"
	if (process.env.SPECIAL_CHARACTERS === "true") {
		permittedCharacters.push(..."!@#$%^&*()_+-=[]{}|;:<>?");
	}

	// Retorna a lista de caracteres permitidos
	return permittedCharacters;
}

// Exporta a função como padrão
export default permittedCharacters;
