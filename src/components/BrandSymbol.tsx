import { useId } from 'react'

interface BrandSymbolProps {
  className?: string
}

export function BrandSymbol({ className }: BrandSymbolProps) {
  const gradientId = useId()

  return (
    <svg
      viewBox="0 0 118 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="5" y1="8" x2="118" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D6CFF" />
          <stop offset="1" stopColor="#1654E8" />
        </linearGradient>
      </defs>

      <path d="M25.8 8 0 62h50.4l12.6-24.6H40.2L55.8 8H25.8Z" fill={`url(#${gradientId})`} />
      <path d="M57.4 8H118l-12.2 25.6H82.6l-5.2 11h34.8L95.2 86H70l12-24H43l14.4-30.4L57.4 8Z" fill={`url(#${gradientId})`} />
    </svg>
  )
}
