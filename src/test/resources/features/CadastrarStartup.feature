#language: pt
#enconding: UTF-8
@CadastrarStartup @Cadastrar
Funcionalidade: Cadastrar Startup

  Contexto: 
    Dado que o usuario acesse cadastrar Startup

  @CE001CadastrarStartup
  Cenario: CE001 - Cadastrar Startup
    E eu informar os Dados da Empresa:
      | Nome Fantasia |  |
      | CNPJ          |  |
      | UF            |  |
      | Cidade        |  |
