import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { PERSON, ABOUT_PARAGRAPHS } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1]

function paragraphVariants(reduceMotion) {
  return {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : i * 0.1,
        ease,
      },
    }),
  }
}

export function About() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '0px 0px 120px 0px', amount: 0.12 })
  const paraVariants = paragraphVariants(Boolean(reduceMotion))

  return (
    <section id="about" className="about-section section-spacing page-gutter scroll-mt-24">
      <motion.div
        ref={ref}
        className="about-card min-w-0 rounded-3xl border border-white/[0.1] p-5 sm:p-6 md:p-10 lg:p-12"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
      >
        <motion.h2
          className="text-center text-2xl font-bold tracking-tight text-white md:text-left md:text-3xl"
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.05, ease }}
        >
          About
        </motion.h2>
        <motion.p
          className="about-eyebrow mt-3 text-center text-sm font-medium tracking-wide text-violet-300/95 md:text-left"
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.12, ease }}
        >
          Java Full Stack Developer · 4.5+ years · {PERSON.location}
        </motion.p>

        <div className="about-prose mt-8 md:mt-10">
          {ABOUT_PARAGRAPHS.map((paragraph, i) => (
            <motion.p
              key={i}
              className="about-prose-paragraph"
              custom={i}
              variants={paraVariants}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
