package pageObjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class LoginPage {
	
	public static WebDriver driver;

	private String cpf = "92354655240";
	private String senha = "134679";

	public void login() {
		acessarSistema(cpf, senha);
	}
	
	
	public static void acessarSistema() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver_win32/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get("sinov-angular-des-esteiras.nprd2.caixa/");
	}
	
	public void acessarSistema(String cpf, String senha) {
		try {
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
  
}
  