import { Link } from 'react-router-dom'
import { Container } from '../Container'

interface HeaderAction {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
}

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
  actions?: HeaderAction[]
}

export function PageHeader({ eyebrow, title, description, actions = [] }: PageHeaderProps) {
  return (
    <section className="pb-10 pt-16 sm:pb-12 sm:pt-20">
      <Container>
        <div className="max-w-4xl reveal-up">
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:border-brand-400/40 dark:bg-brand-900/30 dark:text-brand-200 sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {description}
          </p>

          {actions.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.to}
                  to={action.to}
                  className={
                    action.variant === 'secondary'
                      ? 'inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 font-body text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-300 dark:hover:text-brand-300'
                      : 'inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3 font-body text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700'
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
