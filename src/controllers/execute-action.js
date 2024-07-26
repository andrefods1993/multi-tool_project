import chalk from "chalk";
import createQRCode from "../services/qrcode/create.js";
import createPassword from "../services/password/create.js";
import createCPF from "../services/cpf/create.js";
import validateCPF from "../services/cpf/validate.js";
import createCNPJ from "../services/cnpj/create.js";
import validateCNPJ from "../services/cnpj/validate.js";
import createBarcode from "../services/barcode/create.js";
import validateBarcode from "../services/barcode/validate.js";

/**
 * Executa uma ação com base na escolha do usuário.
 * Exibe mensagens coloridas usando a biblioteca `chalk`.
 *
 * @async
 * @function executeAction
 *
 * @param {string} choice - A escolha do usuário.
 *
 * 1 = Criar QR Code
 * 2 = Criar Senha
 * 3 = Criar CPF
 * 4 = Validar CPF
 * 5 = Criar CNPJ
 * 6 = Validar CNPJ
 * 7 = Criar Código de Barras
 * 8 = Validar Código de Barras
 */
async function executeAction(choice) {
	// Executa a ação correspondente à escolha do usuário
	switch (choice) {
		case "1":
			await createQRCode();
			break;
		case "2":
			await createPassword();
			break;
		case "3":
			await createCPF();
			break;
		case "4":
			await validateCPF();
			break;
		case "5":
			await createCNPJ();
			break;
		case "6":
			await validateCNPJ();
			break;
		case "7":
			await createBarcode();
			break;
		case "8":
			await validateBarcode();
			break;
		default:
			// Exibe mensagem de erro para opção inválida
			console.log(chalk.red.italic("🚨 Opção inválida! Por favor, tente novamente."));
			break;
	}
}

export default executeAction;
