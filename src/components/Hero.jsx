import { useState } from 'react'
import { motion } from 'framer-motion'
import { HERO, HIGHLIGHTS_SECTION, PERSON, RECRUITER_SNAPSHOT } from '../data/portfolio'
import { ProfileAvatar } from './ProfileAvatar'
import { ProfileModal } from './ProfileModal'
import { HeroSocialLinks } from './HeroSocialLinks'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { SnapshotCard } from './SnapshotCard'
import { WhatICanDo } from './WhatICanDo'

const socialTap = { scale: 0.94 }

export function Hero() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <section id="top" className="page-gutter relative pb-12 pt-7 sm:pb-16 sm:pt-9 md:pb-20 md:pt-16">
      <div className="grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-center lg:gap-14">
        <div className="order-1 flex w-full min-w-0 justify-center lg:order-none lg:justify-center">
          <motion.div
            className="profile-card transition-[border-color,box-shadow] duration-300"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative mx-auto flex shrink-0 justify-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              <div
                className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-500 via-indigo-500 to-blue-500 opacity-90 blur-xl"
                aria-hidden
              />
              <ProfileAvatar
                alt="Gaurav Singh Bhidwal — profile photo"
                onOpen={() => setProfileOpen(true)}
                modalOpen={profileOpen}
              />
            </motion.div>

            <div className="flex w-full min-w-0 flex-col items-center justify-center gap-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/90">{PERSON.roleShort}</p>
              <h1 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">{PERSON.name}</h1>
              <p className="flex items-center justify-center gap-2 text-sm text-zinc-400">
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>
                  {PERSON.location} · {PERSON.experienceYears} years
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="order-2 min-w-0 text-center lg:order-none lg:text-left">
          <motion.h2
            className="text-[1.65rem] font-bold leading-[1.2] tracking-tight text-white sm:text-3xl md:text-4xl md:leading-[1.12] lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.heading}
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200/95 ring-1 ring-emerald-500/15 sm:text-sm lg:mx-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.availabilityBadge}
          </motion.p>
          <motion.p
            className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-zinc-300 sm:text-base lg:mx-0 lg:text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.impactLine}
          </motion.p>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-[0.9375rem] leading-[1.65] text-zinc-300 sm:text-base sm:leading-relaxed sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.subheading}
          </motion.p>
          <motion.p
            className="hero-killer-line mx-auto mt-5 max-w-2xl text-base italic leading-relaxed sm:text-lg lg:mx-0 lg:text-left"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.killerLine}
          </motion.p>
          <motion.p
            className="mx-auto mt-5 max-w-2xl border-t-2 border-violet-500/80 pt-4 text-center text-sm leading-relaxed text-violet-200/90 sm:text-base lg:border-l-2 lg:border-t-0 lg:pl-4 lg:pt-0 lg:text-left lg:mx-0"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO.tagline}
          </motion.p>

          <motion.div
            className="mx-auto mt-9 flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-secondary flex w-full justify-center sm:w-auto"
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px -8px rgba(139, 92, 246, 0.35)' }}
              whileTap={socialTap}
            >
              View Resume
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn-premium-primary flex w-full justify-center sm:w-auto"
              whileHover={{ scale: 1.03, boxShadow: '0 14px 44px -10px rgba(139, 92, 246, 0.6)' }}
              whileTap={socialTap}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-premium-secondary flex w-full justify-center border-violet-500/30 sm:w-auto"
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px -8px rgba(139, 92, 246, 0.4)' }}
              whileTap={socialTap}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <HeroSocialLinks className="mt-6" />
          <WhatICanDo />
        </div>
      </div>

      <div className="highlights-region mt-14 text-center sm:mt-16 md:mt-20 md:text-left">
        <Reveal delay={0.05}>
          <header className="mx-auto mb-8 max-w-2xl md:mx-0 md:mb-10">
            <h3 className="highlights-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {HIGHLIGHTS_SECTION.title}
            </h3>
            <p className="highlights-subtitle mt-4 text-base leading-relaxed sm:text-[17px] sm:leading-relaxed">
              {HIGHLIGHTS_SECTION.subtitle}
            </p>
          </header>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {RECRUITER_SNAPSHOT.map((item) => (
            <StaggerItem key={item.id}>
              <SnapshotCard eyebrow={item.eyebrow} title={item.title} body={item.body} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </section>
  )
}
