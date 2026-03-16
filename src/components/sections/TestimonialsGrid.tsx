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
              className="reveal-up rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
              style={{ animationDelay: `${100 + index * 90}ms` }}
            >
              <p className="font-body text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">{item.author}</p>
                <p className="mt-1 font-body text-sm text-slate-600 dark:text-slate-300">
                  {item.role} · {item.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
