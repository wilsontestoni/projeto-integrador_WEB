// Arquivo para adicionar os cursos no bd :)
import Courses from "../../models/Courses.js";
import User from "../../models/User.js";


async function seedAdminUser() {
  const adminUser = await Courses.create({
    name: "Administrador da silva",
    email: "administradorsilva@gmail.com",
    password: "12341234",
    user_type: "administrador"
  });
  console.log("Admin user added:", adminUser.name);
}

seedAdminUser();


async function seed16() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Agente de Portaria",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Operador%20de%20Caixa",
    image_url: "/images/agente_portaria.jpg",
    course_description:
      "O agente de portaria, é um profissional que não exerce a função de vigilante armado, porém, fica sempre atento na portaria. ?? também um recepcionista. Anota, informa e orienta.",
    course_duration: "15",
    course_class1: "Introdução",
    course_class2: "Procedimentos",
    course_class3: "Criminalidade",
  });
  console.log("Course added:", course.course_name);
}

seed16();

async function seed4() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Atendente de Farmácia",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Atendente%20de%20Farm%C3%A1cia",
    image_url: "/images/atendente_farmacia.jpg",
    course_description:
      "O atendente de farmácia ou balconista é responsável pelo primeiro contato do cliente com o ponto de venda (PDV).",
    course_duration: "20",
    course_class1: "Lugar",
    course_class2: "Equipes de uma farmácia",
    course_class3: "Preparação de um balconista de farmácia",
  });
  console.log("Course added:", course.course_name);
}

seed4();

async function seed5() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Técnicas de Vendas",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=T%C3%A9cnicas%20de%20Vendas",
    image_url: "/images/tecnica_vendas.jpg",
    course_description:
      "Vendas são atividades relacionadas à venda ou ao número de bens ou serviços vendidos.",
    course_duration: "20",
    course_class1: "Por que vender?",
    course_class2: "Perfil de sucesso do profissional de vendas",
    course_class3: "O que o seu cliente procura?",
  });
  console.log("Course added:", course.course_name);
}

seed5();

async function seed6() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Contabilidade",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Contabilidade",
    image_url: "/images/contabilidade.jpg",
    course_description:
      "Contabilidade é uma ciência aplicada, de natureza econômica.",
    course_duration: "22",
    course_class1: "O que é e para que serve?",
    course_class2: "Princípios contábeis Parte 1",
    course_class3: "Princípios contábeis Parte 2",
  });
  console.log("Course added:", course.course_name);
}

seed6();

async function seed7() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Empreendedorismo",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Empreendedorismo",
    image_url: "/images/empreendedorismo.jpg",
    course_description:
      "Empreendedorismo é o processo de iniciativa de implementar novos negócios.",
    course_duration: "15",
    course_class1: "Noções de empreendedorismo",
    course_class2: "Por que empreender",
    course_class3: "Tipos de empreendedorismo",
  });
  console.log("Course added:", course.course_name);
}

seed7();

async function seed8() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Departamento Pessoal",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Departamento%20Pessoal",
    image_url: "/images/departamento_pessoal.jpg",
    course_description:
      "Departamento Pessoal é uma área especializada na gestão dos funcionários da empresa",
    course_duration: "20",
    course_class1: "Conceito de trabalho",
    course_class2: "Contratos de trabalho",
    course_class3: "Jornada de trabalho",
  });
  console.log("Course added:", course.course_name);
}

seed8();

async function seed9() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Marketing Digital",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Marketing%20Digital",
    image_url: "/images/marketing_digital.jpg",
    course_description:
      "Marketing digital são ações de comunicação que as empresas podem utilizar por meio da internet.",
    course_duration: "20",
    course_class1: "Introdução",
    course_class2: "Nicho",
    course_class3: "Funil",
  });
  console.log("Course added:", course.course_name);
}

seed9();

async function seed10() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Cuidador de Idoso",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Cuidador%20de%20Idoso",
    image_url: "/images/cuidador_idoso.jpg",
    course_description:
      "Um cuidador de idoso é extremamente importante para as famílias que necessitam de um cuidado especial.",
    course_duration: "20",
    course_class1: "Processo de envelhecimento",
    course_class2: "Alterações fisiológicas que acometem o idoso",
    course_class3: "Saúde na terceira Idade",
  });
  console.log("Course added:", course.course_name);
}

seed10();

async function seed11() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Gestão em RH",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Cuidador%20de%20Idoso",
    image_url: "/images/gestao_rh.jpg",
    course_description:
      "Gestão de Recursos Humanos forma profissionais capazes de executar as diversas rotinas do departamento de pessoal e realizar ações.",
    course_duration: "20",
    course_class1: "Conceito de Estratégia em RH",
    course_class2: "RH como vantagem competitiva",
    course_class3: "RH convencional vs RH estratégico",
  });
  console.log("Course added:", course.course_name);
}

seed11();

async function seed12() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Instagram para Vendas",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Instagram%20para%20Vendas",
    image_url: "/images/instagram_vendas.jpg",
    course_description:
      "Instagram é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários.",
    course_duration: "4",
    course_class1: "Tipos de perfis",
    course_class2: "Criando um perfil profissional",
    course_class3: "Explorando recursos",
  });
  console.log("Course added:", course.course_name);
}

seed12();

async function seed13() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Telemarketing",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Telemarketing",
    image_url: "/images/telemarketing.jpg",
    course_description:
      "O telemarketing ou telemercadologia é o termo que designa a promoção de vendas.",
    course_duration: "18",
    course_class1: "Histórico, conceito e aplicação do telemarketing",
    course_class2: "O que é um Call Center",
    course_class3: "Diferenças entre o telemarketing ativo e receptivo",
  });
  console.log("Course added:", course.course_name);
}

seed13();

async function seed14() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Mídias sociais",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=M%C3%ADdias%20sociais",
    image_url: "/images/midias_sociais.jpg",
    course_description:
      "Aprenda a usar as mídias sociais a seu favor e venda muito na internet.",
    course_duration: "4",
    course_class1: "Introdução",
    course_class2: "Psicologia do Marketing Pessoal",
    course_class3: "Como você pode Contribuir",
  });
  console.log("Course added:", course.course_name);
}

seed14();

async function seed15() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Operador de Caixa",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Operador%20de%20Caixa",
    image_url: "/images/operador_caixa.jpg",
    course_description:
      "Quanto ao Operador de caixa ou recepcionista de caixa é o profissional cuja função é registrar mercadorias em um ponto de venda e receber o pagamento do cliente.",
    course_duration: "30",
    course_class1: "Introdução",
    course_class2: "Principais programas usados",
    course_class3: "Equipamentos utilizados",
  });
  console.log("Course added:", course.course_name);
}

seed15();

async function seed2() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Curso Preparatório Banco do Brasil",
    course_link:
      "https://educanexus.com/loja_virtual/vercombo.php?curso=Curso%20Preparat%C3%B3rio%20Banco%20do%20Brasil",
    image_url: "/images/administracao_mercado_trabalho.jpg",
    course_description: "",
    course_duration: "400",
    course_class1: "Português",
    course_class2: "Matemática para Enem",
    course_class3: "Interactive English",
  });
  console.log("Course added:", course.course_name);
}

seed2();

async function seed3() {
  const course = await Courses.create({
    course_category: "administrativos",
    course_name: "Elaboração de Currículo",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Elabora%C3%A7%C3%A3o%20de%20Curr%C3%ADculo",
    image_url: "/images/elaboracao_de_curriculo.jpg",
    course_description:
      "Aprenda de forma fácil a como elaborar seu currículo e aumente suas chances de ingressar no mercado de trabalho.",
    course_duration: "3",
    course_class1: "O que é",
    course_class2: "Importância",
    course_class3: "Marketing pessoal",
  });
  console.log("Course added:", course.course_name);
}

seed3();

// FIM DO ADMINISTRATIVO

// INICIO AREA DA EDUCAÇÃO E SAUDE

async function seed17() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Deficiência Física e suas Características",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Defici%C3%AAncia%20F%C3%ADsica%20e%20suas%20Caracter%C3%ADsticas",
    image_url: "/images/deficiencia_fisica.jpg",
    course_description:
      "Aprenda sobre Deficiência Física e suas Características e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1: "O papel primário do sistema nervoso",
    course_class2:
      "Paralisia cerebral, hemiplegias, lesão medular, amputações, febre reumática",
    course_class3: "Plano nacional de educação",
  });
  console.log("Course added:", course.course_name);
}

seed17();

async function seed18() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Atendimento Educacional Especializado",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Atendimento%20Educacional%20Especializado",
    image_url: "/images/atendimento_educacional.jpg",
    course_description:
      "Aprenda sobre Atendimento Educacional Especializado e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1:
      "Atendimento Educacional Especializado: a verdade do AEE na escola",
    course_class2: "O que é AEE e quais são seus objetivos?",
    course_class3: "A quem se destina o AEE?",
  });
  console.log("Course added:", course.course_name);
}

seed18();

async function seed19() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Deficiência auditiva e surdez",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Defici%C3%AAncia%20auditiva%20e%20surdez",
    image_url: "/images/deficiencia_auditiva.jpg",
    course_description:
      "Aprenda sobre Deficiência auditiva e surdez e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1: "Introdução",
    course_class2: "Deficiência auditiva",
    course_class3: "Inclusão do aluno com surdez",
  });
  console.log("Course added:", course.course_name);
}

seed19();

async function seed20() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Literatura e Linguagem Infantil",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Literatura%20e%20Linguagem%20Infantil",
    image_url: "/images/literatura_e_linguagen_infantil.jpg",
    course_description:
      "Aprenda sobre Literatura e Linguagem Infantil e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1: "Conceito de Literatura",
    course_class2: "Linguagem Literária",
    course_class3: "Denotação x Conotação",
  });
  console.log("Course added:", course.course_name);
}

seed20();

async function seed22() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Interprete de Línguas de Sinais",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Interprete%20de%20L%C3%ADnguas%20de%20Sinais",
    image_url: "/images/interprete_linguas.jpg",
    course_description:
      "Aprenda sobre Interprete de Línguas de Sinais e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1: "Introdução",
    course_class2: "Entendendo a Surdez",
    course_class3: "Os números da Surdez",
  });
  console.log("Course added:", course.course_name);
}

seed22();

async function seed23() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Educação Ambiental",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Educa%C3%A7%C3%A3o%20Ambiental",
    image_url: "/images/educacao_ambiental.jpg",
    course_description:
      "Aprenda sobre Educação Ambiental e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1: "Introdução",
    course_class2: "Marcos Institucionais",
    course_class3: "A educação ambiental nas instituições de ensino",
  });
  console.log("Course added:", course.course_name);
}

seed23();

async function seed24() {
  const course = await Courses.create({
    course_category: "educacao-e-saude",
    course_name: "Ludicidade e psicomotricidade e o Imaginário infantil",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Ludicidade%20e%20psicomotricidade%20e%20o%20Imagin%C3%A1rio%20infantil",
    image_url: "/images/lucidade.jpg",
    course_description:
      "Aprenda sobre Ludicidade e psicomotricidade e o Imaginário infantil e tenha um certificado reconhecido nacionalmente com carga horária de 120 horas para atividades complementares na faculdade ou emprego, melhorar seu currículo e adquirir mais conhecimento na área da educação.",
    course_duration: "120",
    course_class1: "A ludicidade no processo ensino-aprendizagem",
    course_class2: "Ludicidade e psicomotricidade",
    course_class3: "O imaginário Infantil",
  });
  console.log("Course added:", course.course_name);
}

seed24();

//FIM DA EDUCAÇÃO E SAUDE

//INICIO DIVERSAS AREAS

// async function seed25() {
//   const course = await Courses.create({
//     course_category: 'diversos',
//     course_name: 'Administração Mercado de trabalho',
//     course_link: 'https://educanexus.com/loja_virtual/vercombo.php?curso=%20Administra%C3%A7%C3%A3o%20Mercado%20de%20trabalho',
//     image_url: '/images/administracao_mercado.jpg',
//     course_description: '',
//     course_duration: '80',
//     course_class1: 'O que é e para que serve',
//     course_class2: 'Papéis administrativos',
//     course_class3: 'Eficiência e eficácia',
//   });
//   console.log('Course added:', course.course_name);
// }

// seed25();

async function seed26() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Massagem Modeladora",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Massagem%20Modeladora",
    image_url: "/images/massagem_modeladora.jpg",
    course_description:
      "A massagem modeladora é uma massagem feita com movimentos mais fortes e profundos, com o intuito de atingir camadas mais profundas da pele.",
    course_duration: "20",
    course_class1: "O que é massagem modeladora?",
    course_class2: "Fundamentos da massagem modeladora",
    course_class3: "Massagem modeladora e suas aplicações",
  });
  console.log("Course added:", course.course_name);
}

seed26();

async function seed27() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Auxiliar de necrópsia",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Auxiliar%20de%20necr%C3%B3psia",
    image_url: "/images/auxiliar_necropsia.jpg",
    course_description:
      "Auxiliar de necropsia ou necropsista no Brasil, é um profissional com formação de nível fundamental, que presta serviço na cooperação em uma autópsia ou necropsia, contribuindo na investigação da causa mortis de uma pessoa",
    course_duration: "20",
    course_class1: "Introdução e breve histórico das ciências médico-legais",
    course_class2: "Antropologia Forense",
    course_class3: "Perícia Médico-legal",
  });
  console.log("Course added:", course.course_name);
}

seed27();

async function seed28() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Socorrista APH",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Socorrista%20APH",
    image_url: "/images/socorrista_aph.jpg",
    course_description:
      "Um socorrista é uma pessoa que resgata algo de dano ou perigo. Eles são treinados em resgate técnico, resgate de mergulhadores, resgate de montanha, resgate de extração ou / e combate técnico avançado a incêndios.",
    course_duration: "24",
    course_class1: "Abertura do curso",
    course_class2: "O que faz um socorrista",
    course_class3: "Urgência ou Emergência",
  });
  console.log("Course added:", course.course_name);
}

seed28();

async function seed29() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Atualização em Radiologia",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Atualiza%C3%A7%C3%A3o%20em%20Radiologia",
    image_url: "/images/atualizacao_radiologia.jpg",
    course_description:
      "Radiologia é o ramo ou especialidade da medicina que utiliza as radiações para a realização de diagnósticos, controle e tratamento de doenças. Venha se qualificar conosco e tenha um certificado válido em todo o Brasil.",
    course_duration: "40",
    course_class1: "Introdução a Radiologia",
    course_class2: "História da Radiologia no Brasil",
    course_class3: "Aplicações da Radiação",
  });
  console.log("Course added:", course.course_name);
}

seed29();

async function seed30() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Frentista",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Frentista",
    image_url: "/images/frentista.jpg",
    course_description:
      "Seja um profissional preparado, exerça a profissão de frentista e destaque-se no mercado de trabalho.",
    course_duration: "40",
    course_class1: "Introdução",
    course_class2: "Conhecendo a profissão a fundo",
    course_class3: "Equipamentos e Instrumentos de trabalho",
  });
  console.log("Course added:", course.course_name);
}

seed30();

async function seed31() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Eletricista",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Eletricista",
    image_url: "/images/eletricista.jpg",
    course_description:
      "Venha se qualificar e ser um Eletricista profissional e qualificado para o mercado de trabalho, nosso curso conta com suporte ao aluno, apostila e muito mais.",
    course_duration: "60",
    course_class1: "Apresentação do Curso",
    course_class2: "Normas de segurança Parte 1",
    course_class3: "Normas de segurança Parte 2",
  });
  console.log("Course added:", course.course_name);
}

seed31();

async function seed32() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Auxiliar de Veterinário",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Auxiliar%20de%20Veterin%C3%A1rio",
    image_url: "/images/auxiliar_veterinario.jpg",
    course_description:
      "Auxiliar na coleta de material para exames clínicos, portanto, primeiros socorros, procedimentos de acesso intravenoso, intubação, etc. Seja um profissional capacitado para exercer essa profissão.",
    course_duration: "80",
    course_class1: "Introdução",
    course_class2: "Atuação do auxiliar de veterinária",
    course_class3: "Origem dos cães",
  });
  console.log("Course added:", course.course_name);
}

seed32();

async function seed33() {
  const course = await Courses.create({
    course_category: "diversos",
    course_name: "Reciclagem de Empilhadeira",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Reciclagem%20de%20Empilhadeira",
    image_url: "/images/reciclagem.jpg",
    course_description:
      "Capacitar os alunos como operadores de empilhadeira para que possam desempenhar a função dentro das empresas.",
    course_duration: "30",
    course_class1: "Segurança na operação da empilhadeira",
    course_class2: "NR 11",
    course_class3: "Componentes da Empilhadeira",
  });
  console.log("Course added:", course.course_name);
}

seed33();

//FIM DIVERSOS

//INICIO IDIOMAS

async function seed34() {
  const course = await Courses.create({
    course_category: "idiomas",
    course_name: "Inglês do Zero a Fluência",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Ingl%C3%AAs%20do%20Zero%20a%20Flu%C3%AAncia",
    image_url: "/images/ingles.jpg",
    course_description:
      "Aprender a falar um segundo idioma é fundamental nos dias de hoje, tanto para se manter empregado quanto para buscar um novo emprego.",
    course_duration: "100",
    course_class1: "Método - Módulo Inicial",
    course_class2: "Treinando a sua pronúncia- Módulo Inicial",
    course_class3: "Assuntos importantes- Módulo Inicial",
  });
  console.log("Course added:", course.course_name);
}

seed34();

async function seed35() {
  const course = await Courses.create({
    course_category: "idiomas",
    course_name: "Libras",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Libras",
    image_url: "/images/libras.jpg",
    course_description:
      "A língua brasileira de sinais é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão.",
    course_duration: "50",
    course_class1: "Introdução e Alfabeto",
    course_class2: "Cultura Surda",
    course_class3: "Numerais",
  });
  console.log("Course added:", course.course_name);
}

seed35();

//FIM IDIOMAS

//INICIO INFORMATICA E TECNOLOGIA

async function seed36() {
  const course = await Courses.create({
    course_category: "informatica",
    course_name: "PhotoShop CC",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=PhotoShop%20CC",
    image_url: "/images/photoshop.jpg",
    course_description:
      "Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe.",
    course_duration: "22",
    course_class1: "O que é",
    course_class2: "Baixando o photoshop",
    course_class3: "Interface",
  });
  console.log("Course added:", course.course_name);
}

seed36();

async function seed37() {
  const course = await Courses.create({
    course_category: "informatica",
    course_name: "JavaScript",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=JavaScript",
    image_url: "/images/js.jpg",
    course_description:
      "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90.",
    course_duration: "39",
    course_class1: "O que é Javascript",
    course_class2: "Instalando as ferramentas",
    course_class3: "Primeiros comandos em JS",
  });
  console.log("Course added:", course.course_name);
}

seed37();

async function seed38() {
  const course = await Courses.create({
    course_category: "informatica",
    course_name: "Illustrator CS6",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Illustrator%20CS6",
    image_url: "/images/illustrator.jpg",
    course_description:
      "Adobe Illustrator é um editor de imagens vetoriais desenvolvido e comercializado pela Adobe Systems.",
    course_duration: "6",
    course_class1: "Introdução ao Curso de Illustrator 2022",
    course_class2: "Criando um documento",
    course_class3: "Entendendo o Artbord",
  });
  console.log("Course added:", course.course_name);
}

seed38();

async function seed39() {
  const course = await Courses.create({
    course_category: "informatica",
    course_name: "Criação de App Android",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Cria%C3%A7%C3%A3o%20de%20App%20Android",
    image_url: "/images/criacao_app.jpg",
    course_description:
      "Aprenda a criar aplicativos profissionais e ganhe muito dinheiro sem sair de casa com nosso curso de app.",
    course_duration: "19",
    course_class1: "Action bar",
    course_class2: "Bottom bar",
    course_class3: "Navegação interna",
  });
  console.log("Course added:", course.course_name);
}

seed39();

async function seed40() {
  const course = await Courses.create({
    course_category: "informatica",
    course_name: "Montagem e Manutenção de PC",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Montagem%20e%20Manuten%C3%A7%C3%A3o%20de%20PC",
    image_url: "/images/montagem_manutencao.jpg",
    course_description:
      "Aprenda tudo sobre a parte interna do computador com aulas de qualidade feitas por profissionais.",
    course_duration: "19",
    course_class1: "Introdução",
    course_class2: "Hardware e Software",
    course_class3: "Gabinete",
  });
  console.log("Course added:", course.course_name);
}

seed40();

async function seed41() {
  const course = await Courses.create({
    course_category: "informatica",
    course_name: "Linux",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Linux",
    image_url: "/images/linux.jpg",
    course_description:
      "Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux.",
    course_duration: "3",
    course_class1: "Software e Software Livre",
    course_class2: "Sistemas Operacionais",
    course_class3: "O que é Linux?",
  });
  console.log("Course added:", course.course_name);
}

seed41();

//FIM DE INFORMATICA

//INICIO PREPARATORIOS

async function seed42() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Técnicas de Redação",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=T%C3%A9cnicas%20de%20Reda%C3%A7%C3%A3o",
    image_url: "/images/tecnica_redacao.jpg",
    course_description:
      "Aprenda a como criar redação de uma vez por todas, esse curso serve para Enem e qualquer tipo de concurso.",
    course_duration: "30",
    course_class1: "Introdução",
    course_class2: "Interpretação de texto",
    course_class3: "Dicas para não fugir do tema",
  });
  console.log("Course added:", course.course_name);
}

seed42();

async function seed43() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Matemática para Enem",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Matem%C3%A1tica%20para%20Enem",
    image_url: "/images/matematica_enem.jpg",
    course_description:
      "Aprenda matemática de uma vez por todas, e se passe em qualquer concurso público.",
    course_duration: "45",
    course_class1:
      "Soma, Subtração, Multiplicação e Divisão | Matemática Básica",
    course_class2: "MMC e MDC | Matemática Básica",
    course_class3: "Frações | Matemática Básica",
  });
  console.log("Course added:", course.course_name);
}

seed43();

async function seed44() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "História",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Hist%C3%B3ria",
    image_url: "/images/historia.jpg",
    course_description:
      "Relembre a história e tire nota máxima no Enem e Concursos público.",
    course_duration: "80",
    course_class1: "Grécia Antiga parte 1",
    course_class2: "Grécia Antiga parte 2",
    course_class3: "Grécia Antiga parte 3",
  });
  console.log("Course added:", course.course_name);
}

seed44();

async function seed45() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Geografia",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Geografia",
    image_url: "/images/geografia.jpg",
    course_description:
      "Prepara-se para o Enem e gabarite a matéria de geografia com nosso curso preparatório de geografia para Enem e concursos públicos.",
    course_duration: "70",
    course_class1: "População - parte 1",
    course_class2: "População - parte 2",
    course_class3: "População - parte 3",
  });
  console.log("Course added:", course.course_name);
}

seed45();

async function seed46() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Biologia",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Biologia",
    image_url: "/images/biologia.jpg",
    course_description:
      "Biologia é a ciência que estuda a vida e os organismos vivos. A biologia está dividida em vários campos especializados que abrangem a morfologia, fisiologia, anatomia, comportamento, origem, evolução e distribuição da matéria viva, além dos processos vitais e das relações entre os seres vivos.",
    course_duration: "40",
    course_class1: "Organização dos seres vivos",
    course_class2: "Quadro de punnett",
    course_class3: "Mutações",
  });
  console.log("Course added:", course.course_name);
}

seed46();

async function seed47() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Física",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=F%C3%ADsica",
    image_url: "/images/fisica.jpg",
    course_description:
      "Física é a ciência que estuda a natureza e seus fenômenos em seus aspectos mais gerais. Analisa suas relações e propriedades, além de descrever e explicar a maior parte de suas consequências.",
    course_duration: "45",
    course_class1: "Unidade, Medidas e conversões e grandezas",
    course_class2: "Ordem de grandeza",
    course_class3: "Grandeza escalares",
  });
  console.log("Course added:", course.course_name);
}

seed47();

async function seed48() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Português",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Portugu%C3%AAs",
    image_url: "/images/portugues.jpg",
    course_description:
      "Tire nota máxima no seu concurso, aprenda português de forma fácil e rápida.",
    course_duration: "40",
    course_class1: "Fonética I",
    course_class2: "Fonética II",
    course_class3: "Fonética III",
  });
  console.log("Course added:", course.course_name);
}

seed48();

async function seed49() {
  const course = await Courses.create({
    course_category: "preparatorios",
    course_name: "Química",
    course_link:
      "https://educanexus.com/loja_virtual/vercursos.php?curso=Qu%C3%ADmica",
    image_url: "/images/quimica.jpg",
    course_description:
      "Tire nota máxima em qualquer concurso, aprenda química hoje mesmo.",
    course_duration: "55",
    course_class1: "Introdução",
    course_class2: "Geometria molecular",
    course_class3: "Polaridade (lig. covalentes)",
  });
  console.log("Course added:", course.course_name);
}

seed49();
