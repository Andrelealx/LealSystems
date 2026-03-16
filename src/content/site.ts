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
    'Software house brasileira B2B especializada em produtos digitais prontos para uso e desenvolvimento sob encomenda para empresas de diversos segmentos.',
  founded: '2021',
  stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Railway', 'Cloudflare'],
}

export const navigation: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Portfólio', path: '/portfolio' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
]

export const heroStats: StatItem[] = [
  { value: '2 frentes', label: 'produtos próprios e desenvolvimento sob encomenda' },
  { value: 'B2B', label: 'foco em operações, produtividade e escala empresarial' },
  { value: 'End-to-end', label: 'descoberta, build, deploy, monitoramento e evolução contínua' },
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
    segment: 'Turismo e Economia Criativa',
    result: 'Melhor experiência do visitante e centralização da informação turística em um único canal.',
  },
  {
    name: 'Única Chamados',
    tagline: 'Sistema interno de tickets e solicitações',
    description:
      'Gestão de solicitações internas com histórico, prioridades, SLA e acompanhamento por departamento.',
    highlights: [
      'Triagem inteligente por área',
      'Indicadores de atendimento e gargalos',
      'Painel gerencial para times e liderança',
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL'],
    segment: 'Operações Corporativas',
    result: 'Redução de tempo de resposta e maior visibilidade de backlog para gestão operacional.',
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
  'Varejo e e-commerce',
  'Automotivo',
  'Serviços B2B',
  'Educação corporativa',
  'Turismo e hospitalidade',
  'Operações internas e backoffice',
]
