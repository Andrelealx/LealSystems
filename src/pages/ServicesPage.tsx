import { usePageMeta } from '../hooks/usePageMeta'
import { CtaBanner } from '../components/sections/CtaBanner'
import { FaqList } from '../components/sections/FaqList'
import { PageHeader } from '../components/sections/PageHeader'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { ServicesGrid } from '../components/sections/ServicesGrid'

export function ServicesPage() {
  usePageMeta(
    'Serviços de Desenvolvimento de Software B2B',
    'Conheça os serviços da Leal Systems: SaaS, sistemas sob encomenda, automações, integrações, plataformas digitais e suporte de infraestrutura.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Soluções técnicas para cada fase da operação digital"
        description="Atuamos desde projetos de baixa complexidade até plataformas robustas com múltiplos fluxos de negócio, integração e escala."
        actions={[
          { label: 'Solicitar proposta', to: '/contato' },
          { label: 'Ver portfólio', to: '/portfolio', variant: 'secondary' },
        ]}
      />

      <ServicesGrid />
      <ProcessTimeline />
      <FaqList />
      <CtaBanner
        title="Quer desenhar o escopo ideal do seu projeto?"
        description="Começamos com um diagnóstico técnico e de negócio para definir o modelo de entrega mais eficiente para sua empresa."
      />
    </>
  )
}
