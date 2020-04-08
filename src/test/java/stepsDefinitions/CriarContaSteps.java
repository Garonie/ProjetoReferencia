package stepsDefinitions;

import java.util.ArrayList;
import java.util.Map;
import java.util.Random;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CriarContaPage;

public class CriarContaSteps {

	CriarContaPage cp = new CriarContaPage();

	@Dado("que eu cliquei em Signi")
	public void que_eu_cliquei_em_Signi() {
		cp.clicarNoBotaoSignin();
	}

	@Dado("^que eu informei o email do cadastro \"([^\"]*)\"$")
	public void queEuInformeiOEmailDoCadastro(String string) throws Throwable {
		
		Random aleatorio = new Random();
		String email = aleatorio.toString();
		cp.preencherCampoEmail(email +"@gmail.com");
		
		
		
//		cp.botaoCriarConta.click();
	}

	@Dado("informar o Title {string}")
	public void informar_o_Title(String string) {
		cp.informarTitle(string);
	}

	@Dado("informar o primeiro nome {string}")
	public void informar_o_primeiro_nome(String string) {
		cp.informarPrimeiroNome(string);
	}

	@Dado("informar o ultimo nome {string}")
	public void informar_o_ultimo_nome(String string) {
		cp.informarSegundoNome(string);
	}

	@Dado("informar o email {string}")
	public void informar_o_email(String string) {
		cp.informarEmail(string);
	}

	@Dado("informar o password {string}")
	public void informar_o_password(String string) {
		cp.informarSenha(string);

	}

	@E("^informar data de nascimento:$")
	public void informarDataDeNascimento(DataTable table) throws Throwable {
		Map<String, String> map = table.asMap(String.class, String.class);
		cp.informarDia(map.get("Dia"));
		cp.informarMes(map.get("Mes"));
		cp.informarAno(map.get("Ano"));
	}

	@Dado("clicar em assinar o newsletter")
	public void clicar_em_assinar_o_newsletter() {
		cp.checkSign();

	}

	@Dado("clicar em receber")
	public void clicar_em_receber() {
		cp.checkReceber();
	}

	@Dado("informar o primeiro nome do endereco {string}")
	public void informar_o_primeiro_nome_do_endereco(String string) {
		cp.informarPrimeiroNomeEndereco(string);
	}

	@Dado("informar o Ultimo nome do endereco {string}")
	public void informar_o_Ultimo_nome_do_endereco(String string) {
		cp.informarUltimoNomeEndereco(string);
	}

	@E("^informar a companhia \"([^\"]*)\"$")
	public void informarACompanhia(String string) throws Throwable {
		cp.informarCompanhia(string);
	}

	@Dado("informar o endereco {string}")
	public void informar_o_endereco(String string) {
		cp.informarEnderco(string);
	}

	@E("^informar o endereco linha \"([^\"]*)\"$")
	public void informarOEnderecoLinha(String string) throws Throwable {
		cp.informarEndercoLinha(string);
	}

	@Dado("informar a cidade {string}")
	public void informar_a_cidade(String string) {
		cp.informarCidade(string);
	}

	@Dado("informar o estado {string}")
	public void informar_o_estado(String string) {
		cp.informarEstado(string);
	}

	@Dado("informar o zip code {string}")
	public void informar_o_zip_code(String string) {
		cp.informarZipCode(string);
	}

	@Dado("informar a coutry {string}")
	public void informar_a_coutry(String string) {
		cp.informarCountry(string);
	}

	@E("^informar informacoes adicionais \"([^\"]*)\"$")
	public void informarInformacoesAdicionais(String string) throws Throwable {
		cp.informacoesAdicionais(string);
	}

	@Dado("informar o telefone {string}")
	public void informar_o_telefone(String string) {
		cp.informarTelefone(string);
	}

	@E("^informar o endereco de referencia \"([^\"]*)\"$")
	public void informarOEnderecoDeReferencia(String string) throws Throwable {
		cp.informarEnderecoReferencia(string);
	}

	@Quando("eu clicar no botao Registrar")
	public void eu_clicar_no_botao_Registrar() {
		cp.clicarNoBotaoRegister();

	}

	@Entao("o sistema apresenta a tela de boas vinda da conta criada")
	public void o_sistema_apresenta_a_tela_de_boas_vinda_da_conta_criada() {
		cp.validaTelaCadastroSucesso();
	}

}
