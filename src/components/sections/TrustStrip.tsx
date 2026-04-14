import { industries } from '../../content/site'
import { Container } from '../Container'

export function TrustStrip() {
  return (
    <section className="pb-12 pt-4 sm:pb-14">
      <Container>
        <div className="reveal-up rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="shrink-0 font-body text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Segmentos atendidos
            </p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/10 sm:block hidden" aria-hidden="true" />
            <ul className="flex flex-wrap gap-2.5">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-body text-xs font-semibold text-slate-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:text-brand-300 sm:text-sm"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
