import { products } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

export function PortfolioGrid() {
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="reveal-up flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
              style={{ animationDelay: `${90 + index * 90}ms` }}
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                {product.segment}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">{product.name}</h3>
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

              <div className="mt-6 flex flex-wrap gap-2">
                {product.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 px-3 py-1 font-body text-xs font-semibold text-slate-600 dark:border-white/20 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 rounded-xl bg-brand-50/70 px-4 py-3 font-body text-sm text-brand-800 dark:bg-brand-900/25 dark:text-brand-200">
                <strong className="font-semibold">Impacto:</strong> {product.result}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
