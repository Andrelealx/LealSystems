import { Link } from 'react-router-dom'
import { Container } from '../Container'

interface CtaBannerProps {
  title: string
  description: string
}

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="pb-20 pt-8 sm:pb-24">
      <Container>
        <div className="reveal-up overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-8 text-white shadow-soft sm:p-12">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Vamos construir juntos</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-brand-50 sm:text-lg">{description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-body text-sm font-semibold text-brand-700 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Solicitar proposta
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 font-body text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
