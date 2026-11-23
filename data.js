/* ============================================================
   XII SAM 2026 — DADOS.
   · PROGRAMA: cronograma oficial, mantido pelo coordenador AQUI.
     Cada item (oral ou pôster) aceita um campo OPCIONAL `id`
     (ex.: id:"T-0012") que liga manualmente ao trabalho liberado,
     vencendo o casamento automático por nome.
   · TRABALHOS: exemplos usados APENAS como fallback de
     desenvolvimento local (ver lib.jsx). Nunca aparecem ao público
     em produção — a lista real vem do backend (curadoria).
   Globais expostos em window para os scripts Babel.
   ============================================================ */

const C = {
  azul: "#023E88", azulEsc: "#01285A",
  ciano: "#00ADEF", cianoClaro: "#E5F6FE",
  tinta: "#0C1A2B", cinza: "#5B6B7E",
  cinzaClaro: "#EEF2F6", papel: "#F7F9FB", ambar: "#B07A18",
};

const AREA_COR = {
  "Educação Médica": "#5B6B7E", "Neurologia": "#6A4C93", "Neurocirurgia": "#5B3A82",
  "Geriatria": "#B07A18", "Psiquiatria": "#7A4D9C", "Medicina de Família e Comunidade": "#D38F00",
  "Ginecologia e Obstetrícia": "#B23A82", "Oncologia": "#2A8A5C", "Otorrinolaringologia": "#0080B7",
  "Endocrinologia": "#C4622D", "Infectologia": "#3D6E1B", "Pediatria": "#00ADEF",
  "Cardiologia": "#A23A1F", "Cirurgia Vascular": "#7A2616",
  "Anestesiologia": "#33658A", "Cirurgia Geral": "#7A4419", "Reumatologia": "#9C3D54",
  "Gastroenterologia": "#946B2D", "Dermatologia": "#2F7E78", "Ortopedia": "#46537A",
  "Cirurgia Torácica": "#8A4B2A", "Medicina do Estilo de Vida": "#3E8E41", "Medicina Legal e Perícia Médica": "#4A4E69",
  "Urgência e Emergência": "#C0392B", "Neonatologia": "#1F8FB8", "Patologia": "#7D5A8C",
};

const DIAS = ["Seg · 23/11", "Ter · 24/11", "Qua · 25/11", "Qui · 26/11", "Sex · 27/11"];

/* TRABALHOS EXEMPLO — fallback de DESENVOLVIMENTO LOCAL apenas (nunca em produção) */
const TRABALHOS = [
  { id:"EX-01", fase:7, desenho:"Estudo transversal", area:"Ginecologia e Obstetrícia",
    titulo:"Adesão ao rastreamento de câncer de colo uterino em unidades de saúde da família do Alto Vale do Itajaí",
    autores:["A. Discente Exemplo","B. Discente Exemplo"], orientador:"Orientadora Exemplo",
    intro:"O câncer de colo uterino permanece como causa evitável de mortalidade feminina. O rastreamento citopatológico é a principal estratégia de detecção precoce na atenção primária.",
    objetivos:"Estimar a adesão ao rastreamento e identificar fatores associados à não realização do exame.",
    metodos:"Estudo transversal com 380 mulheres de 25–64 anos cadastradas em quatro ESF, por amostragem aleatória.",
    resultados:"Resultados esperados: estimativa de cobertura por faixa etária e identificação de barreiras de acesso.",
    conclusao:"O projeto deve orientar estratégias locais de ampliação da cobertura no território.",
    palavras:["Neoplasias do colo do útero","Atenção primária","Programas de rastreamento"],
    figuras:[ {ordem:1,secao:"Métodos",legenda:"Fluxo de seleção das ESF participantes",principal:false}, {ordem:2,secao:"Resultados",legenda:"Distribuição da amostra por faixa etária e ESF",principal:true} ] },
  { id:"EX-02", fase:7, desenho:"Revisão sistemática", area:"Endocrinologia",
    titulo:"Metformina versus intervenção dietética isolada na progressão do pré-diabetes: revisão sistemática",
    autores:["C. Discente Exemplo"], orientador:"Orientador Exemplo",
    intro:"O pré-diabetes representa janela de oportunidade para prevenção. Há debate sobre a melhor estratégia inicial.",
    objetivos:"Comparar a eficácia da metformina e da intervenção dietética isolada na progressão para diabetes tipo 2.",
    metodos:"Revisão sistemática em MEDLINE, Embase e Cochrane seguindo PRISMA.",
    resultados:"Síntese qualitativa e, se houver homogeneidade, meta-análise dos desfechos.",
    conclusao:"A síntese deve orientar a conduta inicial no pré-diabetes na atenção primária.",
    palavras:["Estado pré-diabético","Metformina","Dieta"],
    figuras:[ {ordem:1,secao:"Métodos",legenda:"Fluxograma PRISMA da seleção dos estudos",principal:true} ] },
  { id:"EX-03", fase:7, desenho:"Estudo ecológico", area:"Infectologia",
    titulo:"Tendência temporal das internações por dengue no Alto Vale do Itajaí, 2015–2024",
    autores:["D. Discente Exemplo"], orientador:"Orientadora Exemplo",
    intro:"A dengue impõe carga crescente aos serviços de saúde. A análise de tendências apoia o planejamento.",
    objetivos:"Descrever a tendência temporal das internações por dengue na microrregião em dez anos.",
    metodos:"Estudo ecológico de séries temporais com dados do SIH/SUS, com regressão de Prais-Winsten.",
    resultados:"Resultados esperados: identificação de tendência e padrão sazonal das internações.",
    conclusao:"Os achados devem subsidiar o cronograma de ações de controle vetorial.",
    palavras:["Dengue","Séries temporais","Hospitalização"],
    figuras:[ {ordem:1,secao:"Resultados",legenda:"Série temporal das internações por mês (2015–2024)",principal:true} ] },
  { id:"EX-04", fase:8, desenho:"Relato de caso", area:"Pediatria",
    titulo:"Apresentação atípica de lúpus eritematoso sistêmico de início juvenil: relato de caso",
    autores:["E. Discente Exemplo","F. Discente Exemplo"], orientador:"Orientador Exemplo",
    intro:"O LES juvenil pode cursar com apresentações inespecíficas, retardando o diagnóstico.",
    objetivos:"Relatar caso de LES juvenil com apresentação atípica e revisar a literatura pertinente.",
    metodos:"Caso de adolescente com febre prolongada, poliartralgia e citopenias. Consentimento obtido.",
    resultados:"A investigação evidenciou critérios diagnósticos de LES, com boa resposta ao tratamento.",
    conclusao:"O reconhecimento de apresentações atípicas reduz o atraso diagnóstico.",
    palavras:["Lúpus eritematoso sistêmico","Adolescente","Diagnóstico tardio"],
    resumo_completo:"Introdução: o lúpus eritematoso sistêmico de início juvenil pode cursar com apresentações inespecíficas, retardando o diagnóstico. Objetivo: relatar caso de LES juvenil com apresentação atípica e revisar a literatura pertinente. Método: relato de caso de adolescente com febre prolongada, poliartralgia e citopenias, com consentimento obtido. Resultados: a investigação evidenciou critérios diagnósticos de LES, com boa resposta ao tratamento instituído. Conclusão: o reconhecimento de apresentações atípicas reduz o atraso diagnóstico e melhora o prognóstico.",
    figuras:[ {ordem:1,secao:"Resultados",legenda:"Linha do tempo clínica e laboratorial do caso",principal:true} ] },
  { id:"EX-05", fase:8, desenho:"Estudo transversal", area:"Psiquiatria",
    titulo:"Sintomas de ansiedade e qualidade do sono entre estudantes de Medicina: estudo transversal",
    autores:["G. Discente Exemplo"], orientador:"Orientadora Exemplo",
    intro:"A formação médica é reconhecida fonte de sofrimento psíquico.",
    objetivos:"Estimar a prevalência de sintomas de ansiedade e sua associação com a qualidade do sono.",
    metodos:"Estudo transversal com instrumentos validados (GAD-7 e Pittsburgh) aplicados aos estudantes.",
    resultados:"Prevalência elevada de sintomas ansiosos, com associação significativa à má qualidade do sono.",
    conclusao:"Os achados reforçam a necessidade de programas institucionais de apoio à saúde mental.",
    palavras:["Ansiedade","Sono","Estudantes de medicina"],
    resumo_completo:"Introdução: a formação médica é reconhecida fonte de sofrimento psíquico. Objetivo: estimar a prevalência de sintomas de ansiedade e sua associação com a qualidade do sono entre estudantes de Medicina. Método: estudo transversal com instrumentos validados (GAD-7 e índice de Pittsburgh) aplicados aos estudantes. Resultados: observou-se prevalência elevada de sintomas ansiosos, com associação significativa à má qualidade do sono. Conclusão: os achados reforçam a necessidade de programas institucionais de apoio à saúde mental.",
    figuras:[ {ordem:1,secao:"Resultados",legenda:"Distribuição dos escores de ansiedade (GAD-7)",principal:false}, {ordem:2,secao:"Resultados",legenda:"Associação entre ansiedade e qualidade do sono",principal:true} ] },
  { id:"EX-06", fase:8, desenho:"Estudo de coorte", area:"Cardiologia",
    titulo:"Fatores associados à reinternação em 30 dias após insuficiência cardíaca descompensada",
    autores:["H. Discente Exemplo"], orientador:"Orientador Exemplo",
    intro:"A reinternação precoce por IC é marcador de qualidade assistencial e desfecho evitável.",
    objetivos:"Identificar fatores associados à reinternação em 30 dias após internação por IC descompensada.",
    metodos:"Coorte retrospectiva de pacientes internados por IC, com seguimento de 30 dias.",
    resultados:"Fatores como classe funcional avançada e ausência de conciliação medicamentosa associaram-se a maior risco.",
    conclusao:"Intervenções na transição de cuidado podem reduzir reinternações precoces.",
    palavras:["Insuficiência cardíaca","Readmissão","Transição de cuidado"],
    resumo_completo:"Introdução: a reinternação precoce por insuficiência cardíaca é marcador de qualidade assistencial e desfecho evitável. Objetivo: identificar fatores associados à reinternação em 30 dias após internação por IC descompensada. Método: coorte retrospectiva de pacientes internados por IC, com seguimento de 30 dias. Resultados: fatores como classe funcional avançada e ausência de conciliação medicamentosa associaram-se a maior risco. Conclusão: intervenções na transição de cuidado podem reduzir reinternações precoces.",
    figuras:[ {ordem:1,secao:"Resultados",legenda:"Curva de risco de reinternação em 30 dias",principal:true} ] },
];

/* PROGRAMA REAL — cronograma XII SAM, 23 a 27/11/2026 (atualizado em 23/11/2026; mantido pelo coordenador).
   Item oral:   { tc, hora, area, ap, titulo, uc, id? }
   Item pôster: { n, ap, id? }
   `id` (opcional) = override manual: liga o item exatamente àquele trabalho.
   `youtube` (por dia) = URL FIXA da transmissão ao vivo daquele dia (transmissões
   oficiais da XII SAM); com link, aparece o botão “▶ Assistir ao vivo” no cabeçalho
   do dia; vazio = sem botão. NÃO esvaziar estes links em regenerações. */
const PROGRAMA = {
  "Seg · 23/11": { sci:"16h45–17h45", abertura:{ hora:"17h45–18h00", label:"Abertura da XII SAM" }, youtube:"",
    orais:[
      { tc:"TC1", hora:"18h00", area:"Psiquiatria", ap:"Sofia Venturi", titulo:"Associação entre os agonistas de GLP-1 e depressão em adultos: uma revisão sistemática e metanálise", uc:"Alinne Petris" },
      { tc:"TC2", hora:"18h40", area:"Psiquiatria", ap:"Jaqueline Vansuita", titulo:"Perfil clínico de adultos com TDAH atendidos no sistema público de saúde de um município de médio porte no Sul do Brasil", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC3", hora:"19h20", area:"Psiquiatria", ap:"Ana Luíza Tenfen", titulo:"Repercussões clínicas, financeiras e psicossociais relacionadas ao transtorno do jogo: uma série de três casos", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC4", hora:"20h00", area:"Psiquiatria", ap:"Luísa Fronza Gomes", titulo:"Antecedentes familiares, gestacionais, perinatais e pós natais associados ao transtorno do espectro autista: estudo caso-controle", uc:"Alinne Petris" },
      { tc:"TC5", hora:"20h40", area:"Neurologia", ap:"Kaylaine Rodrigues Almeida Andrade", titulo:"Fatores associados à mortalidade intra-hospitalar em pacientes internados com acidente vascular cerebral: um estudo de coorte retrospectiva", uc:"Samantha Cristiane Lopes" },
      { tc:"TC6", hora:"21h20", area:"Neurocirurgia", ap:"Carl Zolet Jonck", titulo:"Doença de Lhermitte-Duclos: apresentação clínica, diagnóstico e abordagem neurocirúrgica", uc:"Alinne Petris" },
    ],
    posteres:[
      { n:1, area:"Infectologia", ap:"Amanda Figueiredo Meneghetti", titulo:"Sífilis congênita em Santa Catarina, Brasil: tendência temporal, falhas na assistência pré-natal e completude dos registros, 2015–2024" },
      { n:2, area:"Infectologia", ap:"Ananda de Matos Silva", titulo:"Eficácia da cefalexina no tratamento de infecções bacterianas agudas da pele e estruturas cutâneas: uma revisão sistemática" },
      { n:3, area:"Oncologia", ap:"Bárbara Letícia Armiliato", titulo:"Reações adversas em pacientes oncológicos em uso de 5-fluorouracil e capecitabina e sua relevância para a testagem farmacogenética de DPYD" },
      { n:4, area:"Medicina Legal e Perícia Médica", ap:"Carla Bonacolsi", titulo:"Perfil epidemiológico das vítimas de estupro periciadas pela Polícia Científica em Rio do Sul, Santa Catarina, de 2020 a 2025" },
      { n:5, area:"Psiquiatria", ap:"Cauã Eduardo Eibel", titulo:"Eficácia e segurança neuropsiquiátrica dos agonistas do receptor de GLP-1 no tratamento do transtorno por uso de álcool: uma revisão umbrella" },
      { n:6, area:"Cardiologia", ap:"Eduardo Jacó Goedert", titulo:"Frequência e perfil clínico de cinecoronariografias sem doença arterial coronariana obstrutiva em pacientes com suspeita de síndrome coronariana aguda atendidos no pronto-socorro de um hospital do Alto Vale do Itajaí" },
    ] },
  "Ter · 24/11": { sci:"17h00–18h00", youtube:"",
    orais:[
      { tc:"TC1", hora:"18h00", area:"Medicina do Estilo de Vida", ap:"Leandro Iomes de Souza", titulo:"Calendário autoavaliativo para monitoramento de novos hábitos de estilo de vida na atenção básica: estudo de fase 2 de braço único", uc:"Samantha Cristiane Lopes" },
      { tc:"TC2", hora:"18h40", area:"Ginecologia e Obstetrícia", ap:"Bruna Gonzales Nejm", titulo:"Agonistas dos receptores de incretinas isolados ou associados a metformina versus metformina em monoterapia em mulheres com síndrome dos ovários policísticos e sobrepeso ou obesidade: uma revisão sistemática e metanálise de ensaios clínicos randomizados", uc:"Samantha Cristiane Lopes" },
      { tc:"TC3", hora:"19h20", area:"Ginecologia e Obstetrícia", ap:"Abraham Lincoln Galdino Costa", titulo:"Demanda obstétrica, cesárea e fluxo regional em hospital de referência: estudo transversal", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC4", hora:"20h00", area:"Ginecologia e Obstetrícia", ap:"Íris Lyra Martendal", titulo:"Perfil epidemiológico do aborto espontâneo em um hospital do Sul do Brasil: análise por idade gestacional e características maternas", uc:"Alinne Petris" },
      { tc:"TC5", hora:"20h40", area:"Dermatologia", ap:"Augusto Henrique Gamba", titulo:"Viabilidade da disponibilização gratuita de protetor solar pelo Sistema Único de Saúde (SUS) como medida de prevenção do câncer de pele: uma revisão sistemática", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC6", hora:"21h20", area:"Cardiologia", ap:"Suelen Dias Clasen", titulo:"Origem anômala da artéria circunflexa a partir do ramo ventricular posterior direito: uma variante anatômica rara", uc:"Franciani Rodrigues da Rocha" },
    ],
    posteres:[
      { n:1, area:"Medicina de Família e Comunidade", ap:"Giacomo João Mondini", titulo:"Carga anticolinérgica em idosos da atenção primária à saúde" },
      { n:2, area:"Cardiologia", ap:"Heitor Antônio Giehl", titulo:"Cardiopatias congênitas: perfil dos nascidos vivos nas regiões brasileiras, 2022 a 2025: estudo ecológico" },
      { n:3, area:"Psiquiatria", ap:"Iago Prim Guimarães de Melo", titulo:"Microbiota intestinal basal e resposta ao tratamento antidepressivo em adultos com transtorno depressivo maior: revisão sistemática" },
      { n:4, area:"Endocrinologia", ap:"João Otávio Correa Machado", titulo:"Interferência de RNA direcionada para a redução da lipoproteína (a): revisão de escopo das evidências clínicas e lacunas de pesquisa" },
      { n:5, area:"Ginecologia e Obstetrícia", ap:"Larissa Raimundo", titulo:"Malformação de Chiari II fetal associada à raquisquise e abordagem cirúrgica intrauterina: relato de caso" },
      { n:6, area:"Psiquiatria", ap:"Leandro Batista de Oliveira", titulo:"Fatores associados à frequência, persistência, recorrência e gravidade física da autolesão não suicida: uma revisão sistemática" },
    ] },
  "Qua · 25/11": { sci:"16h20–17h20", youtube:"",
    orais:[
      { tc:"TC1", hora:"17h20", area:"Endocrinologia", ap:"Gabriela Luiza Cezar", titulo:"Características clínicas e eventos hospitalares segundo a gravidade da hipoglicemia em pacientes internados em enfermaria: um estudo observacional retrospectivo", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC2", hora:"18h00", area:"Endocrinologia", ap:"Gabriela Tambosi Catafesta", titulo:"Terapia combinada com agonista do receptor de GLP-1 em adolescente com fenótipo de MODY: relato de caso", uc:"Alinne Petris" },
      { tc:"TC3", hora:"18h40", area:"Endocrinologia", ap:"Gercino de Matos Neto", titulo:"Os agonistas do receptor de GLP-1 alteram a psicopatologia de transtornos alimentares? Revisão sistemática e meta-análise de desfechos do EDE-Q", uc:"Samantha Cristiane Lopes" },
      { tc:"TC4", hora:"19h20", area:"Gastroenterologia", ap:"Gabriela Lucia Imhoff", titulo:"Abdome agudo obstrutivo por melanoma: um relato de caso", uc:"Samantha Cristiane Lopes" },
      { tc:"TC5", hora:"20h00", area:"Gastroenterologia", ap:"Graciane Zemke", titulo:"Migração tardia de clipe cirúrgico para o colédoco após colecistectomia videolaparoscópica", uc:"Alinne Petris" },
      { tc:"TC6", hora:"20h40", area:"Cirurgia Geral", ap:"Emanuela Tenfen", titulo:"Perfil epidemiológico de pacientes com câncer de cólon complicado por abdome agudo obstrutivo: estudo transversal em um hospital de Santa Catarina, Sul do Brasil", uc:"Samantha Cristiane Lopes" },
      { tc:"TC7", hora:"21h20", area:"Oncologia", ap:"Milena Ferreira de Souza", titulo:"Perfil epidemiológico de pacientes com câncer de mama submetidas a tratamento cirúrgico em um hospital de Santa Catarina, Sul do Brasil", uc:"Alinne Petris" },
    ],
    posteres:[
      { n:1, area:"Cirurgia Vascular", ap:"Léo Jaime Xavier Da Silva", titulo:"Ticagrelor versus clopidogrel na dupla antiagregação plaquetária após revascularização carotídea por stent: revisão sistemática e meta-análise" },
      { n:2, area:"Cirurgia Geral", ap:"Letícia Tiburski da Rocha", titulo:"Reabordagem cirurgica não planejada após colectomia oncológica em um hospital terciário do Alto Vale do Itajaí no período de 2020 a 2026: análise de fatores e desfechos clínicos" },
      { n:3, area:"Ginecologia e Obstetrícia", ap:"Lohana Helena da Fonseca Silva", titulo:"Condições clínicas e obstétricas de gestantes acompanhadas no pré-natal de alto risco em um hospital terciário de Rio do Sul, Santa Catarina, entre 2025 e 2026: estudo transversal" },
      { n:4, area:"A confirmar", ap:"Lucas Bongiolo", titulo:"Título a confirmar" },
      { n:5, area:"Infectologia", ap:"Lucas Paulo Tito Staloch", titulo:"Desempenho e vieses de escores de risco na neutropenia febril em adultos com neoplasias de órgão sólido: desenvolvimento e validação interna de um modelo preditivo para complicações graves" },
      { n:6, area:"Neonatologia", ap:"Maísa Laguna", titulo:"Fatores associados à morbimortalidade de recém-nascidos prematuros internados na UTIN de um hospital terciário da região do Alto Vale do Itajaí no período de 2022 a 2026" },
    ] },
  "Qui · 26/11": { sci:"16h20–17h20", youtube:"",
    orais:[
      { tc:"TC1", hora:"17h20", area:"Cardiologia", ap:"Rodrigo Voigt Filho", titulo:"Associação entre o uso de benzodiazepínicos ou drogas-Z e desfechos clínicos adversos em pacientes com insuficiência cardíaca: revisão sistemática e meta-análise em rede", uc:"Samantha Cristiane Lopes" },
      { tc:"TC2", hora:"18h00", area:"Cardiologia", ap:"Millena Laurindo", titulo:"Holter documenta parada cardiorrespiratória seguida de reanimação cardiopulmonar e recuperação circulatória: um relato de caso", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC3", hora:"18h40", area:"Cardiologia", ap:"Milena Goedert", titulo:"Hipotireoidismo como possível fator associado à progressão da aterosclerose grave: um relato de caso", uc:"Alinne Petris" },
      { tc:"TC4", hora:"19h20", area:"Cardiologia", ap:"Emily Martins Arruda", titulo:"Eficácia e segurança da dexmedetomidina em pacientes submetidos ao implante transcateter de valva aórtica (TAVI): uma revisão sistemática e metanálise", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC5", hora:"20h00", area:"Dermatologia", ap:"Jaqueline Klagemberg", titulo:"Segurança dos procedimentos a laser conforme momento de uso da isotretinoína sistêmica em adultos com cicatrizes de acne: revisão sistemática", uc:"Samantha Cristiane Lopes" },
      { tc:"TC6", hora:"20h40", area:"Ortopedia", ap:"Gabriel Borella Rosado", titulo:"Associação entre tempo de internação hospitalar e mortalidade em até um ano em idosos com fraturas proximais de fêmur: estudo de coorte retrospectiva", uc:"Franciani Rodrigues da Rocha" },
      { tc:"TC7", hora:"21h20", area:"Cirurgia Torácica", ap:"Élton Léo Junglos", titulo:"Internações, óbitos e letalidade hospitalar por embolia pulmonar no Brasil: comparação de três períodos de 24 meses (2018-2024)", uc:"Franciani Rodrigues da Rocha" },
    ],
    posteres:[
      { n:1, area:"Urgência e Emergência", ap:"Manuela Cristine Silva", titulo:"Comunicação na transferência de pacientes de uma unidade de pronto atendimento: percepção de médicos e enfermeiros" },
      { n:2, area:"Cardiologia", ap:"Mara Camily Kammers Cunha", titulo:"Cuidado cardiorrenal-metabólico de adultos com diabetes mellitus na atenção primária à saúde: monitoramento, metas terapêuticas e condutas segundo o risco cardiovascular – coorte retrospectivo" },
      { n:3, area:"Oncologia", ap:"Maria Eduarda Silveira Navarro Lins", titulo:"Câncer de mama em mulheres jovens: perfil clínico-epidemiológico e desfechos de recidiva e sobrevida em uma coorte retrospectiva em um hospital terciário do Alto Vale do Itajaí" },
      { n:4, area:"Ginecologia e Obstetrícia", ap:"Maria Isadora Baptista Pianezzer", titulo:"Massa pélvica fetal complicada por ascite maciça, hidronefrose e polidrâmnio: relato de caso e revisão sistemática da literatura" },
      { n:5, area:"Endocrinologia", ap:"Pedro Henrique Daniel Abreu", titulo:"Alcance de meta de HbA1c conforme terapia antidiabética em adultos com diabetes mellitus na atenção primária à saúde em um município do Alto Vale do Itajaí: coorte retrospectiva" },
    ] },
  "Sex · 27/11": { sci:"16h20–17h20", youtube:"",
    orais:[
      { tc:"TC1", hora:"17h20", area:"Infectologia", ap:"Fernando Lima Nogueira", titulo:"Perfil epidemiológico, clínico, e microbiológico da endocardite infecciosa em um hospital do Alto Vale do Itajaí e proposta de antibioticoterapia empírica: série de casos retrospectiva", uc:"Alinne Petris" },
      { tc:"TC2", hora:"18h00", area:"Infectologia", ap:"Henrique de Moraes Andrade", titulo:"Valor prognóstico de biomarcadores inflamatórios na predição de mortalidade e falha terapêutica na osteomielite vertebral piogênica: uma revisão sistemática e meta-análise", uc:"Alinne Petris" },
      { tc:"TC3", hora:"18h40", area:"Reumatologia", ap:"Manuella Knop dos Passos", titulo:"Pleurite e derrame pleural unilateral como manifestação atípica de granulomatose com poliangiite: relato de caso", uc:"Samantha Cristiane Lopes" },
      { tc:"TC4", hora:"19h20", area:"Otorrinolaringologia", ap:"Maria Luísa Ceolin Xavier da Silveira", titulo:"Duração da profilaxia antibiótica em cirurgia de implante coclear: revisão sistemática e metanálise", uc:"Samantha Cristiane Lopes" },
      { tc:"TC5", hora:"20h00", area:"Pediatria", ap:"Kalessa Pereira Menegusse", titulo:"Análise do perfil clínico-epidemiológico e situação vacinal anti pneumocócica de crianças de 0-10 anos hospitalizadas por pneumonia adquirida na comunidade grave", uc:"Alinne Petris" },
      { tc:"TC6", hora:"20h40", area:"Pediatria", ap:"Victória Gabriela Wetzstein", titulo:"Internações neonatais em unidades de cuidado intermediário e intensivo: perfil epidemiológico e fatores associados", uc:"Alinne Petris" },
      { tc:"TC7", hora:"21h20", area:"Anestesiologia", ap:"Antonella Gubert Verch", titulo:"Anestesia livre de opioides em cirurgia cardíaca com circulação extracorpórea: uma revisão sistemática e meta-análise", uc:"Franciani Rodrigues da Rocha" },
    ],
    posteres:[
      { n:1, area:"Endocrinologia", ap:"Pedro Werner Eger", titulo:"Em adultos com hipertensão, o rastreio universal de hiperaldosteronismo primário comparado ao rastreio seletivo baseado em risco resulta em maior detecção de casos, melhor desfecho cardiovascular e controle pressórico, com aceitável custo-efetividade e impacto na qualidade de vida? Eduardo Beduschi Voelz" },
      { n:2, area:"Infectologia", ap:"Tharik Stache Ribeiro", titulo:"Hepatites B e C em um serviço de referência do Alto Vale do Itajaí, Santa Catarina, Brasil: perfil dos casos, completude dos registros e lacunas na cascata de cuidado" },
      { n:3, area:"Endocrinologia", ap:"Thiago Matheussi Alves", titulo:"Imunoterapias adjuvantes na doença de Graves ativa: revisão sistemática prognóstica da remissão sorológica e clínico-bioquímica" },
      { n:4, area:"Cardiologia", ap:"Thiago Robert Brito de Lima", titulo:"Associação entre níveis séricos de potássio e arritmias ventriculares em pacientes com doença cardiovascular e risco aumentado para eventos arrítmicos: revisão sistemática e metanálise" },
      { n:5, area:"Patologia", ap:"Victor Hugo Tonet", titulo:"Esparganose cutânea humana simulando lesão tumoral de partes moles: relato de caso e revisão sistemática de literatura" },
    ] },
};

/* trabalhoById: resolve nos EXEMPLOS — uso interno/dev. As telas públicas
   resolvem na lista real via useTrabalhos()/trabalhoNaLista (lib.jsx). */
const trabalhoById = (id) => TRABALHOS.find((t) => t.id === id);
const go = (h) => { window.location.hash = h; };

Object.assign(window, { C, AREA_COR, DIAS, TRABALHOS, PROGRAMA, trabalhoById, go });
