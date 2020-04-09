$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FT_001_CriarConta.feature");
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
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});