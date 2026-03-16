import { useState } from 'react'
import { faqs } from '../../content/site'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

export function FaqList() {
  const [openQuestion, setOpenQuestion] = useState<number>(0)

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="reveal-up">
          <SectionHeading
            eyebrow="FAQ"
            title="Perguntas frequentes"
            description="Respostas rápidas para as dúvidas mais comuns sobre nosso modelo de atuação e execução de projetos."
          />
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === index

            return (
              <article
                key={faq.question}
                className="reveal-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-colors dark:border-white/10 dark:bg-white/5"
                style={{ animationDelay: `${70 + index * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-sm font-semibold text-slate-900 dark:text-white sm:text-base">{faq.question}</span>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-transform dark:border-white/20 dark:text-slate-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-slate-100 px-5 py-4 dark:border-white/10">
                    <p className="font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{faq.answer}</p>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
