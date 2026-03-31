import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HIRE_ME, PERSON, NAV_LINKS } from '../data/portfolio'

const menuSpring = { type: 'spring', stiffness: 380, damping: 32, mass: 0.85 }

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0.01 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 pt-[env(safe-area-inset-top,0px)] backdrop-blur-xl">
      <div className="page-gutter flex items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
        <a href="#top" className="group flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <motion.span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            GSB
          </motion.span>
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate text-sm font-semibold text-white">{PERSON.name}</span>
            <span className="truncate text-xs text-zinc-400">{PERSON.roleShort}</span>
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3 lg:gap-4">
          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </a>
              )
            })}
          </nav>

          <motion.a
            href={HIRE_ME.href}
            className="nav-hire-cta relative inline-flex min-h-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full px-3 py-2 text-xs font-semibold text-white shadow-lg sm:min-h-0 sm:px-4 sm:py-2.5 sm:text-sm lg:px-5"
            whileHover={{ scale: 1.05, boxShadow: '0 0 36px -4px rgba(139, 92, 246, 0.65)' }}
            whileTap={{ scale: 0.97 }}
          >
            {HIRE_ME.label}
          </motion.a>
        </div>

        <button
          type="button"
          className="flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={menuSpring}
        className="overflow-hidden border-t border-white/5 lg:hidden"
      >
        <motion.div
          className="page-gutter flex flex-col gap-0.5 py-3"
          initial={false}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, delay: open ? 0.05 : 0 }}
        >
          {NAV_LINKS.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="min-h-[44px] rounded-xl px-3 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
              initial={false}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0.85, x: 0 }}
              transition={{ delay: open ? 0.04 + i * 0.03 : 0, duration: 0.25 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href={HIRE_ME.href}
            className="nav-hire-cta mt-2 min-h-[48px] rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
            whileTap={{ scale: 0.98 }}
            initial={false}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          >
            {HIRE_ME.label}
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  )
}
