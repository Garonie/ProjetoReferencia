package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;

public class TesteSteps {

	@Dado("que eu acesse o sistema")
	public void que_eu_acesse_o_sistema() {
		acessarSistema();
	}

	@E("^anexar o arquivo$")
	public void anexarOArquivo() throws Throwable {
		String dir = System.getProperty("user.dir");
		anexar(dir + "\\anexo.jpg"); // Pasta raiz do projeto

	}

}
