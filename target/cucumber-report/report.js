$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarStartup.feature");
formatter.feature({
  "name": "Cadastrar Startup",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastrarStartup"
    },
    {
      "name": "@Cadastrar"
    }
  ]
});
formatter.scenario({
  "name": "CE001 - Cadastrar Startup",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarStartup"
    },
    {
      "name": "@Cadastrar"
    },
    {
      "name": "@CE001CadastrarStartup"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse cadastrar Startup",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarStartupSteps.que_o_usuario_acesse_cadastrar_Startup()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});