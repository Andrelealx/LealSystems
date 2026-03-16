import { company, heroStats } from '../content/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { Container } from '../components/Container'
import { CtaBanner } from '../components/sections/CtaBanner'
import { PageHeader } from '../components/sections/PageHeader'
import { PortfolioGrid } from '../components/sections/PortfolioGrid'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { TestimonialsGrid } from '../components/sections/TestimonialsGrid'
import { TrustStrip } from '../components/sections/TrustStrip'

export function HomePage() {
  usePageMeta(
    'Software House B2B para Produtos Digitais e Sistemas Sob Medida',
    'A Leal Systems desenvolve produtos SaaS e sistemas sob encomenda para empresas que buscam escala, eficiência operacional e tecnologia confiável.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Início"
        title="Produtos digitais para empresas que precisam de tecnologia com resultado"
        description="A Leal Systems atua em duas frentes: produtos SaaS prontos para operação e desenvolvimento sob encomenda para empresas com desafios específicos de negócio."
        actions={[
          { label: 'Ver serviços', to: '/servicos' },
          { label: 'Solicitar proposta', to: '/contato', variant: 'secondary' },
        ]}
      />

      <section className="pb-14 sm:pb-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="reveal-up rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-white/5">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                Modelo de atuação
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950 dark:text-white">
                Tecnologia pensada para operação real
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {company.name} combina visão de produto, engenharia e infraestrutura para entregar software confiável, com
                previsibilidade de roadmap e evolução contínua.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/40">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Produtos prontos
                  </p>
                  <p className="mt-2 font-body text-sm text-slate-700 dark:text-slate-200">
                    SaaS com implantação rápida para acelerar operação e ganho de eficiência.
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/40">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Sob encomenda
                  </p>
                  <p className="mt-2 font-body text-sm text-slate-700 dark:text-slate-200">
                    Sistemas customizados para processos críticos e necessidades específicas de negócio.
                  </p>
                </article>
              </div>
            </article>

            <article
              className="reveal-up rounded-3xl border border-brand-100 bg-gradient-to-b from-brand-50 via-white to-white p-6 shadow-soft dark:border-white/10 dark:from-brand-900/30 dark:via-slate-900 dark:to-slate-900 sm:p-8"
              style={{ animationDelay: '120ms' }}
            >
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                Stack principal
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {company.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-200 bg-white px-3 py-1.5 font-body text-xs font-semibold text-slate-700 dark:border-white/20 dark:bg-white/5 dark:text-slate-200 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                {heroStats.map((stat) => (
                  <article
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-brand-200 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/50"
                  >
                    <p className="font-display text-xl font-bold text-brand-700 dark:text-brand-300 sm:text-2xl">{stat.value}</p>
                    <p className="mt-2 font-body text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">{stat.label}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <TrustStrip />
      <ServicesGrid limit={4} />
      <ProcessTimeline />
      <PortfolioGrid />
      <TestimonialsGrid />
      <CtaBanner
        title="Escolha o melhor modelo: SaaS pronto para uso ou desenvolvimento sob encomenda"
        description="Vamos avaliar sua necessidade técnica e propor a rota mais eficiente para gerar resultado rápido com qualidade de engenharia."
      />
    </>
  )
}
