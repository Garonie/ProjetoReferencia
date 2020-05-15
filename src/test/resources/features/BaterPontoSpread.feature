#language:pt
#enconding: UTF-8
Funcionalidade: Bater ponto

  @FTBaterPonto
  Cenario: Bater ponto
    Dado que loguei no apontamento de horas
    E eu informar os apontamentos da manha: 
      | Motivo     | Home Office |
      | Hr. Inicio | 10:00       |
      | Hr. Fim    | 14:00       |
    E eu informar os apontamentos da tarde:
      | Motivo     | Home Office |
      | Hr. Inicio | 15:00       |
      | Hr. Fim    | 19:00       |
    E eu informar os apontamentos do intevarlo:
      | Hr. Inicio | 14:00 |
      | Hr. Fim    | 15:00 |
    Quando eu clicar em Salvar
    Entao o sistema devera inserir as horas trabalhadas
