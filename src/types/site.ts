export type RoutePath = '/' | '/sobre' | '/servicos' | '/portfolio' | '/contato'

export interface NavItem {
  label: string
  path: RoutePath
}

export interface StatItem {
  value: string
  label: string
}

export interface ValueItem {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
  fitFor: string
  outcomes: string[]
  deliverables: string[]
}

export interface ProductItem {
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  segment: string
  result: string
  link?: string
  screenshot?: string
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
}

export interface ProcessStep {
  title: string
  description: string
  outputs: string[]
}

export interface FaqItem {
  question: string
  answer: string
}
