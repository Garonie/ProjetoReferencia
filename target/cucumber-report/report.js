$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FT001Login.feature");
formatter.feature({
  "name": "FT_001CriarConta",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Criar conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@FTCriarConta"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu cliquei em Signi",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarContaSteps.que_eu_cliquei_em_Signi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que eu informei o email do cadastro \"teset\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarContaSteps.queEuInformeiOEmailDoCadastro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Title \"Mr\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o primeiro nome \"Personal First name\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_primeiro_nome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o ultimo nome \"First \"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_ultimo_nome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o password \"101010\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar data de nascimento:",
  "rows": [
    {
      "cells": [
        "Dia",
        "27"
      ]
    },
    {
      "cells": [
        "Mes",
        "5"
      ]
    },
    {
      "cells": [
        "Ano",
        "1982"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarDataDeNascimento(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em assinar o newsletter",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.clicar_em_assinar_o_newsletter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em receber",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.clicar_em_receber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o primeiro nome do endereco \"Qnf\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_primeiro_nome_do_endereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Ultimo nome do endereco \"todos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_Ultimo_nome_do_endereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a companhia \"Spread\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarACompanhia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o endereco \"d\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_endereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o endereco linha \"dasdfasdf\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarOEnderecoLinha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a cidade \"Vicente Pires\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_a_cidade(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o estado \"df\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_estado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o zip code \"00000\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_zip_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a coutry \"Brasslia\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_a_coutry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar informacoes adicionais \"Ao Vasco tudo!\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarInformacoesAdicionais(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o telefone \"99999-9999\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informar_o_telefone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o endereco de referencia \"teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarContaSteps.informarOEnderecoDeReferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao Registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarContaSteps.eu_clicar_no_botao_Registrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela de boas vinda da conta criada",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarContaSteps.o_sistema_apresenta_a_tela_de_boas_vinda_da_conta_criada()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027DF5142ET045\u0027, ip: \u002710.0.2.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat utils.Utils.evidencia(Utils.java:69)\r\n\tat stepsDefinitions.Hooks.support(Hooks.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});