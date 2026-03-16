import type { Theme } from '../types/theme'

interface BrandLogoProps {
  theme: Theme
  className?: string
  logoClassName?: string
  mode?: 'full' | 'mark'
}

export function BrandLogo({ theme, className, logoClassName, mode = 'full' }: BrandLogoProps) {
  if (mode === 'mark') {
    return <img src="/logo-icon.svg" alt="Leal Systems" className={logoClassName ?? 'h-8 w-auto'} loading="eager" />
  }

  const logoSource = theme === 'dark' ? '/logo-horizontal-dark.svg' : '/logo-horizontal.svg'

  return (
    <img src={logoSource} alt="Leal Systems" className={`${logoClassName ?? 'h-8 w-auto'} ${className ?? ''}`} loading="eager" />
  )
}
