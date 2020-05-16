#language: pt
#enconding: UTF-8
@CadastrarStartup @Cadastrar
Funcionalidade: Cadastrar Startup

  @CE001CadastrarStartup
  Cenario: CE001 - Cadastrar Startup
    Dado que o usuario acesse cadastrar Startup
    #E eu informar os Dados da Empresa:
      #| Nome Fantasia |  |
      #| CNPJ          |  |
      #| UF            |  |
      #| Cidade        |  |
    #E informar os Socios da Empresa:
      #| Descreva a empresa     |  |
      #| Descreva a experiencia |  |
    #E informar as tecnologias
    #E informar o faturamento
    #E informar qual e o estagio de maturidade
    #E informar se a empresa ja recebeu inverstimento
    #E informar se a empresa e associada
    #E informar se a Startup ja foi finalista
    #Quando clicar em salvar
    #Entao o sistema apresentara a mensagem "Startup cadastrada com sucesso!"
