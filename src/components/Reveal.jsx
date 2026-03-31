import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
}) {
  const reduceMotion = useReducedMotion()
  const hidden = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }
  const visible = { opacity: 1, y: 0 }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: '0px 0px 72px 0px', amount: 0.08 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Staggered children — uses useInView on a ref (more reliable than nested whileInView
 * inside another motion wrapper, which was leaving cards at opacity: 0).
 */
export function Stagger({ children, className = '', stagger = 0.08 }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px 100px 0px',
    amount: 0.06,
  })

  const staggerVal = reduceMotion ? 0 : stagger

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerVal,
            delayChildren: reduceMotion ? 0 : 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduceMotion ? 0 : 0.52, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
