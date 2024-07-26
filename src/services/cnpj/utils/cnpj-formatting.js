/*
 * Este arquivo contém funções para formatar e desformatar um CNPJ.
 */

/**
 * Formata um CNPJ.
 *
 * @param {string} cnpj - O CNPJ em formato de string.
 * @returns {string} - O CNPJ formatado.
 */
async function formatCNPJ(cnpj) {
	return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

/**
 * Remove a formatação de um CNPJ.
 *
 * @param {string} cnpj - O CNPJ formatado em formato de string.
 * @returns {string} - O CNPJ sem formatação.
 */
async function removeCNPJFormatting(cnpj) {
	return cnpj.replace(/[.\-]/g, "");
}

// Exporta as funções formatCNPJ e removeCNPJFormatting
export { formatCNPJ, removeCNPJFormatting };
