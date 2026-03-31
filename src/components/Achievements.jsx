import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { ACHIEVEMENTS } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Achievements() {
  return (
    <section id="achievements" className="section-spacing page-gutter scroll-mt-24">
      <Reveal className="text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Key Achievements</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400 md:mx-0">
          Highlights recruiters can validate in conversation—delivery, production systems, and team impact.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <div className="achievement-panel rounded-[1.125rem] border border-white/[0.1] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_20px_48px_-28px_rgba(0,0,0,0.45)] sm:rounded-[1.25rem] sm:p-8 md:p-10">
          <ul className="mx-auto max-w-3xl space-y-5 sm:space-y-6">
            {ACHIEVEMENTS.map((line, i) => (
              <motion.li
                key={line}
                className="achievement-row flex gap-4 sm:gap-5"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className="achievement-check mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400 ring-1 ring-violet-500/30">
                  <FaCheckCircle className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
                </span>
                <p className="text-base leading-relaxed text-zinc-200 sm:text-[17px] sm:leading-relaxed">{line}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
