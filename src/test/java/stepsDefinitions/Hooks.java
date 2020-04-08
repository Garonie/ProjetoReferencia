package stepsDefinitions;

import static utils.Utils.acessarSistema;
import static utils.Utils.driver;
import static utils.Utils.gerarScreenShot;
import static utils.Utils.*;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import utils.Utils;

public class Hooks {
	
	 @Before
	    public void beforeScenario(){
	       acessarSistema();
	    } 
	 
	 @After(order = 1)
	    public void afterScenario(Scenario scenario){
		 gerarScreenShot(scenario);
//		driver.quit();
	    }
	 
	 @After(order = 0, value = "@FTCriarConta")
		public void support(Scenario scenario) throws InterruptedException {
			evidencia(scenario);
			Utils.capturarTela(scenario);
		}
	}
