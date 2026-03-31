import { motion, useReducedMotion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { PERSON } from '../data/portfolio'

const tap = { scale: 0.94 }
const ease = [0.22, 1, 0.36, 1]

const items = [
  {
    Icon: FaGithub,
    href: PERSON.gitHubProject,
    label: 'GitHub',
    newTab: true,
  },
  {
    Icon: FaLinkedin,
    href: PERSON.linkedIn,
    label: 'LinkedIn',
    newTab: true,
  },
  {
    Icon: FaEnvelope,
    href: `mailto:${PERSON.email}`,
    label: 'Email',
    newTab: false,
  },
  {
    Icon: FaWhatsapp,
    href: 'https://wa.me/919971528971',
    label: 'WhatsApp',
    newTab: true,
  },
]

export function HeroSocialLinks({ className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start ${className}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.36, ease }}
    >
      {items.map((item, i) => {
        const SocialIcon = item.Icon
        return (
          <motion.a
            key={item.label}
            href={item.href}
            className="hero-social-link group relative"
            aria-label={item.label}
            title={item.label}
            target={item.newTab ? '_blank' : undefined}
            rel={item.newTab ? 'noreferrer noopener' : undefined}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: reduceMotion ? 0 : 0.4 + i * 0.06,
              ease,
            }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={tap}
          >
            <SocialIcon className="h-6 w-6 shrink-0 lg:h-5 lg:w-5" aria-hidden />
            <span className="hero-social-tooltip" role="tooltip">
              {item.label}
            </span>
          </motion.a>
        )
      })}
    </motion.div>
  )
}
