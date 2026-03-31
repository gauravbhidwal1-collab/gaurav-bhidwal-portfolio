import { motion } from 'framer-motion'
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNetworkWired,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiJenkins,
  SiMysql,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from 'react-icons/si'
import { TECH_STACK_GROUPS } from '../data/portfolio'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const ICON_MAP = {
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,
  Microservices: FaNetworkWired,
  React: SiReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  Docker: FaDocker,
  Jenkins: SiJenkins,
  Git: FaGitAlt,
  MySQL: SiMysql,
  Oracle: FaDatabase,
  PostgreSQL: SiPostgresql,
}

export function Skills() {
  return (
    <section id="skills" className="section-spacing page-gutter scroll-mt-24">
      <Reveal className="mb-10 text-center md:mb-12 md:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Tech Stack</h2>
        <p className="mx-auto mt-2 max-w-2xl text-zinc-400 md:mx-0">
          Core technologies I use in production—icons match the tools behind my recent work.
        </p>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TECH_STACK_GROUPS.map((group) => (
          <StaggerItem key={group.title}>
            <motion.div
              className="tech-stack-card h-full min-w-0 rounded-[1.125rem] border border-white/[0.08] bg-zinc-950/50 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md sm:rounded-[1.25rem] sm:p-6"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.labels.map((label) => {
                  const IconComponent = ICON_MAP[label]
                  if (!IconComponent) return null
                  return (
                    <motion.div
                      key={label}
                      className="tech-skill-badge group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 pr-4 text-sm text-zinc-200"
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/80 text-lg text-violet-300 transition group-hover:bg-violet-500/20 group-hover:text-violet-200 group-hover:shadow-[0_0_20px_-4px_rgba(139,92,246,0.55)]">
                        <IconComponent className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="font-medium">{label}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
