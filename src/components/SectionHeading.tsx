interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={centered ? 'text-center' : 'text-left'}>
      <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">{description}</p>
    </header>
  )
}
