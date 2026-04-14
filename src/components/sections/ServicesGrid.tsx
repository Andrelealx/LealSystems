import { services } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

const serviceIcons: Record<string, string> = {
  'Produtos SaaS prontos para uso': 'M2 4h12v8H2V4zM6 12v2m4-2v2M4 14h8M10 7l-3 3-2-2',
  'Sistemas sob encomenda': 'M4 2h8l4 4v12H4V2zM8 6v4m0 0l-2-2m2 2l2-2',
  'Sites institucionais e landing pages': 'M1 3h14M1 7h14M4 11h8M6 15h4',
  'Plataformas e marketplaces': 'M8 2l5 3v10l-5 3-5-3V5l5-3z',
  'Automações e integrações': 'M2 8h3l2-3 3 6 2-3h4',
  'Infraestrutura, deploy e manutenção': 'M3 13s2-8 5-8 5 8 5 8M8 5V2m-3 3l3-3 3 3',
}

interface ServicesGridProps {
  limit?: number
}

export function ServicesGrid({ limit }: ServicesGridProps) {
  const visibleServices = typeof limit === 'number' ? services.slice(0, limit) : services

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Serviços"
            title="Entrega técnica com foco em resultado de negócio"
            description="Combinamos engenharia de software, estratégia de produto e infraestrutura para construir soluções que resolvem problemas reais de operação."
          />
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {visibleServices.map((service, index) => (
            <article
              key={service.title}
              className="reveal-up group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/40"
              style={{ animationDelay: `${80 + index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-900/40 dark:text-brand-300 dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                  <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d={serviceIcons[service.title] ?? 'M3 8h10M8 3v10'} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300">{service.description}</p>
                </div>
              </div>

              <p className="mt-4 rounded-xl bg-brand-50/70 px-4 py-3 font-body text-sm text-brand-700 dark:bg-brand-900/25 dark:text-brand-200">
                <strong className="font-semibold">Ideal para:</strong> {service.fitFor}
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Resultados esperados</p>
                  <ul className="mt-3 space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 font-body text-sm text-slate-700 dark:text-slate-200">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Entregáveis</p>
                  <ul className="mt-3 space-y-2">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2 font-body text-sm text-slate-700 dark:text-slate-200">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
