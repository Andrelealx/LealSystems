import { usePageMeta } from '../hooks/usePageMeta'
import { CtaBanner } from '../components/sections/CtaBanner'
import { PageHeader } from '../components/sections/PageHeader'
import { PortfolioGrid } from '../components/sections/PortfolioGrid'
import { TestimonialsGrid } from '../components/sections/TestimonialsGrid'
import { TrustStrip } from '../components/sections/TrustStrip'

export function PortfolioPage() {
  usePageMeta(
    'Portfólio de Produtos e Sistemas Digitais',
    'Conheça o portfólio da Leal Systems com produtos SaaS e sistemas B2B entregues para diferentes segmentos de mercado.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Portfólio"
        title="Produtos e soluções que já operam em ambientes reais"
        description="Casos que representam nossa capacidade de construir, lançar e sustentar plataformas digitais em diferentes segmentos e contextos de operação."
        actions={[
          { label: 'Falar com a equipe', to: '/contato' },
          { label: 'Ver serviços', to: '/servicos', variant: 'secondary' },
        ]}
      />

      <TrustStrip />
      <PortfolioGrid />
      <TestimonialsGrid />
      <CtaBanner
        title="Sua operação pode ser o próximo case de sucesso"
        description="Se você precisa de software pronto para escalar, podemos montar um plano técnico de execução alinhado ao seu momento de negócio."
      />
    </>
  )
}
