package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;

public class CadastrarStartupSteps {
	

	@Dado("que o usuario acesse cadastrar Startup")
	public void que_o_usuario_acesse_cadastrar_Startup() {
		Na(LoginPage.class).clicarbotaoEntrar();
		Na(LoginPage.class).informarCampoCPF("005");
	}

	@Dado("eu informar os Dados da Empresa:")
	public void eu_informar_os_Dados_da_Empresa(io.cucumber.datatable.DataTable dataTable) {

	}

	@E("^informar os Socios da Empresa:$")
	public void informarOsSociosDaEmpresa() throws Throwable {

	}

	@E("^informar as tecnologias$")
	public void informarAsTecnologias() throws Throwable {

	}

	@E("^informar o faturamento$")
	public void informarOFaturamento() throws Throwable {

	}

	@E("^informar qual e o estagio de maturidade$")
	public void informarQualEOEstagioDeMaturidade() throws Throwable {

	}

	@E("^informar se a empresa ja recebeu inverstimento$")
	public void informarSeAEmpresaJaRecebeuInverstimento() throws Throwable {

	}

	@E("^informar se a empresa e associada$")
	public void informarSeAEmpresaEAssociada() throws Throwable {

	}

	@E("^informar se a Startup ja foi finalista$")
	public void informarSeAStartupJaFoiFinalista() throws Throwable {

	}

	@Quando("^clicar em salvar$")
	public void clicarEmSalvar() throws Throwable {

	}

	@Entao("^o sistema apresentara a mensagem \"([^\"]*)\"$")
	public void oSistemaApresentaraAMensagem(String arg1) throws Throwable {

	}

}
