import { industries } from '../../content/site'
import { Container } from '../Container'

export function TrustStrip() {
  return (
    <section className="pb-12 pt-4 sm:pb-14">
      <Container>
        <div className="reveal-up rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Segmentos atendidos
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-slate-200 px-3 py-1.5 font-body text-xs font-semibold text-slate-700 dark:border-white/15 dark:text-slate-200 sm:text-sm"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
