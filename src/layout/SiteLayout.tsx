import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import type { Theme } from '../types/theme'

interface SiteLayoutProps {
  contactEmail: string
  appUrl: string
  theme: Theme
  onToggleTheme: () => void
}

export function SiteLayout({ contactEmail, appUrl, theme, onToggleTheme }: SiteLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-500/20" />
        <div className="absolute -right-24 top-[24rem] h-80 w-80 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-600/25" />
        <div className="absolute inset-x-0 top-[40rem] h-96 bg-gradient-to-b from-brand-50/60 to-transparent dark:from-brand-900/20" />
      </div>

      <Navbar contactEmail={contactEmail} theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer contactEmail={contactEmail} appUrl={appUrl} theme={theme} />
    </div>
  )
}
