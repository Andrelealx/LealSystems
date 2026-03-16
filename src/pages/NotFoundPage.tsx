import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { Container } from '../components/Container'

export function NotFoundPage() {
  usePageMeta('Página não encontrada', 'A página solicitada não foi encontrada no site da Leal Systems.')

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">Erro 404</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">Página não encontrada</h1>
          <p className="mt-4 font-body text-base text-slate-600 dark:text-slate-300">
            O conteúdo que você tentou acessar não existe ou foi movido. Volte para a página inicial para continuar.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-3 font-body text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Ir para início
          </Link>
        </div>
      </Container>
    </section>
  )
}
