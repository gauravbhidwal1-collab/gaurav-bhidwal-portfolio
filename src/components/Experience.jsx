import { motion, useReducedMotion } from 'framer-motion'
import { EXPERIENCE } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Experience() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="experience" className="section-spacing page-gutter relative scroll-mt-24">
      <Reveal className="mb-12 text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Experience</h2>
        <p className="mx-auto mt-2 max-w-2xl leading-relaxed text-zinc-400 md:mx-0">
          Enterprise backends, CI/CD, and fintech workflows — from Spring Boot services to production support.
        </p>
      </Reveal>

      <div className="relative min-w-0 max-w-3xl pl-8 sm:pl-10">
        <div
          className="absolute left-[11px] top-2 bottom-8 w-px bg-gradient-to-b from-violet-500/80 via-indigo-500/40 to-transparent sm:left-[13px]"
          aria-hidden="true"
        />
        <ul className="space-y-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.06}>
              <li className="relative min-w-0">
                <span
                  className="absolute -left-[21px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-violet-400 bg-zinc-950 shadow-[0_0_16px_rgba(167,139,250,0.45)] sm:-left-[23px]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                </span>
                <motion.article
                  className="glass-panel card-hover rounded-[1.125rem] p-6 sm:rounded-[1.25rem] sm:p-7"
                  whileHover={reduceMotion ? {} : { y: -4, scale: 1.008 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-300/90">{job.timeframe}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-200/90">{job.company}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{job.location}</p>
                  <ul className="mt-5 space-y-2.5 text-sm text-zinc-300">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
