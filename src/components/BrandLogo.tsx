import type { Theme } from '../types/theme'
import { BrandSymbol } from './BrandSymbol'

interface BrandLogoProps {
  theme: Theme
  className?: string
  symbolClassName?: string
  mode?: 'full' | 'mark'
}

export function BrandLogo({ theme, className, symbolClassName, mode = 'full' }: BrandLogoProps) {
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950'

  if (mode === 'mark') {
    return <BrandSymbol className={symbolClassName ?? 'h-8 w-auto'} />
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ''}`}>
      <BrandSymbol className={symbolClassName ?? 'h-9 w-auto'} />
      <span className={`whitespace-nowrap font-body leading-none ${textColorClass}`}>
        <strong className="text-[1.15rem] font-extrabold tracking-tight sm:text-[1.2rem]">LEAL</strong>
        <span className="ml-1.5 text-[1.15rem] font-medium tracking-tight sm:text-[1.2rem]">SYSTEMS</span>
      </span>
    </div>
  )
}
