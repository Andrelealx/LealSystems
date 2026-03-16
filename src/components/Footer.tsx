import { Link } from 'react-router-dom'
import { company, navigation } from '../content/site'
import type { Theme } from '../types/theme'
import { BrandLogo } from './BrandLogo'
import { Container } from './Container'

interface FooterProps {
  contactEmail: string
  appUrl: string
  theme: Theme
}

export function Footer({ contactEmail, appUrl, theme }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 py-12 dark:border-white/10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <BrandLogo theme={theme} logoClassName="h-11 w-auto" />
            <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {company.description}
            </p>
            <p className="mt-3 font-body text-sm text-slate-600 dark:text-slate-300">{company.tagline}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Páginas</p>
              <ul className="mt-3 space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="font-body text-sm text-slate-700 transition-colors hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Modelos</p>
              <ul className="mt-3 space-y-2 font-body text-sm text-slate-700 dark:text-slate-200">
                <li>Produtos SaaS prontos</li>
                <li>Sistemas sob encomenda</li>
                <li>Suporte evolutivo</li>
              </ul>
            </div>

            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Contato</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-body text-sm text-slate-700 transition-colors hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
                  >
                    {contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-sm text-slate-700 transition-colors hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
                  >
                    {appUrl.replace(/^https?:\/\//, '')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 dark:border-white/10">
          <p className="font-body text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Leal Systems. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
