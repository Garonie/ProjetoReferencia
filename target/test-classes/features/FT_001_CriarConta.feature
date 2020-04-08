#language:pt
#enconding: UTF-8
Funcionalidade: FT_001CriarConta

 @FTCriarConta
  Cenario: Criar conta
    Dado que eu cliquei em Signi
    Dado que eu informei o email do cadastro "ddsdaidlaasdfna@gmail.com"
    E informar o Title "Mr"
    E informar o primeiro nome "Personal First name"
    E informar o ultimo nome "First "
    E informar o password "101010" 
    E informar data de nascimento:
      | Dia |   27 |
      | Mes |    5 |
      | Ano | 1982 |
    E clicar em assinar o newsletter  
    E clicar em receber 
    E informar o primeiro nome do endereco "Qnf"
    E informar o Ultimo nome do endereco "todos"
    E informar a companhia "Spread"
    E informar o endereco "d" 
    E informar o endereco linha "dasdfasdf"
    E informar a cidade "Vicente Pires"
    E informar o estado "df"
    E informar o zip code "00000"
    E informar a coutry "Brasslia"
    E informar informacoes adicionais "Ao Vasco tudo!"
    E informar o telefone "99999-9999"
    E informar o endereco de referencia "teste"
    Quando eu clicar no botao Registrar
    Entao o sistema apresenta a tela de boas vinda da conta criada