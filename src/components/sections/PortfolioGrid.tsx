import { products } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

const segmentColors: Record<string, string> = {
  'Automotivo':           'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-500/30',
  'Turismo':              'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-500/30',
  'Operações Corporativas':'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-500/30',
  'Gestão Pública':       'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500/30',
  'Segurança Pública':    'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-500/30',
  'Comunicação Corporativa':'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-500/30',
  'Finanças e IA':        'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-500/30',
  'Eventos e Segurança':  'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-500/30',
  'Educação':             'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-500/30',
  'Serviços B2B':         'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-500/30',
  'Impacto Social':       'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-500/30',
}

const defaultSegmentColor = 'bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-500/30'

interface PortfolioGridProps {
  limit?: number
}

export function PortfolioGrid({ limit }: PortfolioGridProps) {
  const visibleProducts = typeof limit === 'number' ? products.slice(0, limit) : products

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Portfólio"
            title="Produtos e sistemas já entregues"
            description="Cases reais que demonstram nossa capacidade de transformar necessidade operacional em produto digital funcional e escalável."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <article
              key={product.name}
              className="reveal-up group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/40"
              style={{ animationDelay: `${90 + index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 font-body text-xs font-semibold ${segmentColors[product.segment] ?? defaultSegmentColor}`}
                >
                  {product.segment}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-body text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-900/30 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Em produção
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950 dark:text-white">{product.name}</h3>
              <p className="mt-1 font-body text-sm font-medium text-brand-700 dark:text-brand-300">{product.tagline}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>

              <ul className="mt-5 space-y-2">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 font-body text-sm text-slate-700 dark:text-slate-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {product.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 px-3 py-1 font-body text-xs font-semibold text-slate-600 dark:border-white/20 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 rounded-xl bg-brand-50/70 px-4 py-3 font-body text-sm text-brand-800 dark:bg-brand-900/25 dark:text-brand-200">
                  <strong className="font-semibold">Impacto:</strong> {product.result}
                </p>

                {product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 font-body text-xs font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-600 hover:text-white dark:border-brand-500/30 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:bg-brand-600 dark:hover:text-white"
                  >
                    Ver projeto
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                      <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
