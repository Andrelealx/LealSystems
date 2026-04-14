import { testimonials } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

export function TestimonialsGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Parcerias baseadas em confiança e execução"
            description="Empresas que escolheram a Leal Systems para acelerar operações e construir produtos digitais com segurança técnica."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.author}
              className="reveal-up relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/40"
              style={{ animationDelay: `${100 + index * 90}ms` }}
            >
              <svg
                className="h-8 w-8 shrink-0 text-brand-200 dark:text-brand-700"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
              </svg>

              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                {item.quote}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-slate-950 dark:text-white">{item.author}</p>
                    <p className="font-body text-xs text-slate-600 dark:text-slate-300">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
