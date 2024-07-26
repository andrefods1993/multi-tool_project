/*
 * Este arquivo contém funções para formatar e desformatar um CPF.
 */

/**
 * Função para formatar um CPF.
 *
 * @param {string} cpf - O CPF em formato de string.
 * @returns {string} - O CPF formatado.
 */

async function formatCPF(cpf) {
	// Formata o CPF adicionando pontos e hífen
	return cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
}

/**
 * Função para desformatar um CPF.
 *
 * @param {string} cpf - O CPF formatado em formato de string.
 * @returns {string} - O CPF desformatado.
 */

async function removeCPFFormatting(cpf) {
	// Remove pontos e hífen do CPF
	return cpf.replace(/[.\-]/g, "");
}

// Exporta as funções
export { formatCPF, removeCPFFormatting };
