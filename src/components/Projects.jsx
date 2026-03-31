import { motion, useReducedMotion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'
import projectPlaceholderUrl from '../assets/project-placeholder.svg?url'
import { Reveal, Stagger, StaggerItem } from './Reveal'

function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article
      className="glass-panel card-hover flex h-full min-w-0 flex-col overflow-hidden rounded-[1.125rem] sm:rounded-[1.25rem]"
      whileHover={reduceMotion ? {} : { y: -5, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
    >
      <div className="relative h-40 overflow-hidden border-b border-white/5 bg-zinc-900">
        <img
          src={projectPlaceholderUrl}
          alt={project.imageAlt}
          width={560}
          height={360}
          loading="lazy"
          decoding="async"
          className="block h-full w-full max-w-full object-cover opacity-80 transition duration-500 hover:scale-105 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-violet-400">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-premium-primary flex w-full justify-center text-center text-sm sm:w-auto"
              whileHover={{ scale: 1.03, boxShadow: '0 12px 36px -10px rgba(139, 92, 246, 0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              {project.githubLabel}
            </motion.a>
          ) : (
            <span className="inline-flex min-h-[44px] items-center rounded-full border border-zinc-600/60 bg-zinc-800/40 px-4 py-2 text-xs font-medium text-zinc-400">
              {project.githubLabel}
            </span>
          )}
          {project.demo ? (
            <motion.a
              href={project.demo}
              className="btn-premium-secondary flex w-full justify-center text-sm sm:w-auto"
              whileHover={{ scale: 1.03, boxShadow: '0 0 28px -8px rgba(139, 92, 246, 0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Live demo
            </motion.a>
          ) : (
            <span className="inline-flex min-h-[44px] items-center rounded-full border border-dashed border-zinc-600/50 px-4 py-2 text-xs text-zinc-500">
              Live demo — on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-spacing page-gutter scroll-mt-24">
      <Reveal className="mb-10 text-center md:mb-12 md:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Projects</h2>
        <p className="mx-auto mt-2 max-w-2xl leading-relaxed text-zinc-400 md:mx-0">
          Major work across lending systems and a production-style learning platform.
        </p>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
