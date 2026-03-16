import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../content/site'
import type { Theme } from '../types/theme'
import { BrandLogo } from './BrandLogo'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  contactEmail: string
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ contactEmail, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#050A16]/85">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link to="/" aria-label="Leal Systems" className="inline-flex items-center" onClick={() => setMobileOpen(false)}>
          <BrandLogo theme={theme} logoClassName="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden lg:block" aria-label="Seções principais">
          <ul className="flex items-center gap-5">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-body text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-700 dark:text-brand-300'
                        : 'text-slate-700 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={`mailto:${contactEmail}?subject=Solicita%C3%A7%C3%A3o%20de%20proposta%20Leal%20Systems`}
            className="hidden rounded-full bg-brand-600 px-5 py-2.5 font-body text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700 lg:inline-flex"
          >
            Falar com especialista
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-white/20 dark:text-white lg:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <Container className="pb-4 lg:hidden">
          <nav
            aria-label="Navegação mobile"
            className="rounded-2xl border border-slate-200 bg-white/95 p-3 dark:border-white/15 dark:bg-slate-900/95"
          >
            <ul className="space-y-1.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 font-body text-sm font-semibold ${
                        isActive
                          ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300'
                          : 'text-slate-700 dark:text-slate-200'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${contactEmail}?subject=Solicita%C3%A7%C3%A3o%20de%20proposta%20Leal%20Systems`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 font-body text-sm font-semibold text-white"
            >
              Solicitar proposta
            </a>
          </nav>
        </Container>
      ) : null}
    </header>
  )
}
