import { company, values } from '../content/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { Container } from '../components/Container'
import { CtaBanner } from '../components/sections/CtaBanner'
import { PageHeader } from '../components/sections/PageHeader'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'

export function AboutPage() {
  usePageMeta(
    'Sobre a Leal Systems',
    'Conheça a Leal Systems, software house brasileira B2B com foco em produtos digitais, sistemas sob encomenda e operação tecnológica de ponta a ponta.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Sobre a Leal Systems"
        title="Engenharia de software orientada a resultado de negócio"
        description="Somos uma software house brasileira que atua lado a lado com empresas para construir produtos digitais confiáveis, escaláveis e alinhados à realidade operacional de cada cliente."
      />

      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="reveal-up rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-white/5">
              <h2 className="font-display text-3xl font-semibold text-slate-950 dark:text-white">Quem somos</h2>
              <p className="mt-4 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {company.description} Nossa atuação cobre diagnóstico, arquitetura, desenvolvimento, deploy e manutenção,
                garantindo continuidade técnica e visão estratégica durante todo o ciclo de vida do produto.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/40">
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Fundação</p>
                  <p className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">{company.founded}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/40">
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Modelo</p>
                  <p className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">B2B</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/40">
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Atuação</p>
                  <p className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">Brasil</p>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {values.map((item, index) => (
                <article
                  key={item.title}
                  className="reveal-up rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
                  style={{ animationDelay: `${90 + index * 90}ms` }}
                >
                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <article className="reveal-up rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-white/5">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Stack de referência</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {company.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1.5 font-body text-xs font-semibold text-slate-700 dark:border-white/15 dark:text-slate-200 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <ProcessTimeline />
      <CtaBanner
        title="Transforme necessidades de negócio em software confiável"
        description="Nossa equipe combina visão estratégica e execução técnica para entregar soluções prontas para operar e evoluir."
      />
    </>
  )
}
