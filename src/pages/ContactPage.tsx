import { type FormEvent, useMemo, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { Container } from '../components/Container'
import { FaqList } from '../components/sections/FaqList'
import { PageHeader } from '../components/sections/PageHeader'

interface ContactPageProps {
  contactEmail: string
}

interface ContactFormState {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

const initialFormState: ContactFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: 'Desenvolvimento sob encomenda',
  budget: 'Em análise',
  message: '',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactPage({ contactEmail }: ContactPageProps) {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  usePageMeta(
    'Contato e Solicitação de Proposta',
    'Solicite uma proposta para produtos SaaS ou desenvolvimento sob encomenda com a equipe da Leal Systems.',
  )

  const encodedMailtoLink = useMemo(() => {
    const subject = `Projeto: ${formState.projectType} - ${formState.company || formState.name}`
    const body = [
      `Nome: ${formState.name}`,
      `Empresa: ${formState.company || 'Não informado'}`,
      `E-mail: ${formState.email}`,
      `Telefone: ${formState.phone || 'Não informado'}`,
      `Tipo de projeto: ${formState.projectType}`,
      `Faixa de investimento: ${formState.budget}`,
      '',
      'Mensagem:',
      formState.message,
    ].join('\n')

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [contactEmail, formState])

  const handleChange = <T extends keyof ContactFormState>(field: T, value: ContactFormState[T]) => {
    setFormState((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: ContactFormErrors = {}
    if (!formState.name.trim()) {
      nextErrors.name = 'Informe seu nome.'
    }
    if (!formState.email.trim() || !isValidEmail(formState.email)) {
      nextErrors.email = 'Informe um e-mail válido.'
    }
    if (!formState.message.trim()) {
      nextErrors.message = 'Descreva o contexto do projeto.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setSubmitted(true)
    window.location.href = encodedMailtoLink
  }

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Fale com a Leal Systems"
        description="Conte o momento da sua empresa e o tipo de solução que você busca. Retornamos com direcionamento técnico e comercial para avançar com segurança."
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="reveal-up space-y-4">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 dark:text-brand-300">E-mail comercial</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 inline-flex font-body text-lg font-semibold text-slate-900 transition-colors hover:text-brand-700 dark:text-white dark:hover:text-brand-300"
                >
                  {contactEmail}
                </a>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 dark:text-brand-300">Tempo médio de retorno</p>
                <p className="mt-2 font-body text-lg font-semibold text-slate-900 dark:text-white">Até 1 dia útil</p>
                <p className="mt-2 font-body text-sm text-slate-600 dark:text-slate-300">
                  Em projetos com maior complexidade, respondemos com uma triagem inicial técnica em até 48h.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 dark:text-brand-300">Modelos de atendimento</p>
                <ul className="mt-3 space-y-2 font-body text-sm text-slate-700 dark:text-slate-200">
                  <li>Produtos SaaS prontos para uso</li>
                  <li>Desenvolvimento de sistemas sob encomenda</li>
                  <li>Sustentação e evolução contínua</li>
                </ul>
              </article>
            </div>

            <form
              onSubmit={handleSubmit}
              className="reveal-up rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
              style={{ animationDelay: '120ms' }}
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
                  <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">Nome*</span>
                  <input
                    value={formState.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  />
                  {errors.name ? <span className="font-body text-xs text-rose-600">{errors.name}</span> : null}
                </label>

                <label className="space-y-1.5">
                  <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">Empresa</span>
                  <input
                    value={formState.company}
                    onChange={(event) => handleChange('company', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">E-mail*</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  />
                  {errors.email ? <span className="font-body text-xs text-rose-600">{errors.email}</span> : null}
                </label>

                <label className="space-y-1.5">
                  <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">Telefone</span>
                  <input
                    value={formState.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  />
                </label>

                <label className="space-y-1.5">
                  <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">Tipo de projeto</span>
                  <select
                    value={formState.projectType}
                    onChange={(event) => handleChange('projectType', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  >
                    <option>Desenvolvimento sob encomenda</option>
                    <option>Assinatura de produto SaaS</option>
                    <option>Site institucional / landing page</option>
                    <option>Automações e integrações</option>
                    <option>Infraestrutura e manutenção</option>
                  </select>
                </label>

                <label className="space-y-1.5">
                  <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">Faixa de investimento</span>
                  <select
                    value={formState.budget}
                    onChange={(event) => handleChange('budget', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  >
                    <option>Em análise</option>
                    <option>Até R$ 20 mil</option>
                    <option>R$ 20 mil a R$ 60 mil</option>
                    <option>R$ 60 mil a R$ 150 mil</option>
                    <option>Acima de R$ 150 mil</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block space-y-1.5">
                <span className="font-body text-sm font-medium text-slate-700 dark:text-slate-200">Contexto do projeto*</span>
                <textarea
                  value={formState.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-body text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 dark:border-white/20 dark:bg-slate-900/30 dark:text-white"
                  placeholder="Descreva o objetivo do projeto, problema atual, prazo esperado e integrações necessárias."
                />
                {errors.message ? <span className="font-body text-xs text-rose-600">{errors.message}</span> : null}
              </label>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-body text-xs text-slate-500 dark:text-slate-400">
                  Ao enviar, abriremos seu cliente de e-mail com o briefing preenchido.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3 font-body text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Enviar briefing
                </button>
              </div>

              {submitted ? (
                <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 font-body text-sm text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                  Perfeito. Se o cliente de e-mail não abrir automaticamente, envie para {contactEmail}.
                </p>
              ) : null}
            </form>
          </div>
        </Container>
      </section>

      <FaqList />
    </>
  )
}
