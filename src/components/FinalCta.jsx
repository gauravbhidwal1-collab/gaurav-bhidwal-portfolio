import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'
import { FINAL_CTA, MAILTO_HIRE } from '../data/portfolio'
import { Reveal } from './Reveal'

const tap = { scale: 0.97 }

export function FinalCta() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="page-gutter scroll-mt-24 border-t border-white/[0.06] py-14 md:py-16 lg:py-20"
    >
      <Reveal>
        <div className="final-cta-panel relative mx-auto max-w-3xl overflow-hidden rounded-[1.25rem] border border-violet-500/20 bg-gradient-to-br from-violet-950/40 via-zinc-950/80 to-indigo-950/40 px-6 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_24px_64px_-32px_rgba(99,102,241,0.35)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-indigo-600/20 blur-3xl" aria-hidden />

          <h2
            id="final-cta-heading"
            className="relative text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl"
          >
            {FINAL_CTA.heading}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {FINAL_CTA.sub}
          </p>
          <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.a
              href="#contact"
              className="btn-premium-primary inline-flex min-h-[48px] w-full items-center justify-center gap-2 sm:w-auto"
              whileHover={{ scale: 1.03, boxShadow: '0 14px 44px -10px rgba(139, 92, 246, 0.55)' }}
              whileTap={tap}
            >
              {FINAL_CTA.buttonLabel}
            </motion.a>
            <motion.a
              href={MAILTO_HIRE}
              className="btn-premium-secondary inline-flex min-h-[48px] w-full items-center justify-center gap-2 sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={tap}
            >
              <FaEnvelope className="h-4 w-4" aria-hidden />
              Email directly
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
