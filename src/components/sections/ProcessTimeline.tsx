import { process } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

export function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Método"
            title="Como conduzimos projetos digitais"
            description="Um fluxo de trabalho pensado para reduzir risco, garantir previsibilidade e gerar valor contínuo ao negócio."
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="reveal-up group relative flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/40"
              style={{ animationDelay: `${90 + index * 90}ms` }}
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <span className="font-display text-lg font-bold text-white">{index + 1}</span>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                  Etapa {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {step.outputs.map((output) => (
                    <li key={output} className="flex gap-2 font-body text-sm text-slate-700 dark:text-slate-200">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
