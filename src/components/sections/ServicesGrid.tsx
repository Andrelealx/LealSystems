import { services } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

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
              className="reveal-up rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
              style={{ animationDelay: `${80 + index * 80}ms` }}
            >
              <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{service.description}</p>
              <p className="mt-4 rounded-xl bg-brand-50/70 px-4 py-3 font-body text-sm text-brand-700 dark:bg-brand-900/25 dark:text-brand-200">
                <strong className="font-semibold">Ideal para:</strong> {service.fitFor}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Resultados esperados</p>
                  <ul className="mt-3 space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 font-body text-sm text-slate-700 dark:text-slate-200">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
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
