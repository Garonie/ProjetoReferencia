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
formatter.embedding("image/png", "embedded1.png", null);
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});