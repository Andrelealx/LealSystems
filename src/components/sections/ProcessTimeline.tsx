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

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="reveal-up rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
              style={{ animationDelay: `${90 + index * 90}ms` }}
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                Etapa {index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{step.description}</p>

              <ul className="mt-5 space-y-2">
                {step.outputs.map((output) => (
                  <li key={output} className="flex gap-2 font-body text-sm text-slate-700 dark:text-slate-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
