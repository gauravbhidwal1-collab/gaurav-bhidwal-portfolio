import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT_COPY, MAILTO_HIRE, PERSON, WHATSAPP_URL } from '../data/portfolio'
import { IconGitHub, IconLinkedIn, IconMail, IconPhone } from './Icons'
import { Reveal } from './Reveal'

const tap = { scale: 0.97 }

const rows = [
  {
    label: 'Email',
    value: PERSON.email,
    href: `mailto:${PERSON.email}`,
    Icon: IconMail,
  },
  {
    label: 'Phone',
    value: PERSON.phoneDisplay,
    href: `tel:${PERSON.phoneTel}`,
    Icon: IconPhone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gaurav2021',
    href: PERSON.linkedIn,
    Icon: IconLinkedIn,
  },
  {
    label: 'GitHub',
    value: 'github.com/GauravBhidwal/teachToTech',
    href: PERSON.gitHubProject,
    Icon: IconGitHub,
  },
  {
    label: 'WhatsApp',
    value: 'Message on WhatsApp',
    href: WHATSAPP_URL,
    Icon: FaWhatsapp,
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-spacing page-gutter scroll-mt-24 pb-20 md:pb-24">
      <Reveal>
        <div className="glass-panel glow-border-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-600/15 blur-3xl" />

          <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-left md:text-3xl">Get In Touch</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-zinc-400 md:mx-0 md:text-left md:text-base">
            Reach out for backend / full-stack Java roles, referrals, or technical discussions.
          </p>
          <p className="mx-auto mt-3 flex items-center justify-center gap-2 text-center text-xs text-zinc-500 md:mx-0 md:justify-start md:text-left md:text-sm">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/90" aria-hidden />
            {CONTACT_COPY.responseTime}
          </p>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <motion.a
              href={MAILTO_HIRE}
              className="btn-premium-primary inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 sm:flex-none"
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px -12px rgba(139, 92, 246, 0.55)' }}
              whileTap={tap}
            >
              <IconMail className="h-4 w-4" aria-hidden />
              Email me
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="contact-whatsapp-cta inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-100 shadow-lg transition-[transform,box-shadow] duration-200 hover:border-emerald-400/50 hover:bg-emerald-500/15 sm:flex-none"
              whileHover={{ scale: 1.02, boxShadow: '0 0 36px -8px rgba(16, 185, 129, 0.45)' }}
              whileTap={tap}
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden />
              WhatsApp
            </motion.a>
          </div>

          <ul className="relative mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:mt-10 lg:grid-cols-3">
            {rows.map((row, i) => {
              const IconComponent = row.Icon
              return (
                <motion.li
                  key={row.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-500/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-600/20 text-violet-300 ring-1 ring-white/10">
                    <IconComponent className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{row.label}</p>
                    <a
                      href={row.href}
                      className="link-premium mt-1 block text-sm font-medium leading-snug text-white"
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    >
                      {row.value}
                    </a>
                  </div>
                </motion.li>
              )
            })}
          </ul>

          <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 sm:text-left">
            More repositories:{' '}
            <a href={PERSON.gitHubProfile} className="link-premium font-medium" target="_blank" rel="noreferrer">
              github.com/GauravBhidwal
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  )
}
