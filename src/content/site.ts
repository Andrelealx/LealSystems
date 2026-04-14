import type {
  FaqItem,
  NavItem,
  ProcessStep,
  ProductItem,
  ServiceItem,
  StatItem,
  TestimonialItem,
  ValueItem,
} from '../types/site'

export const company = {
  name: 'Leal Systems',
  tagline: 'Tecnologia · Confiança · Inovação',
  description:
    'Software house brasileira especializada em produtos digitais, sistemas sob encomenda e soluções com IA para empresas e gestão pública — do MVP ao produto em produção.',
  founded: '2021',
  stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Python', 'Docker', 'Railway', 'OpenCV'],
}

export const navigation: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Portfólio', path: '/portfolio' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
]

export const heroStats: StatItem[] = [
  { value: '13+', label: 'projetos entregues e em produção' },
  { value: 'B2B & Gov', label: 'soluções para empresas, prefeituras e impacto social' },
  { value: 'End-to-end', label: 'descoberta, build, deploy, IA e evolução contínua' },
]

export const values: ValueItem[] = [
  {
    title: 'Tecnologia com propósito',
    description:
      'Cada sprint é orientada a uma meta de negócio: reduzir custo operacional, acelerar vendas ou elevar experiência do usuário.',
  },
  {
    title: 'Confiança na execução',
    description:
      'Processo transparente, alinhamentos recorrentes e entregas incrementais para reduzir risco e aumentar previsibilidade.',
  },
  {
    title: 'Inovação aplicável',
    description:
      'Combinamos stack moderna e boas práticas de engenharia para entregar soluções robustas e prontas para crescer.',
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Produtos SaaS prontos para uso',
    description:
      'Soluções com implantação rápida para equipes que precisam digitalizar processos sem iniciar um projeto do zero.',
    fitFor: 'Empresas que precisam ganhar velocidade de execução no curto prazo.',
    outcomes: ['Redução de time-to-value', 'Menor custo inicial de implementação', 'Escalabilidade com evolução contínua'],
    deliverables: ['Onboarding técnico', 'Treinamento de equipe', 'Suporte e evolução do produto'],
  },
  {
    title: 'Sistemas sob encomenda',
    description:
      'ERPs, portais, intranets e dashboards projetados para processos específicos de cada cliente.',
    fitFor: 'Operações com fluxo complexo e alto nível de particularidade.',
    outcomes: ['Digitalização de processos críticos', 'Controle de dados por área', 'Aumento de produtividade operacional'],
    deliverables: ['Levantamento de requisitos', 'Arquitetura customizada', 'Roadmap de evolução por fases'],
  },
  {
    title: 'Sites institucionais e landing pages',
    description:
      'Presença digital orientada a posicionamento de marca e geração de demanda qualificada.',
    fitFor: 'Empresas que querem aumentar autoridade e conversão online.',
    outcomes: ['Melhor performance de aquisição', 'Maior conversão de visitas em leads', 'Experiência mobile otimizada'],
    deliverables: ['Design responsivo', 'SEO técnico', 'Integração com CRM e analytics'],
  },
  {
    title: 'Plataformas e marketplaces',
    description:
      'Sistemas digitais para conectar compradores, vendedores, parceiros e operações internas.',
    fitFor: 'Modelos de negócio com múltiplos atores e processos transacionais.',
    outcomes: ['Lançamento de novos canais de receita', 'Governança de operação digital', 'Escala por módulos independentes'],
    deliverables: ['Discovery e MVP', 'Arquitetura modular', 'Integração com meios de pagamento e ERP'],
  },
  {
    title: 'Automações e integrações',
    description:
      'Conexão entre sistemas e automação de tarefas repetitivas para eliminar gargalos manuais.',
    fitFor: 'Equipes que perdem tempo com retrabalho e processos desconectados.',
    outcomes: ['Menos erros operacionais', 'Maior produtividade de times', 'Visibilidade ponta a ponta dos fluxos'],
    deliverables: ['Integração via API', 'Orquestração de workflows', 'Logs e alertas de monitoramento'],
  },
  {
    title: 'Infraestrutura, deploy e manutenção',
    description:
      'Publicação segura e operação estável em nuvem, com observabilidade e suporte técnico recorrente.',
    fitFor: 'Empresas que precisam de confiabilidade e evolução sem sobrecarga interna.',
    outcomes: ['Ambiente estável e escalável', 'Redução de incidentes', 'Maior previsibilidade de release'],
    deliverables: ['Configuração CI/CD', 'Hardening de ambientes', 'Suporte corretivo e evolutivo'],
  },
]

export const process: ProcessStep[] = [
  {
    title: 'Diagnóstico e estratégia',
    description: 'Mapeamos objetivos, riscos, restrições técnicas e oportunidades de produto.',
    outputs: ['Escopo inicial', 'Matriz de prioridades', 'Plano de entrega por fases'],
  },
  {
    title: 'Arquitetura e UX',
    description: 'Definimos estrutura de dados, fluxo de navegação e arquitetura de software.',
    outputs: ['Protótipos de alta fidelidade', 'Arquitetura técnica', 'Critérios de qualidade'],
  },
  {
    title: 'Desenvolvimento incremental',
    description: 'Entregamos em ciclos curtos com validação contínua junto ao cliente.',
    outputs: ['Releases parciais', 'Revisões de sprint', 'Roadmap atualizado'],
  },
  {
    title: 'Deploy, operação e evolução',
    description: 'Publicamos com observabilidade e evoluímos a solução com base em dados.',
    outputs: ['Deploy em produção', 'Monitoramento ativo', 'Backlog de melhorias'],
  },
]

export const products: ProductItem[] = [
  {
    name: 'RioFaz Tracker',
    tagline: 'Rastreamento de coleta urbana em tempo real',
    description:
      'Plataforma de monitoramento de rotas de coleta de resíduos com mapa interativo, portal do cidadão e agendamento integrado via ViaCEP.',
    highlights: [
      'Rastreamento GPS ao vivo com atualização a cada 5s',
      'Portal do cidadão com agendamento de coleta por bairro',
      'Modos de visualização: mapa e satélite com geolocalização',
    ],
    stack: ['React', 'Leaflet', 'Node.js', 'ViaCEP API'],
    segment: 'Gestão Pública',
    result: 'Cidadãos acompanham rotas em tempo real e prefeitura reduz chamadas de reclamação por desinformação.',
    link: 'https://snow-goose-667329.hostingersite.com',
    screenshot: '/screenshots/riofaz-tracker.jpg',
  },
  {
    name: 'ELO',
    tagline: 'Sistema integrado para secretarias de segurança pública',
    description:
      'Plataforma 100% web para modernizar a gestão operacional de secretarias municipais: escalas, horas extras, ocorrências e relatórios em um único sistema.',
    highlights: [
      'Gestão de efetivo com escalas visuais e controle de SDR',
      'Registro de ocorrências com protocolo automático',
      'Dashboard executivo com KPIs e autenticação em dois fatores',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Hostinger'],
    segment: 'Segurança Pública',
    result: 'Digitalização completa da operação de secretarias municipais com rastreabilidade e conformidade.',
    link: 'https://saddlebrown-trout-771246.hostingersite.com/apresentacao.php',
    screenshot: '/screenshots/elo.jpg',
  },
  {
    name: 'GoVerde',
    tagline: 'Portal do cidadão para serviços ambientais',
    description:
      'Portal digital para conectar cidadãos a serviços públicos ambientais: solicitações, acompanhamento de demandas e informações sobre sustentabilidade municipal.',
    highlights: [
      'Canal de solicitações ambientais com protocolo',
      'Acompanhamento de demandas em tempo real',
      'Painel administrativo para gestão de ocorrências',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Railway'],
    segment: 'Gestão Pública',
    result: 'Centralização dos serviços ambientais municipais e redução do atendimento presencial.',
    link: 'https://goverdeportal-production.up.railway.app',
    screenshot: '/screenshots/goverde.jpg',
  },
  {
    name: 'Arca',
    tagline: 'Mensageria corporativa com criptografia local',
    description:
      'Plataforma de comunicação no estilo WhatsApp com servidor autocriptografado instalado na infraestrutura do próprio cliente — zero dependência de nuvem de terceiros.',
    highlights: [
      'Criptografia ponta a ponta com chaves locais',
      'Servidor autoconfigurável na infraestrutura do cliente',
      'Interface familiar estilo chat com grupos e arquivos',
    ],
    stack: ['Node.js', 'WebSocket', 'TypeScript', 'Docker'],
    segment: 'Comunicação Corporativa',
    result: 'Empresas e órgãos públicos com soberania total sobre suas comunicações internas sem dependência de provedores externos.',
  },
  {
    name: 'IA Financeira',
    tagline: 'Análise e insights financeiros com inteligência artificial',
    description:
      'Sistema de IA para análise de dados financeiros, projeção de fluxo de caixa, identificação de anomalias e geração de relatórios automatizados para gestores.',
    highlights: [
      'Análise preditiva de fluxo de caixa',
      'Detecção automática de anomalias e padrões',
      'Relatórios executivos gerados por IA com linguagem natural',
    ],
    stack: ['Python', 'React', 'Node.js', 'PostgreSQL'],
    segment: 'Finanças e IA',
    result: 'Redução do tempo de análise financeira e antecipação de riscos operacionais com maior precisão.',
  },
  {
    name: 'FacePass',
    tagline: 'Controle de acesso por reconhecimento facial',
    description:
      'Sistema de IA para identificação e controle de entrada em eventos, festas e carnavais — reconhecimento em tempo real com gestão de lista de presença e alertas de segurança.',
    highlights: [
      'Reconhecimento facial em tempo real com câmeras comuns',
      'Lista de presença automatizada e controle de reentrada',
      'Alertas de segurança para pessoas em lista de restrição',
    ],
    stack: ['Python', 'OpenCV', 'React', 'Node.js', 'Docker'],
    segment: 'Eventos e Segurança',
    result: 'Controle de acesso ágil em eventos de grande público com rastreabilidade total de entrada e saída.',
    link: 'https://tess-face-security.up.railway.app',
    screenshot: '/screenshots/facepass.jpg',
  },
  {
    name: 'VitrineAuto',
    tagline: 'SaaS white-label para concessionárias',
    description:
      'Plataforma para gestão de estoque, showroom digital e captação de leads com personalização por rede de lojas.',
    highlights: [
      'Gestão de veículos com atualização em tempo real',
      'Showroom digital personalizável por marca',
      'Pipeline de leads com acompanhamento comercial',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL'],
    segment: 'Automotivo',
    result: 'Padronização da operação digital e aumento da qualidade dos leads comerciais.',
    link: 'https://autovitrine.com',
  },
  {
    name: 'ExploreGuapi',
    tagline: 'Plataforma de turismo interativa',
    description:
      'Experiência digital com mapa interativo de pontos turísticos para visitantes, guias e operadores locais.',
    highlights: [
      'Mapa com React Leaflet e geolocalização',
      'Curadoria de atrações por categoria',
      'Base de conteúdo preparada para expansão regional',
    ],
    stack: ['Next.js 14', 'React', 'Leaflet'],
    segment: 'Turismo',
    result: 'Melhor experiência do visitante e centralização da informação turística em um único canal.',
  },
  {
    name: 'Única Chamados',
    tagline: 'Sistema de tickets para gestão pública municipal',
    description:
      'Plataforma de chamados para prefeituras com 24+ departamentos, triagem por urgência, histórico completo e painel gerencial para acompanhamento da equipe.',
    highlights: [
      '24+ departamentos municipais integrados em um único sistema',
      'Triagem por urgência com anexo de arquivos',
      'Painel de consulta de tickets para cidadãos',
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL'],
    segment: 'Gestão Pública',
    result: 'Digitalização do atendimento municipal com rastreabilidade ponta a ponta e redução de tempo de resposta.',
    link: 'https://suporteunica.com',
    screenshot: '/screenshots/unica-chamados.jpg',
  },
  {
    name: 'ControlaFácil',
    tagline: 'Gestão documental para prefeituras',
    description:
      'Sistema web de organização e controle de documentos municipais desenvolvido para a Prefeitura de Guapimirim — centraliza, rastreia e facilita o acesso à documentação administrativa.',
    highlights: [
      'Controle centralizado de documentos por setor',
      'Rastreabilidade e histórico de alterações',
      'Acesso via navegador sem instalação',
    ],
    stack: ['React', 'Vite', 'Node.js'],
    segment: 'Gestão Pública',
    result: 'Digitalização da gestão documental da Prefeitura de Guapimirim com controle e acesso facilitado.',
    link: 'https://controlafacil.cloud',
    screenshot: '/screenshots/controla-facil.jpg',
  },
  {
    name: 'GM Personal',
    tagline: 'Plataforma educacional de gestão para professores e alunos',
    description:
      'Sistema EdTech com PWA para gestão educacional: acesso por alunos e professores, controle de turmas, acompanhamento de progresso e painel administrativo institucional.',
    highlights: [
      'PWA instalável com suporte offline',
      'Acesso seguro por aluno, professor e gestor',
      'Interface responsiva com design de alta conversão',
    ],
    stack: ['React', 'PWA', 'Node.js', 'Hostinger'],
    segment: 'Educação',
    result: 'Plataforma EdTech ativa com acesso controlado para estudantes e professores de instituições parceiras.',
    link: 'https://gmpersonal.com.br',
    screenshot: '/screenshots/gm-personal.jpg',
  },
  {
    name: 'Golden Express',
    tagline: 'Site institucional para empresa de segurança e facilities',
    description:
      'Presença digital completa para o Grupo Golden Express, empresa de vigilância patrimonial e facilities com mais de 150 clientes no Rio de Janeiro.',
    highlights: [
      'Apresentação de serviços com foco em conversão',
      'Design responsivo orientado à geração de leads',
      'Integração com WhatsApp e canais de contato direto',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Hostinger'],
    segment: 'Serviços B2B',
    result: 'Empresa com 150+ clientes ganhou presença digital profissional e canal direto de captação de novos contratos.',
    link: 'https://grupogoldenexpress.com.br',
    screenshot: '/screenshots/golden-express.jpg',
  },
  {
    name: 'Força do Saber',
    tagline: 'Plataforma de impacto social educacional',
    description:
      'Site institucional e plataforma digital para o Projeto Força do Saber, iniciativa social em Guapimirim/RJ focada em acesso à educação, bolsas e orientação para estudantes em vulnerabilidade.',
    highlights: [
      '248 bolsas conquistadas pelos alunos apoiados',
      'Canal de parcerias com organizações e apoiadores',
      'Histórias de sucesso e métricas de impacto em destaque',
    ],
    stack: ['React', 'Node.js', 'Hostinger'],
    segment: 'Impacto Social',
    result: 'Projeto com 248 bolsas conquistadas e 22 formados ganhou visibilidade digital e canal de captação de parceiros.',
    link: 'https://xn--foradosaber-o9a.com.br',
    screenshot: '/screenshots/forca-do-saber.jpg',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'A Leal Systems estruturou nosso sistema interno em ciclos curtos e trouxe visibilidade real do processo de atendimento.',
    author: 'Mariana Costa',
    role: 'Gerente de Operações',
    company: 'Grupo Uniflex',
  },
  {
    quote:
      'Conseguimos lançar nosso produto digital com segurança e velocidade. A equipe entrega com clareza técnica e visão de negócio.',
    author: 'Rafael Mendes',
    role: 'Diretor de Produto',
    company: 'Prime Retail Tech',
  },
  {
    quote:
      'Além do desenvolvimento, recebemos suporte completo de infraestrutura e deploy. Virou uma parceria estratégica.',
    author: 'Lívia Fernandes',
    role: 'Head de Tecnologia',
    company: 'HubLog Brasil',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'A Leal Systems desenvolve apenas projetos sob encomenda?',
    answer:
      'Não. Atuamos em duas frentes: produtos SaaS prontos para uso e desenvolvimento customizado para necessidades específicas.',
  },
  {
    question: 'Vocês atendem empresas de qualquer segmento?',
    answer:
      'Sim. Nosso foco é B2B e temos experiência em operações comerciais, serviços, indústria, turismo e gestão interna corporativa.',
  },
  {
    question: 'A equipe também cuida de infraestrutura e deploy?',
    answer:
      'Sim. Entregamos desde arquitetura e desenvolvimento até deploy, observabilidade, manutenção e evolução contínua.',
  },
  {
    question: 'Como funciona o início de um projeto sob encomenda?',
    answer:
      'Começamos com diagnóstico técnico e de negócio, definimos escopo inicial por fases e seguimos em entregas incrementais com validação contínua.',
  },
]

export const industries = [
  'Gestão Pública Municipal',
  'Segurança Pública',
  'Educação e EdTech',
  'Impacto Social',
  'Automotivo',
  'Turismo e Hospitalidade',
  'Comunicação Corporativa',
  'Eventos e Entretenimento',
  'Finanças e IA',
  'Serviços B2B',
]
