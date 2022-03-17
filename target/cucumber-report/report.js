$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/BaterPontoSpread.feature");
formatter.feature({
  "name": "Bater ponto",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Bater ponto",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@FTBaterPonto"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que loguei no apontamento de horas",
  "keyword": "Dado "
});
formatter.match({
  "location": "BaterPontoSteps.que_loguei_no_apontamento_de_horas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar os apontamentos da manha:",
  "rows": [
    {
      "cells": [
        "Motivo",
        "Home Office"
      ]
    },
    {
      "cells": [
        "Hr. Inicio",
        "10:00"
      ]
    },
    {
      "cells": [
        "Hr. Fim",
        "14:00"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "BaterPontoSteps.eu_informar_os_apontamentos_da_manha(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar os apontamentos da tarde:",
  "rows": [
    {
      "cells": [
        "Motivo",
        "Home Office"
      ]
    },
    {
      "cells": [
        "Hr. Inicio",
        "15:00"
      ]
    },
    {
      "cells": [
        "Hr. Fim",
        "19:00"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "BaterPontoSteps.eu_informar_os_apontamentos_da_tarde(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar os apontamentos do intevarlo:",
  "rows": [
    {
      "cells": [
        "Hr. Inicio",
        "14:00"
      ]
    },
    {
      "cells": [
        "Hr. Fim",
        "15:00"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "BaterPontoSteps.eu_informar_os_apontamentos_do_intevarlo(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar em Salvar",
  "keyword": "Quando "
});
formatter.match({
  "location": "BaterPontoSteps.eu_clicar_em_Salvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema devera inserir as horas trabalhadas",
  "keyword": "Entao "
});
formatter.match({
  "location": "BaterPontoSteps.o_sistema_devera_inserir_as_horas_trabalhadas()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});